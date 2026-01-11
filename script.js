import { enneagramQuestions, mbtiQuestions } from './questions.js';

const translations = {
    fr: {
        title: "PersonnalityTest",
        navHome: "Accueil",
        navTypes: "Types",
        heroTitle: "Découvrez qui vous êtes vraiment",
        heroSubtitle: "Explorez votre personnalité avec nos tests Ennéagramme et MBTI.",
        cardStart: "Commencer le test",
        enneagramTitle: "Ennéagramme",
        enneagramDesc: "Découvrez votre type dominant parmi les 9 profils de l'Ennéagramme.",
        mbtiTitle: "16 Personnalités",
        mbtiDesc: "Explorez les 16 types psychologiques et leurs nuances.",
        testTitleEnnea: "Test Ennéagramme",
        testTitleMbti: "Test 16 Personnalités",
        btnPrev: "Précédent",
        btnNext: "Suivant",
        btnResults: "Voir les Résultats",
        agree: "D'accord",
        disagree: "Pas d'accord",
        alertAnswerAll: "Veuillez répondre à toutes les questions.",
        resultTitle: "Votre Résultat",
        resultDesc: "Votre type de personnalité est",
        certifBtn: "Certificat",
        homeBtn: "Retour à l'accueil",
        detailsTitle: "Détails par Type",
        typesTitle: "Types de Personnalité",
        tab16P: "16 Personnalités",
        tabEnnea: "Ennéagramme",
        analysts: "Les Analystes",
        diplomats: "Les Diplomates",
        sentinels: "Les Sentinelles",
        explorers: "Les Explorateurs",
        readMore: "En savoir plus",
        madeOn: "Réalisé le :",
        testLabel: "Test : "
    },
    en: {
        title: "PersonnalityTest",
        navHome: "Home",
        navTypes: "Types",
        heroTitle: "Discover who you really are",
        heroSubtitle: "Explore your personality with our Enneagram and MBTI tests.",
        cardStart: "Start Test",
        enneagramTitle: "Enneagram",
        enneagramDesc: "Discover your dominant type among the 9 Enneagram profiles.",
        mbtiTitle: "16 Personalities",
        mbtiDesc: "Explore the 16 psychological types and their nuances.",
        testTitleEnnea: "Enneagram Test",
        testTitleMbti: "16 Personalities Test",
        btnPrev: "Previous",
        btnNext: "Next",
        btnResults: "See Results",
        agree: "Agree",
        disagree: "Disagree",
        alertAnswerAll: "Please answer all questions.",
        resultTitle: "Your Result",
        resultDesc: "Your personality type is",
        certifBtn: "Certificate",
        homeBtn: "Back to Home",
        detailsTitle: "Details by Type",
        typesTitle: "Personality Types",
        tab16P: "16 Personalities",
        tabEnnea: "Enneagram",
        analysts: "Analysts",
        diplomats: "Diplomats",
        sentinels: "Sentinels",
        explorers: "Explorers",
        readMore: "Read More",
        madeOn: "Completed on:",
        testLabel: "Test: "
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        lang: 'fr', // 'fr' | 'en'
        currentTest: null,
        questions: [],
        currentPage: 0,
        questionsPerPage: 6,
        answers: {},
        totalQuestions: 0
    };

    // DOM Elements
    const views = {
        landing: document.getElementById('landing-view'),
        test: document.getElementById('test-view'),
        results: document.getElementById('results-view'),
        types: document.getElementById('types-view')
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
        let linkUrl;

        if (state.lang === 'fr') {
            linkUrl = `personnalite/mbti/fr/types-de-personnalite.html#${typeBase.toUpperCase()}`;
        } else {
            // Fallback to official site for English
            linkUrl = `https://www.16personalities.com/personality-${typeBase}`;
        }

        const descHTML = `<p>${t('resultDesc')} <strong>${typeStr}</strong>.</p>
                          <a href="${linkUrl}" target="_blank" class="btn-secondary" style="margin-top: 10px; display: inline-block;">${t('readMore')}</a>`;
        document.getElementById('result-description').innerHTML = descHTML;

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
        // IDs and Data
        const mbtiData = {
            analysts: [
                { name: 'INTJ', labelFr: 'Architecte', labelEn: 'Architect', img: 'intj-architect.svg', descFr: "Penseur imaginatif et stratège, avec un plan pour tout.", descEn: "Imaginative and strategic thinker, with a plan for everything." },
                { name: 'INTP', labelFr: 'Logicien', labelEn: 'Logician', img: 'intp-logician.svg', descFr: "Inventeur innovateur avec une soif de connaissances.", descEn: "Innovative inventor with an unquenchable thirst for knowledge." },
                { name: 'ENTJ', labelFr: 'Commandant', labelEn: 'Commander', img: 'entj-commander.svg', descFr: "Leader audacieux et imaginatif.", descEn: "Bold, imaginative and strong-willed leader." },
                { name: 'ENTP', labelFr: 'Innovateur', labelEn: 'Debater', img: 'entp-debater.svg', descFr: "Penseur astucieux et curieux.", descEn: "Smart and curious thinker who cannot resist an intellectual challenge." }
            ],
            diplomats: [
                { name: 'INFJ', labelFr: 'Avocat', labelEn: 'Advocate', img: 'infj-advocate.svg', descFr: "Idéaliste calme et mystique, mais très inspirant.", descEn: "Quiet and mystical, yet very inspiring and tireless idealist." },
                { name: 'INFP', labelFr: 'Médiateur', labelEn: 'Mediator', img: 'infp-mediator.svg', descFr: "Personne poétique, gentille et altruiste.", descEn: "Poetic, kind and altruistic person, always eager to help a good cause." },
                { name: 'ENFJ', labelFr: 'Protagoniste', labelEn: 'Protagonist', img: 'enfj-protagonist.svg', descFr: "Leader charismatique et inspirant.", descEn: "Charismatic and inspiring leader, able to mesmerize their listeners." },
                { name: 'ENFP', labelFr: 'Inspirateur', labelEn: 'Campaigner', img: 'enfp-campaigner.svg', descFr: "Esprit libre enthousiaste et créatif.", descEn: "Enthusiastic, creative and sociable free spirit." }
            ],
            sentinels: [
                { name: 'ISTJ', labelFr: 'Logisticien', labelEn: 'Logistician', img: 'istj-logistician.svg', descFr: "Individu pragmatique et intéressé par les faits.", descEn: "Practical and fact-minded individual, whose reliability cannot be doubted." },
                { name: 'ISFJ', labelFr: 'Défenseur', labelEn: 'Defender', img: 'isfj-defender.svg', descFr: "Protecteur très dévoué et chaleureux.", descEn: "Very dedicated and warm protector, always ready to defend their loved ones." },
                { name: 'ESTJ', labelFr: 'Directeur', labelEn: 'Executive', img: 'estj-executive.svg', descFr: "Administrateur excellent, inégalé dans la gestion.", descEn: "Excellent administrator, unsurpassed at managing things or people." },
                { name: 'ESFJ', labelFr: 'Consul', labelEn: 'Consul', img: 'esfj-consul.svg', descFr: "Personne extraordinairement attentionnée et sociale.", descEn: "Extraordinarily caring, social and popular person." }
            ],
            explorers: [
                { name: 'ISTP', labelFr: 'Virtuose', labelEn: 'Virtuoso', img: 'istp-virtuoso.svg', descFr: "Expérimentateur audacieux et pratique.", descEn: "Bold and practical experimenter, master of all kinds of tools." },
                { name: 'ISFP', labelFr: 'Aventurier', labelEn: 'Adventurer', img: 'isfp-adventurer.svg', descFr: "Artiste flexible et charmant.", descEn: "Flexible and charming artist, always ready to explore and experience something new." },
                { name: 'ESTP', labelFr: 'Entrepreneur', labelEn: 'Entrepreneur', img: 'estp-entrepreneur.svg', descFr: "Personne intelligente, énergique et perceptrice.", descEn: "Smart, energetic and very perceptive person, who truly enjoys living on the edge." },
                { name: 'ESFP', labelFr: 'Amuseur', labelEn: 'Entertainer', img: 'esfp-entertainer.svg', descFr: "Amuseur spontané, énergique et enthousiaste.", descEn: "Spontaneous, energetic and enthusiastic entertainer - life is never boring around them." }
            ]
        };

        const baseUrl = 'media/';

        for (const [group, types] of Object.entries(mbtiData)) {
            const list = document.getElementById(`list-${group}`);
            if (!list) continue;

            // Update Headers if needed
            const header = list.previousElementSibling; // h3
            if (header) header.innerText = t(group);

            list.innerHTML = '';
            types.forEach(tData => {
                const item = document.createElement('a');
                item.href = `https://www.16personalities.com/${state.lang === 'fr' ? 'fr' : 'en'}/${state.lang === 'fr' ? 'la-personnalite' : 'personality'}-${tData.name.toLowerCase()}`;

                // Override with local if needed? User wants local link in result, but here generic link is fine.
                // Keeping external for types overview.
                item.target = '_blank';
                item.className = 'type-item';

                const label = state.lang === 'fr' ? tData.labelFr : tData.labelEn;
                const desc = state.lang === 'fr' ? tData.descFr : tData.descEn;

                item.innerHTML = `
                    <div style="height: 80px; overflow:hidden; margin: 0 auto 10px;">
                        <img src="${baseUrl}${tData.img}" alt="${tData.name}" style="height: 100%;">
                    </div>
                    <h4>${label}</h4>
                    <span>${tData.name}</span>
                    <p class="type-desc">${desc}</p>
                `;
                list.appendChild(item);
            });
        }

        // Enneagram
        const enneaList = document.getElementById('list-enneagram');
        if (enneaList) {
            enneaList.innerHTML = '';
            // Enneagram Data
            const enneaTypes = [
                { id: 1, nameFr: "Le Perfectionniste", nameEn: "The Reformer", descFr: "Le type rationnel et idéaliste.", descEn: "The Rational, Idealistic Type." },
                { id: 2, nameFr: "L'Altruiste", nameEn: "The Helper", descFr: "Le type soucieux des autres.", descEn: "The Caring, Interpersonal Type." },
                { id: 3, nameFr: "Le Battant", nameEn: "The Achiever", descFr: "Le type pragmatique orienté succès.", descEn: "The Success-Oriented, Pragmatic Type." },
                { id: 4, nameFr: "Le Romantique", nameEn: "The Individualist", descFr: "Le type sensible et retiré.", descEn: "The Sensitive, Withdrawn Type." },
                { id: 5, nameFr: "L'Observateur", nameEn: "The Investigator", descFr: "Le type intense et cérébral.", descEn: "The Intense, Cerebral Type." },
                { id: 6, nameFr: "Le Loyal-Sceptique", nameEn: "The Loyalist", descFr: "Le type engagé et orienté sécurité.", descEn: "The Committed, Security-Oriented Type." },
                { id: 7, nameFr: "L'Épicurien", nameEn: "The Enthusiast", descFr: "Le type occupé et spontané.", descEn: "The Busy, Fun-Loving Type." },
                { id: 8, nameFr: "Le Protecteur", nameEn: "The Challenger", descFr: "Le type puissant et dominateur.", descEn: "The Powerful, Dominating Type." },
                { id: 9, nameFr: "Le Médiateur", nameEn: "The Peacemaker", descFr: "Le type accommodant et modeste.", descEn: "The Easygoing, Self-Effacing Type." }
            ];

            enneaTypes.forEach(tData => {
                const item = document.createElement('div');
                item.className = 'type-item';

                const name = state.lang === 'fr' ? tData.nameFr : tData.nameEn;
                const desc = state.lang === 'fr' ? tData.descFr : tData.descEn;

                item.innerHTML = `
                    <div style="font-size: 3rem; color: #4298B4; margin-bottom: 10px; font-family: 'Lora', serif;">${tData.id}</div>
                    <h4>${name}</h4>
                    <p class="type-desc">${desc}</p>
                `;
                enneaList.appendChild(item);
            });
        }
    }

});
