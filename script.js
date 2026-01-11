import { enneagramQuestions, mbtiQuestions } from './questions.js';
import { translations, mbtiData, enneaTypes } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        lang: 'fr', // 'fr' | 'en'
        currentTest: null,
        questions: [],
        currentPage: 0,
        questionsPerPage: 6,
        answers: {},
        totalQuestions: 0,
        currentDetailType: null
    };

    // DOM Elements
    const views = {
        landing: document.getElementById('landing-view'),
        test: document.getElementById('test-view'),
        results: document.getElementById('results-view'),
        types: document.getElementById('types-view'),
        detail: document.getElementById('detail-view')
    };

    const container = document.getElementById('questions-container');
    const prevBtn = document.getElementById('prev-page-btn');
    const nextBtn = document.getElementById('next-page-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const langToggle = document.getElementById('lang-toggle');

    // Init Logic
    init();

    function init() {
        if (localStorage.getItem('lang')) {
            state.lang = localStorage.getItem('lang');
        }
        updateLanguage();
        setupNavigation();
        setupLanding();
        setupTypesView();
    }

    function t(key) {
        return translations[state.lang][key] || key;
    }

    function updateLanguage() {
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.dataset.t;
            if (translations[state.lang][key]) el.innerText = translations[state.lang][key];
        });

        // Update dynamic content if present
        if (langToggle) langToggle.innerText = state.lang.toUpperCase();

        // Populate types again to update descriptions
        populateTypes();

        // If test is active, re-render questions
        if (!views.test.classList.contains('hidden')) {
            document.getElementById('test-title-display').innerText = state.currentTest === 'enneagram' ? t('testTitleEnnea') : t('testTitleMbti');
            renderPage();
        }

        // If detail view is active, re-render details
        if (!views.detail.classList.contains('hidden') && state.currentDetailType) {
            showTypeDetail(state.currentDetailType);
        }
    }

    function setupNavigation() {
        document.getElementById('nav-home-btn').addEventListener('click', () => {
            switchView('landing');
            resetNav();
            document.getElementById('nav-home-btn').classList.add('active');
        });

        document.getElementById('nav-types-btn').addEventListener('click', () => {
            switchView('types');
            resetNav();
            document.getElementById('nav-types-btn').classList.add('active');
        });

        if (langToggle) {
            langToggle.addEventListener('click', () => {
                state.lang = state.lang === 'fr' ? 'en' : 'fr';
                localStorage.setItem('lang', state.lang);
                updateLanguage();
            });
        }

        // Detail View Back Button
        const backToTypesBtn = document.getElementById('back-to-types-btn');
        if (backToTypesBtn) {
            backToTypesBtn.addEventListener('click', () => {
                switchView('types');
                window.scrollTo(0, 0);
            });
        }
    }

    function resetNav() {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    }

    function setupLanding() {
        document.querySelectorAll('.start-test-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const testType = e.target.dataset.test;
                startTest(testType);
            });
        });
    }

    function startTest(type) {
        state.currentTest = type;
        state.questions = type === 'enneagram' ? enneagramQuestions : mbtiQuestions;
        state.totalQuestions = state.questions.length;
        state.currentPage = 0;
        state.answers = {};

        // Load specific storage key (reset for now to avoid conflicts or complex resume logic)
        localStorage.removeItem(`${type}_answers`);

        document.getElementById('test-title-display').innerText = type === 'enneagram' ? t('testTitleEnnea') : t('testTitleMbti');

        switchView('test');
        renderPage();
        setupTestControls();
    }

    function setupTestControls() {
        const newPrev = prevBtn.cloneNode(true);
        const newNext = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);

        const pBtn = document.getElementById('prev-page-btn');
        const nBtn = document.getElementById('next-page-btn');

        pBtn.addEventListener('click', () => {
            if (state.currentPage > 0) {
                state.currentPage--;
                renderPage();
                window.scrollTo(0, 0);
            }
        });

        nBtn.addEventListener('click', () => {
            if (validatePage()) {
                if ((state.currentPage + 1) * state.questionsPerPage < state.totalQuestions) {
                    state.currentPage++;
                    renderPage();
                    window.scrollTo(0, 0);
                } else {
                    finishTest();
                }
            } else {
                alert(t('alertAnswerAll'));
            }
        });
    }

    function switchView(viewName) {
        Object.values(views).forEach(el => el.classList.add('hidden'));
        Object.values(views).forEach(el => el.classList.remove('active'));

        views[viewName].classList.remove('hidden');
        views[viewName].classList.add('active');
    }

    function renderPage() {
        container.innerHTML = '';

        // Update Buttons Text
        document.getElementById('prev-page-btn').innerText = t('btnPrev');
        const nextB = document.getElementById('next-page-btn');

        const start = state.currentPage * state.questionsPerPage;
        const end = Math.min(start + state.questionsPerPage, state.totalQuestions);
        const pageQuestions = state.questions.slice(start, end);

        pageQuestions.forEach(q => {
            const card = createQuestionCard(q);
            container.appendChild(card);
        });

        const progress = Math.round((Object.keys(state.answers).length / state.totalQuestions) * 100);
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;

        document.getElementById('prev-page-btn').classList.toggle('hidden', state.currentPage === 0);

        if (end >= state.totalQuestions) {
            nextB.innerText = t('btnResults');
        } else {
            nextB.innerText = t('btnNext');
        }
    }

    function createQuestionCard(question) {
        const card = document.createElement('div');
        card.className = 'question-card';

        const text = document.createElement('div');
        text.className = 'question-text';
        // Handle bilingual text object
        text.innerText = typeof question.text === 'object' ? question.text[state.lang] : question.text;

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        const labelAgree = document.createElement('div');
        labelAgree.className = 'option-label agree-label';
        labelAgree.innerText = t('agree');

        const radioContainer = document.createElement('div');
        radioContainer.className = 'radio-container';

        const values = [
            { val: 6, class: 'agree size-3' },
            { val: 5, class: 'agree size-2' },
            { val: 4, class: 'agree size-1' },
            { val: 3, class: 'size-0' },
            { val: 2, class: 'disagree size-1' },
            { val: 1, class: 'disagree size-2' },
            { val: 0, class: 'disagree size-3' }
        ];

        values.forEach(item => {
            const circle = document.createElement('div');
            circle.className = `radio-option ${item.class}`;
            if (state.answers[question.id] === item.val) {
                circle.classList.add('selected');
            }

            circle.addEventListener('click', () => {
                const parent = circle.parentNode;
                parent.querySelectorAll('.radio-option').forEach(el => el.classList.remove('selected'));
                circle.classList.add('selected');
                setAnswer(question.id, item.val);
            });

            radioContainer.appendChild(circle);
        });

        const labelDisagree = document.createElement('div');
        labelDisagree.className = 'option-label disagree-label';
        labelDisagree.innerText = t('disagree');

        optionsContainer.appendChild(labelAgree);
        optionsContainer.appendChild(radioContainer);
        optionsContainer.appendChild(labelDisagree);

        card.appendChild(text);
        card.appendChild(optionsContainer);

        return card;
    }

    function setAnswer(qId, value) {
        state.answers[qId] = value;
        localStorage.setItem(`${state.currentTest}_answers`, JSON.stringify(state.answers));

        const progress = Math.round((Object.keys(state.answers).length / state.totalQuestions) * 100);
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;
    }

    function validatePage() {
        const start = state.currentPage * state.questionsPerPage;
        const end = Math.min(start + state.questionsPerPage, state.totalQuestions);
        const pageQuestions = state.questions.slice(start, end);
        return pageQuestions.every(q => state.answers.hasOwnProperty(q.id));
    }

    function finishTest() {
        if (state.currentTest === 'enneagram') {
            calculateEnneagramResults();
        } else {
            calculateMBTIResults();
        }
        switchView('results');
    }

    // --- Enneagram Logic ---
    function calculateEnneagramResults() {
        document.getElementById('enneagram-visuals').classList.remove('hidden');
        document.getElementById('mbti-visuals').classList.add('hidden');

        const scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
        const maxPoints = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

        state.questions.forEach(q => {
            const val = state.answers[q.id];
            if (val !== undefined) {
                scores[q.type] += val; // 0-6
                maxPoints[q.type] += 6;
            }
        });

        const percentages = {};
        let winningType = 1;
        let highestScore = -1;

        for (let type = 1; type <= 9; type++) {
            const raw = scores[type];
            const max = maxPoints[type] || 1;
            const pct = Math.round((raw / max) * 100);
            percentages[type] = pct;
            if (pct > highestScore) { highestScore = pct; winningType = type; }
        }

        document.getElementById('result-type-title').innerText = `${t('enneagramTitle')} Type ${winningType}`;
        // Hide/Show Desc link based on test
        document.getElementById('result-description').innerHTML = ''; // Clear MBTI specific

        const chartCanvas = document.getElementById('resultsCanvas');
        const chartStatus = Chart.getChart(chartCanvas);
        if (chartStatus) chartStatus.destroy();

        renderRadarChart(percentages);
        renderEnneagramDetails(percentages);
    }

    function renderRadarChart(percentages) {
        const ctx = document.getElementById('resultsCanvas').getContext('2d');
        const labels = Object.keys(percentages).map(k => `Type ${k}`);
        const data = Object.values(percentages);
        const isDark = document.body.classList.contains('dark-mode');
        const textColor = isDark ? '#eee' : '#666';
        const gridColor = isDark ? '#444' : '#ddd';

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Affinité (%)',
                    data: data,
                    backgroundColor: 'rgba(66, 152, 180, 0.2)',
                    borderColor: 'rgba(66, 152, 180, 1)',
                    pointBackgroundColor: '#88619a',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { color: gridColor },
                        grid: { color: gridColor },
                        pointLabels: { color: textColor, font: { size: 12 } },
                        suggestedMin: 0, suggestedMax: 100
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    function renderEnneagramDetails(percentages) {
        const container = document.getElementById('detailed-scores');
        container.innerHTML = `<h3>${t('detailsTitle')}</h3>`;
        const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
        sorted.forEach(([type, score]) => {
            container.innerHTML += `
                <div class="score-row">
                    <div class="score-label"><span>Type ${type}</span><span>${score}%</span></div>
                    <div class="score-bar-bg"><div class="score-bar-fill" style="width: ${score}%"></div></div>
                </div>`;
        });
    }

    // --- MBTI Logic ---
    function calculateMBTIResults() {
        document.getElementById('enneagram-visuals').classList.add('hidden');
        document.getElementById('mbti-visuals').classList.remove('hidden');

        const scores = { EI: 0, SN: 0, TF: 0, JP: 0, AT: 0 };

        state.questions.forEach(q => {
            const rawVal = state.answers[q.id];
            if (rawVal !== undefined) {
                const score = rawVal - 3;
                const added = q.direction * score;
                scores[q.dimension] += added;
            }
        });

        const typeStr =
            (scores.EI >= 0 ? 'E' : 'I') +
            (scores.SN >= 0 ? 'N' : 'S') +
            (scores.TF >= 0 ? 'F' : 'T') +
            (scores.JP >= 0 ? 'J' : 'P') +
            '-' +
            (scores.AT >= 0 ? 'A' : 'T');

        document.getElementById('result-type-title').innerText = typeStr;

        // Detailed Link logic
        const typeBase = typeStr.split('-')[0].toLowerCase();
        // Create Read More button
        const readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'btn-secondary';
        readMoreBtn.style.marginTop = '10px';
        readMoreBtn.textContent = t('readMore');
        readMoreBtn.addEventListener('click', () => {
            showTypeDetail(typeStr);
        });

        const descP = document.createElement('p');
        descP.innerHTML = `${t('resultDesc')} <strong>${typeStr}</strong>.`;

        const resultDescContainer = document.getElementById('result-description');
        resultDescContainer.innerHTML = '';
        resultDescContainer.appendChild(descP);
        resultDescContainer.appendChild(readMoreBtn);

        // Render Bars
        renderMBTIVisuals(scores);
    }

    function renderMBTIVisuals(scores) {
        const container = document.getElementById('detailed-scores');
        container.innerHTML = '';
        const visuals = document.getElementById('mbti-visuals');
        visuals.innerHTML = '';

        const maxScore = 36;

        // Mapping for labels
        const dimLabels = {
            EI: { left: "Introverti", right: "Extraverti", leftEn: "Introverted", rightEn: "Extraverted" },
            SN: { left: "Observateur", right: "Intuitif", leftEn: "Observant", rightEn: "Intuitive" },
            TF: { left: "Pensée", right: "Sentiment", leftEn: "Thinking", rightEn: "Feeling" },
            JP: { left: "Prospection", right: "Jugement", leftEn: "Prospecting", rightEn: "Judging" },
            AT: { left: "Turbulent", right: "Assuré", leftEn: "Turbulent", rightEn: "Assertive" }
        };

        const dimensions = [
            { id: 'EI', score: scores.EI },
            { id: 'SN', score: scores.SN },
            { id: 'TF', score: scores.TF },
            { id: 'JP', score: scores.JP },
            { id: 'AT', score: scores.AT }
        ];

        dimensions.forEach(dim => {
            const labels = dimLabels[dim.id];
            const leftLabel = state.lang === 'fr' ? labels.left : labels.leftEn;
            const rightLabel = state.lang === 'fr' ? labels.right : labels.rightEn;

            // Calculate Percent
            const absScore = Math.abs(dim.score);
            // score can be from -max to +max
            // Percentage of the "Side"
            // If score is 0, it's 50/50? Or 0% on both? Visuals bar logic:
            // leftWidth = score < 0 ? abs/max : 0

            // Display: if -18 (max left), it is 100% Introverted.

            const leftPerc = dim.score < 0 ? Math.round((Math.abs(dim.score) / maxScore) * 100) : 0;
            const rightPerc = dim.score > 0 ? Math.round((dim.score / maxScore) * 100) : 0;

            const leftPercStr = leftPerc > 0 ? `${leftPerc}%` : "";
            const rightPercStr = rightPerc > 0 ? `${rightPerc}%` : "";

            const row = document.createElement('div');
            row.className = 'mbti-bar-row';

            // Visual Widths
            const leftWidth = Math.min(leftPerc, 100);
            const rightWidth = Math.min(rightPerc, 100);

            row.innerHTML = `
                <div class="mbti-trait">
                    ${leftLabel}
                    ${leftPercStr ? `<div style="font-size:0.8em; opacity:0.8;">${leftPercStr}</div>` : ''}
                </div>
                <div class="mbti-bar-container">
                    <div style="flex: 1; display: flex; justify-content: flex-end;">
                        <div style="width: ${leftWidth}%; background: var(--agree-color); border-radius: 4px 0 0 4px;"></div>
                    </div>
                    <div class="mbti-mid"></div>
                    <div style="flex: 1; display: flex; justify-content: flex-start;">
                        <div style="width: ${rightWidth}%; background: var(--disagree-color); border-radius: 0 4px 4px 0;"></div>
                    </div>
                </div>
                <div class="mbti-trait">
                   ${rightLabel}
                   ${rightPercStr ? `<div style="font-size:0.8em; opacity:0.8;">${rightPercStr}</div>` : ''}
                </div>
            `;

            visuals.appendChild(row);
        });
    }

    // --- PDF Export ---
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', generatePDF);
    }

    async function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const primaryColor = '#4298B4';
        const textColor = '#333333';
        const secondaryColor = '#88619a';

        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(primaryColor);
        doc.text(t('certifBtn'), 105, 20, null, null, "center");

        doc.setFontSize(10);
        doc.setTextColor(100);
        const dateStr = new Date().toLocaleDateString(state.lang === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        doc.text(`${t('madeOn')} ${dateStr}`, 105, 30, null, null, "center");

        let resultTitle = document.getElementById('result-type-title').innerText;
        let testName = state.currentTest === 'enneagram' ? t('enneagramTitle') : t('mbtiTitle');

        doc.setFontSize(16);
        doc.setTextColor(textColor);
        doc.text(`${t('testLabel')} ${testName}`, 20, 50);

        doc.setFontSize(24);
        doc.setTextColor(secondaryColor);
        doc.text(resultTitle, 20, 65);

        let captureId = state.currentTest === 'enneagram' ? 'resultsCanvas' : 'mbti-visuals';
        let element = document.getElementById(captureId);

        if (state.currentTest === 'enneagram') {
            const canvas = element;
            const imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, 'PNG', 50, 80, 110, 110);
        } else {
            const originalBg = element.style.background;
            const originalColor = element.style.color;

            element.style.padding = "20px";
            element.style.background = "#ffffff";
            element.style.color = "#333333";
            const traits = element.querySelectorAll('.mbti-trait');
            traits.forEach(t => t.style.color = '#333');

            try {
                const canvas = await html2canvas(element, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');
                const imgProps = doc.getImageProperties(imgData);
                const pdfWidth = 170;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                doc.addImage(imgData, 'PNG', 20, 80, pdfWidth, pdfHeight);
            } finally {
                element.style.background = originalBg;
                element.style.color = originalColor;
                element.style.padding = "0";
                traits.forEach(t => t.style.color = '');
            }
        }

        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("PersonnalityTest - dualsfwshield.be", 105, 280, null, null, "center");

        doc.save(`result-${state.currentTest}-${new Date().toISOString().slice(0, 10)}.pdf`);
    }

    // --- Theme Handling ---
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcon(true);
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            updateThemeIcon(false);
        } else {
            if (prefersDarkScheme.matches) {
                document.body.classList.add('dark-mode');
                updateThemeIcon(true);
            }
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    }

    function updateThemeIcon(isDark) {
        if (themeToggle) {
            themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) document.body.classList.add('dark-mode');
            else document.body.classList.remove('dark-mode');
            updateThemeIcon(e.matches);
        }
    });

    initTheme();

    // --- Types View ---
    function setupTypesView() {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetId = tab.dataset.target;
                document.getElementById('mbti-types').classList.add('hidden');
                document.getElementById('enneagram-types').classList.add('hidden');
                document.getElementById(targetId).classList.remove('hidden');
                document.getElementById(targetId).classList.add('active');
            });
        });

        populateTypes();
    }

    function populateTypes() {
        const baseUrl = 'media/';

        for (const [group, types] of Object.entries(mbtiData)) {
            const list = document.getElementById(`list-${group}`);
            if (!list) continue;

            // Update Headers if needed
            const header = list.previousElementSibling; // h3
            if (header) header.innerText = t(group);

            list.innerHTML = '';
            list.innerHTML = '';
            types.forEach(tData => {
                const item = document.createElement('div'); // Changed to div for SPA
                item.className = 'type-item';
                item.style.cursor = 'pointer';

                const label = state.lang === 'fr' ? tData.labelFr : tData.labelEn;
                const desc = state.lang === 'fr' ? tData.descFr : tData.descEn;

                item.innerHTML = `
                    <div style="height: 80px; overflow:hidden; margin: 0 auto 10px;">
                        <img src="media/${tData.img}" alt="${tData.name}" style="height: 100%;">
                    </div>
                    <h4>${label}</h4>
                    <span>${tData.name}</span>
                    <p class="type-desc">${desc}</p>
                `;

                // Add Click Handler
                item.addEventListener('click', () => {
                    showTypeDetail(tData.name);
                });

                list.appendChild(item);
            });
        }

        // Enneagram
        const enneaList = document.getElementById('list-enneagram');
        if (enneaList) {
            enneaList.innerHTML = '';
            enneaTypes.forEach(tData => {
                const item = document.createElement('div');
                item.className = 'type-item';

                const name = state.lang === 'fr' ? tData.nameFr : tData.nameEn;
                const desc = state.lang === 'fr' ? tData.descFr : tData.descEn;

                item.innerHTML = `
                    <div style="font-size: 3rem; color: #4298B4; margin-bottom: 10px; font-family: 'Lora', serif; cursor: pointer;">${tData.id}</div>
                    <img src="media/${tData.img}" alt="${name}" class="ennea-list-img">
                    <div style="cursor: pointer;">
                        <h4>${name}</h4>
                        <p class="type-desc">${desc}</p>
                    </div>
                `;
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    showTypeDetail(tData.nameEn); // Using nameEn as identifier
                });
                enneaList.appendChild(item);
            });
        }
    }

    // --- Detail View Logic (SPA) ---
    function showTypeDetail(typeName) {
        const detailContent = document.getElementById('detail-content');
        if (!detailContent) return;

        // Save current type in state for language switching
        state.currentDetailType = typeName;

        // Find type data
        let foundType = null;
        let groupName = '';

        for (const [group, types] of Object.entries(mbtiData)) {
            const match = types.find(t => t.name === typeName);
            if (match) {
                foundType = match;
                groupName = group;
                break;
            }
        }

        if (!foundType) {
            // Check Enneagram
            const enneaMatch = enneaTypes.find(t => t.nameEn === typeName || t.nameFr === typeName);
            if (enneaMatch) {
                foundType = enneaMatch;
                groupName = 'enneagram';
            }
        }

        if (!foundType) return;

        // Build HTML
        let label = state.lang === 'fr' ? foundType.labelFr : foundType.labelEn;
        if (!label && foundType.id) {
            label = `${foundType.id}`; // Enneagram just shows the number
        }

        const details = foundType.details[state.lang];

        const groupColors = {
            'analysts': 'bg-analysts',
            'diplomats': 'bg-diplomats',
            'sentinels': 'bg-sentinels',
            'explorers': 'bg-explorers',
            'enneagram': 'bg-sentinels' // Reusing a nice blue color for Enneagram
        };
        const groupClass = groupColors[groupName] || '';

        // Shared Content Builders
        let sectionsHtml = '';

        // 1. New Structure (with sections)
        if (details.sections) {
            if (details.quote) {
                sectionsHtml += `
                    <div class="content-section" style="text-align: center; font-style: italic;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">"${details.quote.text}"</h3>
                        <p style="opacity: 0.8;">— ${details.quote.author}</p>
                    </div>
                `;
            }
            details.sections.forEach(sec => {
                const title = sec.title || '';
                const content = sec.content || '';
                sectionsHtml += `
                    <div class="content-section">
                        <h3 style="color: var(--primary-color);">${title}</h3>
                        <p>${content.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            });
        }
        // 2. Old Structure (Fallback)
        else {
            sectionsHtml += `
                <div class="content-section">
                    <h3 style="color: var(--primary-color);">${t('intro') || 'Introduction'}</h3>
                    <p>${details.intro}</p>
                </div>

                <div class="content-section" style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="color: #33a474;"><i class="fa-solid fa-check"></i> ${t('strengths') || 'Forces'}</h3>
                        <div class="list-box">
                            <ul>${details.strengths ? details.strengths.map(s => `<li>${s}</li>`).join('') : ''}</ul>
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="color: #e4a23b;"><i class="fa-solid fa-triangle-exclamation"></i> ${t('weaknesses') || 'Faiblesses'}</h3>
                        <div class="list-box">
                            <ul>${details.weaknesses ? details.weaknesses.map(w => `<li>${w}</li>`).join('') : ''}</ul>
                        </div>
                    </div>
                </div>

                 <div class="content-section">
                    <h3 style="color: #d63384;"><i class="fa-solid fa-heart"></i> ${t('romantic') || 'Relations'}</h3>
                    <p>${details.romantic}</p>
                </div>

                <div class="content-section">
                    <h3 style="color: var(--primary-color);"><i class="fa-solid fa-briefcase"></i> ${t('career') || 'Carrière'}</h3>
                    <p>${details.career}</p>
                </div>
            `;
        }

        detailContent.innerHTML = `
            <div class="detail-hero ${groupClass}">
                 ${foundType.id ? `<div style="font-size: 6rem; color: white; opacity: 0.9; margin-bottom: 0.5rem; font-family: 'Lora', serif;">${label}</div>` : `<h1>${label}</h1>`}
                ${foundType.img ? `<img src="media/${foundType.img}" alt="${label}" class="${groupName === 'enneagram' ? 'ennea-detail-img' : ''}">` : ''}
                <h2>${foundType.name || foundType.nameEn}</h2>
            </div>
            ${sectionsHtml}
        `;

        switchView('detail');
        window.scrollTo(0, 0);
    }

});
