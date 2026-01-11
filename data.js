export const translations = {
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
        testLabel: "Test : ",
        backToTest: "Retour au test",
        strengths: "Forces",
        weaknesses: "Faiblesses",
        romantic: "Relations Amoureuses",
        friendships: "Amitiés",
        career: "Carrière",
        intro: "Introduction"
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
        testLabel: "Test: ",
        backToTest: "Back to Test",
        strengths: "Strengths",
        weaknesses: "Weaknesses",
        romantic: "Romantic Relationships",
        friendships: "Friendships",
        career: "Career",
        intro: "Introduction"
    }
};

export const enneaTypes = [
    {
        id: 1,
        nameFr: "Le Perfectionniste",
        nameEn: "The Reformer",
        img: 'type-1.png',
        descFr: "Le type rationnel et idéaliste.",
        descEn: "The Rational, Idealistic Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Critiques envers eux-mêmes et envers les autres, les Un tendent à croire qu’il n’y a qu’une « bonne » façon de faire les choses.\n\nIls se considèrent souvent comme les défenseurs de l’intégrité et de l’éthique et peuvent retarder une décision par peur de faire une erreur. Utilisent souvent les mots « devrait » et « aurait dû »." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> La colère<br><strong>Vertu :</strong> La sérénité" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Ethical, dedicated, and reliable, they are motivated by a desire to live the right way, improve the world, and avoid fault and blame." },
                    { title: "Traits", content: "<strong>Passion:</strong> Anger<br><strong>Virtue:</strong> Serenity" }
                ]
            }
        }
    },
    {
        id: 2,
        nameFr: "L'Altruiste",
        nameEn: "The Helper",
        img: 'type-2.png',
        descFr: "Le type soucieux des autres.",
        descEn: "The Caring, Interpersonal Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "A la recherche d’affection et d’approbation, l’altruiste cherche à être aimé et apprécié en devenant indispensable à l’autre. Orienté vers la satisfaction du besoin de l’autre, le Deux peut devenir manipulateur et avoir plusieurs facettes, montrant un visage différent à chacun.\n\nSéducteur, le Deux est quelqu’un d’actif, d’encourageant, qui choisira souvent une activité professionnelle où utiliser sa compassion pour l’autre." },
                    { title: "Axe de développement", content: "De la fierté de rendre service à la reconnaissance de ses propres besoins." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> L’orgueil<br><strong>Vertu :</strong> L’humilité" }
                ]
            },
            en: { // Placeholder for EN as user only provided FR
                sections: [
                    { title: "Introduction", content: "Twos are defined by their desire to be loved and needed. They are generous, demonstrative, and people-pleasing." },
                    { title: "Traits", content: "<strong>Passion:</strong> Pride<br><strong>Virtue:</strong> Humility" }
                ]
            }
        }
    },
    {
        id: 3,
        nameFr: "Le Battant",
        nameEn: "The Achiever",
        img: 'type-3.png',
        descFr: "Le type pragmatique orienté succès.",
        descEn: "The Success-Oriented, Pragmatic Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Les Trois cherchent à être aimés pour leurs résultats. Rois de l’apparence, ils ont du mal à différencier leur « vrai moi » du réalisateur qui atteint ses objectifs à son travail. Ils peuvent apparaître plus productifs qu’ils ne le sont en réalité. Ils font généralement de bons leaders, entraîneurs, vendeurs ou capitaines d’équipe." },
                    { title: "Axe de développement", content: "De la duperie trompeuse à l’authenticité." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> Le mensonge<br><strong>Vertu :</strong> La vérité" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Threes are defined by their desire to be significant and to distinguish themselves through their achievements." },
                    { title: "Traits", content: "<strong>Passion:</strong> Deceit<br><strong>Virtue:</strong> Veracity" }
                ]
            }
        }
    },
    {
        id: 4,
        nameFr: "Le Créatif",
        nameEn: "The Individualist",
        img: 'type-4.png',
        descFr: "Le type sensible et retiré.",
        descEn: "The Sensitive, Withdrawn Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Son attention est dirigée vers ce qui manque. Il sait ce que vague à l’âme veut dire. L’idéal n’est pas ici et maintenant, il est ailleurs, souvent dans le passé. Plus que d’autres, il souffre de l’absence du partenaire. Théâtral, mélancolique, sensible et artistique, le Quatre est créatif dans sa façon de vivre." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> L’envie<br><strong>Vertu :</strong> L’équanimité" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Fours are defined by their belief that they are different from other people, as well as by their envy of what they perceive others to have." },
                    { title: "Traits", content: "<strong>Passion:</strong> Envy<br><strong>Virtue:</strong> Equanimity" }
                ]
            }
        }
    },
    {
        id: 5,
        nameFr: "L'Observateur",
        nameEn: "The Investigator",
        img: 'type-5.png',
        descFr: "Le type intense et cérébral.",
        descEn: "The Intense, Cerebral Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Les Cinq sont sensibles à leur espace vital, à leur jardin secret. Ils s’efforcent de garder une distance émotionnelle avec les autres. Ils préféreront observer plutôt que participer. Les émotions et les besoins des autres leur paraissent incongrus. Ils compartimentent les obligations. Il sont détachés des gens, des sentiments et des objets. Ils privilégient le savoir et la vie intellectuelle." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> L’avarice<br><strong>Vertu :</strong> Le détachement" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Fives are defined by their desire to conserve their energy and to avoid being drained by engagement with the outside world." },
                    { title: "Traits", content: "<strong>Passion:</strong> Avarice<br><strong>Virtue:</strong> Non-Attachment" }
                ]
            }
        }
    },
    {
        id: 6,
        nameFr: "Le Loyal – Sceptique",
        nameEn: "The Loyalist",
        img: 'type-6.png',
        descFr: "Le type engagé et orienté sécurité.",
        descEn: "The Committed, Security-Oriented Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Les Six sont anti-autoritaires, s’identifient avec les faibles, ont un haut sens du devoir et sont loyaux à la cause qu’ils ont choisie. Les six ont tendance à toujours envisager le pire scénario possible, afin d’anticiper pour mieux se protéger." },
                    { title: "Axe de développement", content: "Du doute à la confiance en soi." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> La peur<br><strong>Vertu :</strong> Le courage" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Sixes are defined by their need for safety and security. They are the most loyal to their friends and to their beliefs." },
                    { title: "Traits", content: "<strong>Passion:</strong> Fear<br><strong>Virtue:</strong> Courage" }
                ]
            }
        }
    },
    {
        id: 7,
        nameFr: "L'Épicurien",
        nameEn: "The Enthusiast",
        img: 'type-7.png',
        descFr: "Le type occupé et spontané.",
        descEn: "The Busy, Fun-Loving Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "C’est Peter Pan, le puer aeternus, la jeunesse éternelle. Les Sept sont souvent superficiels, aventureux et ont du mal à s’impliquer. Ils aiment garder plusieurs options ouvertes et cherchent à perpétuer un haut niveau d’excitation. Généralement heureux et enjoués, ils amènent la bonne humeur avec eux. Ils sont connus pour ne pas toujours finir les choses qu’ils ont commencé." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> La gourmandise<br><strong>Vertu :</strong> La sobriété" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Sevens are defined by their desire to experience everything and to avoid pain and boredom." },
                    { title: "Traits", content: "<strong>Passion:</strong> Gluttony<br><strong>Virtue:</strong> Sobriety" }
                ]
            }
        }
    },
    {
        id: 8,
        nameFr: "Le Protecteur",
        nameEn: "The Challenger",
        img: 'type-8.png',
        descFr: "Le type puissant et dominateur.",
        descEn: "The Powerful, Dominating Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Les Huit ont besoin d’être en contrôle. Protecteurs, ils aiment le combat. Ils expriment leur colère comme elle vient et apprécient ceux qui ont le courage de l’affronter. Ils vivent souvent de manière excessive. Le Huit évolué est compétent et juste, surtout dans l’adversité. Il peut être un puissant supporter pour les autres. Il s’investira pour aplanir la route de ses amis." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> La luxure (l’excès)<br><strong>Vertu :</strong> L’innocence" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Eights are defined by their desire to be self-reliant, to prove their strength and resist weakness, and to be important to their world." },
                    { title: "Traits", content: "<strong>Passion:</strong> Lust<br><strong>Virtue:</strong> Innocence" }
                ]
            }
        }
    },
    {
        id: 9,
        nameFr: "Le Médiateur",
        nameEn: "The Peacemaker",
        img: 'type-9.png',
        descFr: "Le type accommodant et modeste.",
        descEn: "The Easygoing, Self-Effacing Type.",
        details: {
            fr: {
                sections: [
                    { title: "Introduction", content: "Ambivalent, il voit facilement tous les points de vue et tend à remplacer ses désirs par ceux des autres. Il a souvent du mal à différencier le véritable objectif des tâches secondaires. Paisible, voire nonchalant et indécis, il aime la nature et l’harmonie. Consensuel, le Neuf apprécie les métiers de diplomate, conseiller, négociateur. Quand il est sur les rails, il devient très performant." },
                    { title: "Caractéristiques", content: "<strong>Passion :</strong> La paresse<br><strong>Vertu :</strong> L’action" }
                ]
            },
            en: {
                sections: [
                    { title: "Introduction", content: "Nines are defined by their desire to maintain their inner peace, and to keep the peace in their external world." },
                    { title: "Traits", content: "<strong>Passion:</strong> Sloth<br><strong>Virtue:</strong> Action" }
                ]
            }
        }
    }
];

export const mbtiData = {
    analysts: [
        {
            name: 'INTJ',
            labelFr: 'Architecte',
            labelEn: 'Architect',
            img: 'intj-architect.svg',
            descFr: "Penseur imaginatif et stratège, avec un plan pour tout.",
            descEn: "Imaginative and strategic thinker, with a plan for everything.",
            details: {
                fr: {
                    quote: { text: "Penser fait la grandeur de l‘homme. L‘homme n‘est qu‘un roseau, le plus faible de la nature ; mais c‘est un roseau pensant.", author: "BLAISE PASCAL" },
                    sections: [
                        { title: "Introduction", content: "On peut se sentir bien seul au sommet. En tant que l‘un des types de personnalité les plus rares – et l‘un des plus aptes – les Architectes (INTJ) ne le savent que trop bien. Rationnels et vifs d‘esprit, les Architectes sont fiers de leur capacité à penser par eux-mêmes, sans parler de leur mystérieuse faculté à percevoir la fausseté et l‘hypocrisie. Mais parce que leur esprit n‘est jamais en repos, les Architectes peuvent avoir du mal à trouver des personnes capables de suivre leur analyse incessante de tout ce qui les entoure." },
                        { title: "Un esprit avant-gardiste", content: "Les Architectes remettent tout en question. De nombreux types de personnalité préfèrent le statu quo, se fiant aux croyances populaires et à l‘expertise d‘autrui pour guider leur vie. Mais les Architectes, toujours sceptiques, préfèrent faire leurs propres découvertes. Dans leur quête de meilleures façons de faire les choses, ils n‘ont pas peur d‘enfreindre les règles ou de risquer la désapprobation – en réalité, ils aiment plutôt ça.\n\nMais comme toute personne ayant ce type de personnalité vous le dirait, une nouvelle idée ne vaut rien si elle ne fonctionne pas. Les Architectes veulent réussir, et non pas seulement être inventifs. Ils font preuve d‘une détermination sans borne dans leur travail, appliquant toute la force de leur perspicacité, de leur logique et de leur volonté. Et que le ciel vienne en aide à quiconque tente de les ralentir en appliquant des règles inutiles ou en formulant des critiques peu réfléchies." },
                        { title: "Une soif de connaissances", content: "Les Architectes peuvent être à la fois les plus audacieux des rêveurs et les plus amers des pessimistes. Ils croient qu‘à force de volonté et d‘intelligence, ils peuvent atteindre les objectifs les plus difficiles. Mais ces personnalités peuvent être cyniques à l‘égard de la nature humaine en général, supposant que la plupart des gens sont paresseux, sans imagination, ou simplement condamnés à la médiocrité.\n\nLes personnes ayant le type de personnalité Architecte tirent une grande partie de leur estime de soi de leurs connaissances et de leur acuité mentale. À l‘école, on les a peut-être traités d‘intellos, mais plutôt que de prendre ces étiquettes comme des insultes, de nombreux Architectes les assument. Ils reconnaissent leur propre capacité à s‘instruire – et à maîtriser – tout sujet qui les intéresse, qu‘il s‘agisse de codage, de capoeira ou de musique classique." },
                        { title: "Frustrations sociales", content: "Les Architectes ne sont pas connus pour être tout mignons et doux. Ils ont tendance à faire passer la rationalité et la réussite avant la politesse et les civilités – en d‘autres termes, ils préfèrent avoir raison plutôt que d‘être appréciés. Cela peut expliquer pourquoi tant de méchants de fiction sont calqués sur ce type de personnalité.\n\nParce que les Architectes valorisent la vérité et la profondeur, de nombreuses pratiques sociales courantes – de l‘échange de banalités aux pieux mensonges – peuvent leur sembler inutiles ou carrément stupides. Par conséquent, ils peuvent, par inadvertance, passer pour grossiers, voire blessants alors qu‘ils ne cherchent qu‘à être honnêtes." },
                        { title: "La vie est une partie d‘échecs", content: "Les Architectes sont pleins de contradictions. Ils sont créatifs mais déterminés, ambitieux mais discrets, et curieux mais concentrés. Vues de l‘extérieur, ces contradictions peuvent sembler déroutantes, mais elles prennent tout leur sens une fois que l‘on a compris le fonctionnement interne de l‘esprit de l‘Architecte.\n\nPour ces personnalités, la vie ressemble à une gigantesque partie d‘échecs. Se fiant à la stratégie plutôt qu‘au hasard, les Architectes envisagent les forces et les faiblesses de chaque mouvement avant de le réaliser. Et ils ne perdent jamais la foi qu‘avec suffisamment d‘ingéniosité et de perspicacité, ils peuvent trouver un moyen de gagner – quels que soient les obstacles qui se dressent en cours de route." }
                    ]
                },
                en: {
                    quote: { text: "Thought constitutes the greatness of man. Man is but a reed, the most feeble thing in nature; but he is a thinking reed.", author: "BLAISE PASCAL" },
                    sections: [
                        { title: "Introduction", content: "It can be lonely at the top. As one of the rarest personality types – and one of the most capable – Architects (INTJ) know this all too well. Rational and quick-witted, Architects pride themselves on their ability to think for themselves, not to mention their uncanny knack for seeing right through phoniness and hypocrisy. But because their minds are never at rest, Architects may struggle to find people who can keep up with their nonstop analysis of everything around them." },
                        { title: "A Forward-Thinking Mind", content: "Architects question everything. Many personality types trust the status quo, relying on conventional wisdom and other people’s expertise to guide their lives. But ever-skeptical Architects prefer to make their own discoveries. In their quest to find better ways of doing things, they aren’t afraid to break the rules or risk disapproval – in fact, they rather enjoy it.\n\nBut as anyone with this personality type would tell you, a new idea isn’t worth anything unless it actually works. Architects want to be successful, not just inventive. They bring a single-minded drive to their work, applying the full force of their insight, logic, and willpower. And heaven help anyone who tries to slow them down by enforcing pointless rules or offering poorly thought-out criticism." },
                        { title: "A Thirst for Knowledge", content: "Architects can be both the boldest of dreamers and the bitterest of pessimists. They believe that, through willpower and intelligence, they can achieve even the most challenging goals. But these personalities may be cynical about human nature more generally, assuming that most people are lazy, unimaginative, or simply doomed to mediocrity.\n\nPeople with the Architect personality type derive much of their self-esteem from their knowledge and mental acuity. In school, they may have been called \"nerds\" or \"bookworms.\" But rather than taking these labels as insults, many Architects embrace them. They recognize their own ability to teach themselves – and master – any topic that interests them, whether that’s coding, capoeira, or classical music." },
                        { title: "Social Frustrations", content: "Architects aren’t known for being warm and fuzzy. They tend to prioritize rationality and success over politeness and pleasantries – in other words, they’d rather be right than popular. This may explain why so many fictional villains are modeled on this personality type.\n\nBecause Architects value truth and depth, many common social practices – from small talk to white lies – may seem pointless or downright stupid to them. As a result, they may inadvertently come across as rude or even offensive when they’re only trying to be honest." },
                        { title: "Life as a Chess Game", content: "Architects are full of contradictions. They are imaginative yet decisive, ambitious yet private, and curious yet focused. From the outside, these contradictions may seem baffling, but they make perfect sense once you understand the inner workings of the Architect mind.\n\nFor these personalities, life is like a giant game of chess. Relying on strategy rather than chance, Architects contemplate the strengths and weaknesses of each move before they make it. And they never lose faith that, with enough ingenuity and insight, they can find a way to win – no matter what challenges might arise along the way." }
                    ]
                }
            }
        },
        {
            name: 'INTP',
            labelFr: 'Logicien',
            labelEn: 'Logician',
            img: 'intp-logician.svg',
            descFr: "Inventeur innovateur avec une soif de connaissances.",
            descEn: "Innovative inventor with an unquenchable thirst for knowledge.",
            details: {
                fr: {
                    quote: { text: "L'important est de ne pas arrêter de poser des questions. La curiosité a sa propre raison d'exister.", author: "ALBERT EINSTEIN" },
                    sections: [
                        { title: "Introduction", content: "Les Logiciens (INTP) sont fiers de leurs perspectives uniques et de leur intellect dynamique. Ils ne peuvent s'empêcher de réfléchir aux mystères de l'univers, ce qui explique peut-être pourquoi certains des philosophes et scientifiques les plus influents de tous les temps étaient des Logiciens. Ce type de personnalité est assez rare, mais avec leur créativité et leur inventivité, les Logiciens n'ont pas peur de sortir du lot." },
                        { title: "La vie de l'esprit", content: "Les Logiciens se perdent souvent dans leurs réflexions, ce qui n'est pas forcément une mauvaise chose. Les personnes dotées de ce type de personnalité ne s'arrêtent pratiquement jamais de penser. Dès le réveil, leur esprit bouillonne d'idées, de questions et de réflexions. Il leur arrive même de mener de véritables débats dans leur tête.\n\nImaginatives et curieuses, les personnalités Logiciens peuvent trouver une fascination infinie dans le fonctionnement de leur propre esprit. Vu de l'extérieur, les Logiciens peuvent sembler pris dans une rêverie sans fin. Ils ont la réputation d'être songeurs, détachés et un peu réservés ; du moins jusqu'à ce qu'ils essaient de concentrer toute leur énergie mentale sur le moment ou la personne en question, ce qui peut mettre tout le monde mal à l'aise." },
                        { title: "Élémentaire, mon cher Logicien", content: "Les Logiciens adorent analyser des modèles. Sans nécessairement savoir comment elles y arrivent, les personnes présentant ce type de personnalité ont souvent un don pour repérer les divergences et les irrégularités, à la manière de Sherlock Holmes. En d'autres termes, mieux vaut ne pas leur mentir.\n\nParadoxalement, il ne faut pas toujours croire les Logiciens sur parole. Ils ont rarement l'intention d'être malhonnêtes, mais avec leur esprit actif, ils débordent parfois d'idées et de théories qu'ils n'ont pas encore entièrement développées. Ils peuvent changer d'avis sur n'importe quel sujet, de leurs projets du week-end à un principe moral fondamental, sans jamais se rendre compte qu'ils semblaient avoir pris leur décision au départ." },
                        { title: "Les mystères de l'univers", content: "Les personnes possédant ce type de personnalité veulent tout comprendre de l'univers, mais un domaine en particulier a tendance à les mystifier : la nature humaine. Comme leur nom l'indique, les Logiciens se sentent plus à l'aise dans le domaine de la logique et de la rationalité. Par conséquent, ils peuvent être déconcertés par les façons illogiques et irrationnelles dont les sentiments et les émotions influencent le comportement humain, y compris le leur.\n\nCela ne signifie pas que les Logiciens sont insensibles. Ces personnalités souhaitent généralement offrir un soutien émotionnel à leurs amis et à leurs proches, mais elles ne savent pas nécessairement comment s'y prendre. Et parce qu'ils n'arrivent pas à décider de la façon la plus efficace d'apporter leur soutien, ils peuvent s'abstenir de faire ou de dire quoi que ce soit." }
                    ]
                },
                en: {
                    quote: { text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.", author: "ALBERT EINSTEIN" },
                    sections: [
                        { title: "Introduction", content: "Logicians (INTP) pride themselves on their unique perspectives and vigorous intellect. They can’t help but puzzle over the mysteries of the universe – which may explain why some of the most influential philosophers and scientists of all time have been Logicians. This personality type is fairly rare, but with their creativity and inventiveness, Logicians aren’t afraid to stand out from the crowd." },
                        { title: "The Life of the Mind", content: "Logicians often lose themselves in thought – which isn’t necessarily a bad thing. People with this personality type hardly ever stop thinking. From the moment they wake up, their minds are buzzing with ideas, questions, and insights. At times, they may even conduct full-fledged debates in their own heads.\n\nImaginative and curious, Logician personalities can find endless fascination in the workings of their own minds. From the outside, Logicians may seem to live in a never-ending daydream. They have a reputation for being pensive, detached, and a bit reserved. That is, until they try to focus all their mental energy on the moment or the person at hand, which can be a bit intense for everyone else." },
                        { title: "Elementary, My Dear Logician", content: "Logicians love to analyze patterns. Without necessarily knowing how they do it, people with this personality type often have a Sherlock Holmes-like knack for spotting discrepancies and irregularities. In other words, it’s not a good idea to lie to them.\n\nIronically, Logicians shouldn’t always be taken at their word. They rarely intend to be dishonest, but with their active minds, they sometimes overflow with ideas and theories that they haven’t fully thought through yet. They may change their mind on anything from their weekend plans to a fundamental moral principle, without ever realizing that they appeared to have made up their mind in the first place." },
                        { title: "The Mysteries of the Universe", content: "People with this personality type want to understand everything in the universe, but one area in particular tends to mystify them: human nature. As their name suggests, Logicians feel most at home in the realm of logic and rationality. As a result, they can find themselves baffled by the illogical, irrational ways that feelings and emotions influence human behavior – including their own.\n\nThis doesn’t mean that Logicians are unfeeling. These personalities generally want to offer emotional support to their friends and loved ones, but they don’t necessarily know how. And because they can’t decide on the best, most efficient way to offer support, they may hold off on doing or saying anything at all." }
                    ]
                }
            }
        },
        {
            name: 'ENTJ',
            labelFr: 'Commandant',
            labelEn: 'Commander',
            img: 'entj-commander.svg',
            descFr: "Leader audacieux et imaginatif.",
            descEn: "Bold, imaginative and strong-willed leader.",
            details: {
                fr: {
                    quote: { text: "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre.", author: "STEVE JOBS" },
                    sections: [
                        { title: "Introduction", content: "Les Commandants (ENTJ) sont des leaders nés. Les personnes dotées de ce type de personnalité incarnent le charisme et la confiance en soi, et projettent leur autorité d'une manière qui rassemble les foules derrière un objectif commun. Cependant, les Commandants se caractérisent également par un niveau de rationalité souvent implacable, utilisant leur dynamisme, leur détermination et leur vivacité d'esprit pour atteindre le but qu'ils se sont fixé." },
                        { title: "La quête de grandeur", content: "S'il est une chose que les Commandants aiment, c'est un bon défi, petit ou grand, et ils croient fermement qu'avec suffisamment de temps et de ressources, ils peuvent atteindre n'importe quel objectif. Cette qualité fait des Commandants de brillants entrepreneurs, et leur capacité à penser stratégiquement et à se concentrer sur le long terme tout en exécutant chaque étape de leurs plans avec détermination et précision fait d'eux de puissants chefs d'entreprise.\n\nCette détermination produit souvent un effet Pygmalion, car les Commandants poursuivent leurs objectifs à force de volonté là où d'autres pourraient abandonner et passer à autre chose." },
                        { title: "Un défi de taille", content: "L'expression émotionnelle n'est le point fort d'aucun type Analyste, mais la distance des Commandants par rapport à leurs émotions est tout particulièrement visible et ressentie directement par un plus grand nombre de personnes. En particulier dans un environnement professionnel, les Commandants piétineront tout simplement les sensibilités de ceux qu'ils considèrent comme inefficaces, incompétents ou paresseux.\n\nLes Commandants sont de véritables locomotives et cultivent l'image d'une personne hors du commun – ce qui est souvent effectivement le cas. Ils doivent cependant se rappeler que leur stature ne vient pas seulement de leurs propres actions, mais aussi de celles de l'équipe qui les soutient." }
                    ]
                },
                en: {
                    quote: { text: "Your time is limited, so don't waste it living someone else's life.", author: "STEVE JOBS" },
                    sections: [
                        { title: "Introduction", content: "Commanders (ENTJ) are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination, and sharp minds to achieve whatever end they’ve set for themselves." },
                        { title: "The Quest for Greatness", content: "If there’s anything Commanders love, it’s a good challenge, big or small, and they firmly believe that given enough time and resources, they can achieve any goal. This quality makes Commanders brilliant entrepreneurs, and their ability to think strategically and hold a long-term focus while executing each step of their plans with determination and precision makes them powerful business leaders.\n\nThis determination often creates a self-fulfilling prophecy, as Commanders push their goals through with sheer willpower where others might give up and move on." },
                        { title: "A Tall Challenge", content: "Emotional expression isn’t the strong suit of any Analyst type, but Commanders’ distance from their emotions is especially visible and felt directly by a much wider range of people. Especially in a professional environment, Commanders will simply crush the sensitivities of those they view as inefficient, incompetent, or lazy.\n\nCommanders are true powerhouses, and they cultivate an image of being larger than life – and often they are. They need to remember, however, that their stature comes not just from their own actions, but from the actions of the team that props them up." }
                    ]
                }
            }
        },
        {
            name: 'ENTP',
            labelFr: 'Innovateur',
            labelEn: 'Debater',
            img: 'entp-debater.svg',
            descFr: "Penseur astucieux et curieux.",
            descEn: "Smart and curious thinker who cannot resist an intellectual challenge.",
            details: {
                fr: {
                    quote: { text: "Suivez le chemin du penseur hasardeux et indépendant. Exposez vos idées aux dangers de la controverse.", author: "THOMAS J. WATSON" },
                    sections: [
                        { title: "Introduction", content: "Vifs d'esprit et audacieux, les Innovateurs (ENTP) n'ont pas peur d'être en désaccord avec l'ordre établi. D'ailleurs, ils n'ont pas peur d'être en désaccord avec pratiquement avec quoi ou qui que ce soit. Peu de choses animent plus ces types de personnalité qu'un peu de joute verbale – et si la conversation s'engage sur un terrain controversé, c'est encore mieux.\n\nCe serait toutefois une erreur de penser que les Innovateurs sont désagréables ou malveillants. Au contraire, les personnes dotées de ce type de personnalité sont bien érudites et curieuses, avec un sens de l'humour espiègle." },
                        { title: "Enfreindre les règles", content: "Les Innovateurs sont connus pour leur côté rebelle. Pour ce type de personnalité, aucune croyance n'est trop sacrée pour être remise en question, aucune idée n'est trop fondamentale pour être examinée, et aucune règle n'est trop importante pour être enfreinte, ou du moins testée en profondeur. Parfois, les Innovateurs se rebellent même contre leurs propres croyances en défendant le point de vue opposé – juste pour voir de quoi le monde est fait de l'autre bord.\n\nPour de nombreux Innovateurs, l'un des plus grands défis de la vie est de traduire leur vaste énergie intellectuelle en réalisations et contributions concrètes." },
                        { title: "Le prix de l'anticonformisme", content: "La capacité des Innovateurs à débattre est légendaire, mais cela ne signifie pas qu'elle soit toujours utile. Lorsqu'ils remettent ouvertement en question leur patron lors d'une réunion ou qu'ils critiquent tout ce que dit leur moitié, les Innovateurs peuvent penser le faire au nom de la rationalité et de la logique, mais ils peuvent aussi faire plus de mal que de bien à leurs chances de réussite et de bonheur.\n\nDe nombreux Innovateurs constatent qu'une approche plus compatissante vaut la peine d'être explorée dans leurs efforts pour construire des relations solides. La bonne nouvelle, c'est que les personnes de ce type de personnalité ne perdront jamais leur côté anticonformiste. Elles peuvent simplement utiliser leur flexibilité cognitive pour comprendre et explorer les perspectives des autres." }
                    ]
                },
                en: {
                    quote: { text: "Follow the path of the unsafe, independent thinker. Expose your ideas to the dangers of controversy.", author: "THOMAS J. WATSON" },
                    sections: [
                        { title: "Introduction", content: "Quick-witted and audacious, Debaters (ENTP) aren’t afraid to disagree with the status quo. In fact, they’re not afraid to disagree with pretty much anything or anyone. Few things light up this personality type more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better.\n\nIt would be a mistake, though, to think of Debaters as disagreeable or mean-spirited. Instead, people with this personality type are knowledgeable and curious, with a playful sense of humor." },
                        { title: "Breaking the Rules", content: "Debaters are known for their rebellious streak. For this personality type, no belief is too sacred to be questioned, no idea is too fundamental to be scrutinized, and no rule is too important to be broken, or at least thoroughly tested. Sometimes Debaters even rebel against their own beliefs by arguing the opposing viewpoint – just to see how the world looks from the other side.\n\nFor many Debaters, one of life’s biggest challenges is channeling their vast intellectual energy into tangible achievements and contributions." },
                        { title: "The Price of Nonconformity", content: "Debaters’ ability to debate is legendary, but that doesn’t mean it’s always helpful. When they openly question their boss in a meeting or pick apart everything their significant other says, Debaters may think they’re being rational and logical, but they may also be doing more harm than good to their chances of success and happiness.\n\nMany Debaters find that a more compassionate approach is worth exploring in their efforts to build strong relationships. The good news is that people with this personality type will never lose their nonconformist edge. They can simply use their cognitive flexibility to understand and explore other people’s perspectives." }
                    ]
                }
            }
        }
    ],
    diplomats: [
        {
            name: 'INFJ',
            labelFr: 'Avocat',
            labelEn: 'Advocate',
            img: 'infj-advocate.svg',
            descFr: "Idéaliste calme et mystique, mais très inspirant.",
            descEn: "Quiet and mystical, yet very inspiring and tireless idealist.",
            details: {
                fr: {
                    quote: { text: "Traitez les gens comme s'ils étaient ce qu'ils devraient être, vous les aiderez à devenir ce qu'ils peuvent être.", author: "JOHANN WOLFGANG VON GOETHE" },
                    sections: [
                        { title: "Introduction", content: "Les Avocats (INFJ) sont peut-être le type de personnalité le plus rare de tous, mais ils marquent clairement le monde de leur empreinte. Idéalistes et dotés de principes, ils ne se contentent pas d'avancer dans la vie – ils veulent se tenir debout et faire la différence. Pour ces personnalités, le succès ne vient pas de l'argent ou du statut mais de la recherche de l'épanouissement, de l'aide aux autres et de la volonté de faire le bien dans le monde.\n\nBien qu'elles affichent des objectifs et des ambitions élevés, les personnalités de type Avocat ne doivent pas être prises pour des rêveurs oisifs. Elles se soucient de l'intégrité et sont rarement satisfaites avant d'avoir fait ce qu'elles savent être juste." },
                        { title: "À la recherche d'une raison d'être", content: "Peut-être parce que leur type de personnalité est si peu commun, les Avocats ont tendance à porter en eux le sentiment – conscient ou non – d'être différents des autres. Forts d'une vie intérieure riche et de leur désir profond et constant de trouver leur raison d'être dans la vie, ils ne s'intègrent pas toujours à ceux qui les entourent. Cela ne veut pas dire que les Avocats ne sont pas acceptés socialement ou qu'ils sont incapables d'entretenir des relations étroites, mais qu'ils se sentent parfois incompris ou en déphasage avec le monde.\n\nHeureusement, ce sentiment de décalage ne compromet pas l'engagement des Avocats à rendre le monde meilleur. Les Avocats sont préoccupés par l'injustice, et ils se soucient généralement plus de l'altruisme que du gain personnel." },
                        { title: "Établir des liens avec les autres (et soi-même)", content: "Les Avocats sont peut-être introvertis, mais ils apprécient les relations profondes et authentiques avec les autres. Peu de choses procurent autant de joie à ces personnalités que de connaître véritablement une autre personne – et d'être compris en retour. Les Avocats apprécient les conversations sérieuses bien plus que les banalités, et ils ont tendance à communiquer d'une manière chaleureuse et sensible.\n\nRéfléchi et compatissant, l'Avocat consacre beaucoup d'énergie et de soin à ses relations. Cela ne signifie pas qu'il se sent toujours apprécié en retour. Il a tendance à agir avec beaucoup de réflexion et d'attention et se sentir frustré lorsque les autres ne reconnaissent pas ses bonnes intentions." },
                        { title: "Une mission personnelle", content: "De nombreux Avocats ont le sentiment que leur vie sert un but unique – une mission pour laquelle ils ont été mis sur Terre. Pour les personnes ayant ce type de personnalité, l'un des aspects les plus gratifiants de la vie est la recherche de ce but – et puis, une fois qu'ils l'ont trouvé, de faire tout ce qui est leur pouvoir pour le réaliser.\n\nLorsque les Avocats sont confrontés à l'iniquité ou à l'injustice, ils abandonnent rarement – au lieu de cela, ils se fient à leur intuition et à leur compassion pour trouver une solution." }
                    ]
                },
                en: {
                    quote: { text: "Treat people as if they were what they ought to be and you help them to become what they are capable of being.", author: "JOHANN WOLFGANG VON GOETHE" },
                    sections: [
                        { title: "Introduction", content: "Advocates (INFJ) may be the rarest personality type of all, but they certainly leave their mark on the world. Idealistic and principled, they aren’t content to just coast through life – they want to stand up and make a difference. For Advocate personalities, success doesn’t come from money or status but from seeking fulfillment, helping others, and being a force for good in the world.\n\nThough they have lofty goals and ambitions, Advocates shouldn’t be mistaken for idle dreamers. They care about integrity, and they’re rarely satisfied until they’ve done what they know to be right." },
                        { title: "The Search for Purpose", content: "Perhaps because their personality type is so uncommon, Advocates tend to carry around a sense – whether conscious or not – of being different from most people. With their rich inner lives and their deep, abiding desire to find their life purpose, they don’t always fit in with those around them. This isn’t to say that Advocates can’t enjoy social acceptance or close relationships, only that they sometimes feel misunderstood or at odds with the world.\n\nFortunately, this sense of being out of step doesn’t diminish Advocates’ commitment to making the world a better place. Advocates are troubled by injustice, and they typically care more about altruism than personal gain." },
                        { title: "Connecting with Others (and Themselves)", content: "Advocates may be Introverts, but they value deep, authentic relationships with others. Few things bring these personalities as much joy as truly knowing another person – and being understood in return. Advocates enjoy meaningful conversations far more than small talk, and they tend to communicate in a way that is warm and sensitive.\n\nThoughtful and compassionate, Advocates pour a great deal of energy and care into their relationships. That doesn’t mean that they always feel appreciated in return. Advocates tend to act with great thought and care, and they can become frustrated when others don’t recognize their good intentions." },
                        { title: "A Personal Mission", content: "Many Advocates feel that their life has a unique purpose – a mission that they were put onto this earth to fulfill. For people with this personality type, one of the most rewarding aspects of life is seeking out this purpose – and then, once they’ve found it, striving to do it justice.\n\nWhen Advocates encounter inequity or unfairness, they rarely give up – instead, they rely on their intuition and compassion to find a solution." }
                    ]
                }
            }
        },
        {
            name: 'INFP',
            labelFr: 'Médiateur',
            labelEn: 'Mediator',
            img: 'infp-mediator.svg',
            descFr: "Personne poétique, gentille et altruiste.",
            descEn: "Poetic, kind and altruistic person, always eager to help a good cause.",
            details: {
                fr: {
                    quote: { text: "Tout ce qui est or ne brille pas ; tous ceux qui errent ne sont pas perdus ; le vieux qui est fort ne dépérit point ; les racines profondes ne sont pas atteintes par le gel.", author: "J. R. R. TOLKIEN" },
                    sections: [
                        { title: "Introduction", content: "Bien qu'ils puissent sembler calmes ou discrets, les Médiateurs (INFP) ont une vie intérieure dynamique et passionnée. Créatifs et imaginatifs, ils se perdent volontiers dans des rêveries, inventant toutes sortes d'histoires et de conversations dans leur esprit. Ces personnalités sont connues pour leur sensibilité – les Médiateurs peuvent avoir des réactions émotionnelles profondes à la musique, à l'art, à la nature et aux personnes qui les entourent.\n\nIdéalistes et empathiques, les Médiateurs aspirent à des relations profondes et sincères, et ils se sentent appelés à aider les autres." },
                        { title: "Le don de l'empathie", content: "Les Médiateurs partagent une curiosité sincère pour les profondeurs de la nature humaine. Introspectifs jusqu'au bout des ongles, ils sont parfaitement à l'écoute de leurs propres pensées et sentiments, mais ils aspirent également à comprendre les gens qui les entourent. Les Médiateurs sont compatissants et ne portent pas de jugement, toujours prêts à écouter l'histoire d'une autre personne.\n\nL'empathie est l'un des plus grands dons de ce type de personnalité, mais elle peut parfois être un handicap. Les problèmes du monde pèsent lourdement sur les épaules des Médiateurs, et ces personnalités peuvent être vulnérables à l'intériorisation des humeurs ou des mentalités négatives des autres." },
                        { title: "Dire leur vérité", content: "Peu de choses mettent les Médiateurs plus mal à l'aise que de prétendre être quelqu'un qu'ils ne sont pas. Avec leur sensibilité et leur engagement envers l'authenticité, les personnes de ce type de personnalité ont tendance à rechercher les occasions de s'exprimer de manière créative. Il n'est donc pas surprenant que de nombreux Médiateurs célèbres soient poètes, écrivains, acteurs et artistes.\n\nÀ travers ces paysages imaginatifs, les Médiateurs peuvent explorer leur propre caractère intérieur ainsi que leur place dans le monde. Bien que ce soit un beau trait de caractère, ces personnalités affichent parfois une tendance à rêvasser et à fantasmer plutôt qu'à agir." },
                        { title: "À la recherche d'une vocation", content: "Les personnes avec ce type de personnalité ont tendance à se sentir sans but ou coincées jusqu'à ce qu'elles trouvent un but donnant un sens à leur vie. Pour de nombreux Médiateurs, ce but a un rapport avec le fait de remonter le moral des autres et leur capacité à ressentir la souffrance d'autrui comme si c'était la leur. Bien que les Médiateurs veuillent aider tout le monde, ils doivent canaliser leur énergie et leurs efforts – sinon, ils peuvent finir par s'épuiser." }
                    ]
                },
                en: {
                    quote: { text: "All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost.", author: "J. R. R. TOLKIEN" },
                    sections: [
                        { title: "Introduction", content: "Although they may seem quiet or unassuming, Mediators (INFP) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them.\n\nIdealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others." },
                        { title: "The Gift of Empathy", content: "Mediators share a sincere curiosity about the depths of human nature. Introspective to the core, they’re exquisitely tuned in to their own thoughts and feelings, but they yearn to understand the people around them as well. Mediators are compassionate and nonjudgmental, always willing to hear another person’s story.\n\nEmpathy is among this personality type’s greatest gifts, but at times it can be a liability. The troubles of the world weigh heavily on Mediators’ shoulders, and these personalities can be vulnerable to internalizing other people’s negative moods or mindsets." },
                        { title: "Speaking Their Truth", content: "Few things make Mediators more uneasy than pretending to be someone they aren’t. With their sensitivity and their commitment to authenticity, people with this personality type tend to crave opportunities for creative self-expression. It’s no surprise, then, that many famous Mediators are poets, writers, actors, and artists.\n\nThrough these imaginative landscapes, Mediators can explore their own inner nature as well as their place in the world. While a beautiful trait, these personalities sometimes show a tendency to daydream and fantasize rather than take action." },
                        { title: "In Search of a Calling", content: "People with this personality type tend to feel directionless or stuck until they connect with a sense of purpose for their lives. For many Mediators, this purpose has something to do with uplifting others and their ability to feel other people’s suffering as if it were their own. While Mediators want to help everyone, they need to focus their energy and efforts – otherwise, they can end up exhausted." }
                    ]
                }
            }
        },
        {
            name: 'ENFJ',
            labelFr: 'Protagoniste',
            labelEn: 'Protagonist',
            img: 'enfj-protagonist.svg',
            descFr: "Leader charismatique et inspirant.",
            descEn: "Charismatic and inspiring leader, able to mesmerize their listeners.",
            details: {
                fr: {
                    quote: { text: "Lorsque le monde entier est silencieux, une seule voix peut faire la différence.", author: "MALALA YOUSAFZAI" },
                    sections: [
                        { title: "Introduction", content: "Les Protagonistes (ENFJ) se sentent appelés à servir une grande cause dans leur vie. Réfléchis et idéalistes, ces types de personnalité s'efforcent d'avoir un impact positif sur les autres et sur le monde qui les entoure. Ils hésitent rarement à saisir une occasion de faire ce qui est juste, même lorsque c'est loin d'être facile.\n\nLes Protagonistes sont des leaders nés, ce qui explique que l'on retrouve ces personnalités chez de nombreux politiciens, entraîneurs et enseignants de renom. Leur passion et leur charisme leur permettent d'inspirer les autres, non seulement dans leur carrière, mais aussi dans tous les domaines de leur vie." },
                        { title: "Défendre ce qui est juste", content: "Les Protagonistes ont tendance à afficher leurs valeurs, notamment l'authenticité et l'altruisme. Lorsque quelque chose leur semble injuste ou erroné, ils le disent. Mais ils passent rarement pour effrontés ou insistants, car leur sensibilité et leur perspicacité les poussent à s'exprimer d'une manière qui trouve un écho chez les autres.\n\nL'arme secrète des Protagonistes est la pureté de leurs intentions. En règle générale, ils sont davantage motivés par le désir sincère de faire ce qui est juste plutôt que par celui de manipuler les autres ou d'avoir du pouvoir sur eux." },
                        { title: "S'impliquer", content: "Lorsqu'une personne compte pour un Protagoniste, il veut l'aider à résoudre ses problèmes, parfois à n'importe quel prix. La bonne nouvelle, c'est que de nombreuses personnes sont reconnaissantes de l'aide et des conseils des Protagonistes. Après tout, ce n'est pas pour rien que ces personnalités ont la réputation d'aider les autres à améliorer leur vie.\n\nMais se mêler des problèmes des autres n'est pas toujours une bonne idée. Les Protagonistes ont tendance à avoir une vision claire de ce que les gens peuvent ou doivent faire pour devenir meilleurs, mais tout le monde n'est pas prêt à faire ces changements." },
                        { title: "Montrer la voie", content: "Les personnes dotées de ce type de personnalité sont des altruistes dévoués, prêts à affronter toutes sortes d'épreuves pour défendre les êtres et les idées en lesquelles elles croient. Cette force de conviction renforce les compétences innées de leadership des Protagonistes, en particulier leur capacité à guider les gens pour qu'ils travaillent ensemble au service du bien commun.\n\nMais leur plus grand don pourrait bien être de donner l'exemple. Dans leur vie quotidienne, les Protagonistes révèlent comment des situations apparemment ordinaires peuvent être gérées avec compassion, dévouement et attention." }
                    ]
                },
                en: {
                    quote: { text: "When the whole world is silent, even one voice becomes powerful.", author: "MALALA YOUSAFZAI" },
                    sections: [
                        { title: "Introduction", content: "Protagonists (ENFJ) feel called to serve a greater purpose in life. Thoughtful and idealistic, these personality types strive to have a positive impact on other people and the world around them. They rarely shy away from an opportunity to do the right thing, even when doing so is far from easy.\n\nProtagonists are born leaders, which explains why this personality type can be found among many notable politicians, coaches, and teachers. Their passion and charisma allow them to inspire others not just in their careers but in every arena of their lives." },
                        { title: "Standing Up for What’s Right", content: "Protagonists tend to be vocal about their values, including authenticity and altruism. When something strikes them as unjust or wrong, they speak up. But they rarely come across as brash or pushy, as their sensitivity and insight guide them to speak in a way that resonates with others.\n\nProtagonists’ secret weapon is their purity of intent. Generally speaking, they are motivated by a sincere wish to do the right thing rather than a desire to manipulate or have power over other people." },
                        { title: "Getting Involved", content: "When someone matters to them, Protagonists want to help solve that person’s problems – sometimes at any cost. The good news is that many people are grateful for Protagonists’ assistance and advice. After all, there’s a reason that these personalities have a reputation for helping others improve their lives.\n\nBut getting involved in other people’s problems isn’t always a recipe for success. Protagonists tend to have a clear vision of what people can or should do to better themselves, but not everyone is ready to make those changes." },
                        { title: "Leading the Way", content: "People with this personality type are devoted altruists, ready to face slings and arrows in order to stand up for the people and ideas that they believe in. This strength of conviction bolsters Protagonists’ innate leadership skills, particularly their ability to guide people to work together in service of the common good.\n\nBut their greatest gift might actually be leading by example. In their daily lives, Protagonists reveal how seemingly ordinary situations can be handled with compassion, dedication, and care." }
                    ]
                }
            }
        },
        {
            name: 'ENFP',
            labelFr: 'Inspirateur',
            labelEn: 'Campaigner',
            img: 'enfp-campaigner.svg',
            descFr: "Esprit libre enthousiaste et créatif.",
            descEn: "Enthusiastic, creative and sociable free spirit.",
            details: {
                fr: {
                    quote: { text: "Je ne m'intéresse pas à la façon dont tu gagnes ta vie, Je veux connaître tes aspirations – et si tu oses rêver de réaliser le désir ardent de ton cœur.", author: "ORIAH MOUNTAIN DREAMER" },
                    sections: [
                        { title: "Introduction", content: "Les Inspirateurs (ENFP) sont de véritables esprits libres – extravertis, sincères et ouverts d'esprit. Avec leur approche pleine d'entrain et optimiste de la vie, ils se démarquent dans n'importe quelle foule. Mais même s'ils peuvent être des boute-en-train, les Inspirateurs ne se contentent pas de s'amuser. Ces types de personnalité sont profonds – tout comme leur désir de liens authentiques et émotionnels avec les autres." },
                        { title: "La magie du quotidien", content: "Sympathiques et extravertis, les Inspirateurs s'attachent à enrichir leurs relations et leur vie sociale. Mais sous leur apparence sociable et facile à vivre, ils abritent également une vie intérieure riche et passionnante. Sans une bonne dose d'imagination, de créativité et de curiosité, un Inspirateur n'en serait tout simplement pas un.\n\nLes Inspirateurs sont indépendants et créatifs, toujours à l'affût de la magie et du sens de la vie au quotidien. Lorsque quelque chose stimule leur imagination, les Inspirateurs peuvent faire preuve d'un enthousiasme tout à fait contagieux." },
                        { title: "Rechercher la joie", content: "Les Inspirateurs sont la preuve que rechercher les joies et les plaisirs de la vie n'est pas synonyme de superficialité. En un clin d'œil, une personne ayant ce type de personnalité peut passer d'idéaliste passionné à silhouette insouciante sur la piste de danse.\n\nMême dans les moments de plaisir, les Inspirateurs veulent créer un lien émotionnel avec les autres. Peu de choses comptent plus pour ces types de personnalité que d'entretenir des conversations authentiques et sincères avec les personnes qui leur sont chères.\n\nLes Inspirateurs passeront beaucoup de temps à explorer différentes relations, sentiments et idées avant de trouver un chemin pour leur vie qui leur semble juste. Mais lorsqu'ils trouvent enfin leur voie, leur imagination, leur empathie et leur courage peuvent illuminer non seulement leur propre vie, mais aussi celle de ceux qui les entourent." }
                    ]
                },
                en: {
                    quote: { text: "It doesn't interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart's longing.", author: "ORIAH MOUNTAIN DREAMER" },
                    sections: [
                        { title: "Introduction", content: "Campaigners (ENFP) are true free spirits – outgoing, openhearted, and open-minded. With their lively, upbeat approach to life, they stand out in any crowd. But even though they can be the life of the party, Campaigners don’t just care about having a good time. These personality types run deep – as does their longing for meaningful, emotional connections with other people." },
                        { title: "Everyday Magic", content: "Friendly and outgoing, Campaigners are devoted to enriching their relationships and their social lives. But beneath their sociable, easygoing exterior, they also have a rich, vibrant inner life. Without a healthy dose of imagination, creativity, and curiosity, a Campaigner simply wouldn’t be a Campaigner.\n\nCampaigners are independent and creative, always on the lookout for the magic and meaning in everyday life. When something sparks their imagination, Campaigners can show an enthusiasm that is nothing short of infectious." },
                        { title: "Seeking Joy", content: "Campaigners are proof that seeking out life’s joys and pleasures isn’t the same as being shallow. In the blink of an eye, people with this personality type can transform from impassioned idealists to carefree figures on the dance floor.\n\nEven in moments of fun, Campaigners want to connect emotionally with others. Few things matter more to these personality types than having genuine, heartfelt conversations with the people they cherish.\n\nCampaigners will spend a lot of time exploring different relationships, feelings, and ideas before they find a path for their life that feels right. But when they finally find their way, their imagination, empathy, and courage can light up not only their own lives but also the world around them." }
                    ]
                }
            }
        }
    ],
    sentinels: [
        {
            name: 'ISTJ',
            labelFr: 'Logisticien',
            labelEn: 'Logistician',
            img: 'istj-logistician.svg',
            descFr: "Individu pragmatique et intéressé par les faits.",
            descEn: "Practical and fact-minded individual, whose reliability cannot be doubted.",
            details: {
                fr: {
                    quote: { text: "J‘ai plus peur de ne pas utiliser les capacités qui m‘ont été données. Je suis plus effrayé par la procrastination et la paresse.", author: "DENZEL WASHINGTON" },
                    sections: [
                        { title: "Introduction", content: "Les Logisticiens (ISTJ) sont fiers de leurs intégrité. Les personnes dotées de ce type de personnalité pensent ce qu‘elles disent, et lorsqu‘elles s‘engagent à faire quelque chose, elles s‘assurent d‘aller jusqu‘au bout.\n\nCe type de personnalité représente une bonne partie de la population et, bien que les Logisticiens ne cherchent pas particulièrement à attirer l‘attention, ils font plus que leur part pour que la société repose sur des bases solides et stables. Au sein de leur famille et de leur communauté, les Logisticiens sont souvent respectés pour leur fiabilité, leur sens pratique et leur capacité à garder les pieds sur terre et à rester logiques, même dans les situations les plus stressantes." },
                        { title: "Une vie intègre", content: "L‘essentiel de l‘estime de soi des Logisticiens provient de leur sens de l‘intégrité personnelle. Les personnes ayant ce type de personnalité ont la conviction qu‘il existe une bonne façon de procéder dans toute situation – et que toute personne qui prétend le contraire essaie probablement de contourner les règles pour servir ses propres intérêts. Les Logisticiens vouent un profond respect à la structure et à la tradition et ils sont souvent attirés par les organisations, les lieux de travail et les établissements d‘enseignement avec des hiérarchies et des attentes claires.\n\nPour de nombreux Logisticiens, l‘absence de structure n‘offre pas la liberté, mais le chaos." },
                        { title: "Combler les lacunes", content: "Le dévouement des Logisticiens est une qualité admirable, qui est à l‘origine de bon nombre de leurs réalisations. Mais il peut aussi devenir une faiblesse dont d‘autres personnes profitent. En raison de leur conscience professionnelle et de leur sens du devoir, les Logisticiens peuvent être amenés à assumer les responsabilités d‘autrui. Même s‘il ne se plaint pas de la situation, le Logisticien peut finir par s‘épuiser ou se décourager si l‘on attend constamment de lui qu‘il prenne le relais de ses collègues, de ses amis ou de ses proches, ou s‘il prend sur lui de le faire.\n\nLes Logisticiens peuvent se retrouver à effectuer le travail d‘autres personnes, sans en tirer le moindre crédit." }
                    ]
                },
                en: {
                    quote: { text: "I'd be more frightened by not using whatever abilities I'd been given. I'd be more frightened by procrastination and laziness.", author: "DENZEL WASHINGTON" },
                    sections: [
                        { title: "Introduction", content: "Logisticians (ISTJ) pride themselves on their integrity. People with this personality type mean what they say, and when they commit to doing something, they make sure to follow through.\n\nThis personality type makes up a good portion of the population, and while Logisticians may not be particularly flashy or attention-seeking, they do more than their share to keep society on a sturdy, stable foundation. In their families and communities, Logisticians often earn respect for their reliability, their practicality, and their ability to stay grounded and logical, even in the most stressful situations." },
                        { title: "A Life of Integrity", content: "The core of Logisticians’ self-respect comes from a sense of personal integrity. People with this personality type believe that there is a right way to proceed in any situation – and that anyone who pretends otherwise is probably trying to bend the rules to suit their own purposes. Logisticians have a deep respect for structure and tradition, and they are often drawn to organizations, workplaces, and educational settings that offer clear hierarchies and expectations.\n\nFor many Logisticians, a lack of structure offers not freedom, but chaos." },
                        { title: "Picking Up the Slack", content: "Logisticians’ dedication is an admirable quality, and it drives many of their accomplishments. But it can also become a weakness that other people take advantage of. With their strong work ethic and sense of duty, Logisticians may routinely find themselves shouldering other people’s responsibilities. Even if they don’t complain about the situation, Logisticians can end up exhausted or discouraged if they are constantly expected to pick up the slack for their colleagues, friends, or loved ones.\n\nLogisticians can find themselves doing the work of others, without getting any credit for it." }
                    ]
                }
            }
        },
        {
            name: 'ISFJ',
            labelFr: 'Défenseur',
            labelEn: 'Defender',
            img: 'isfj-defender.svg',
            descFr: "Protecteur très dévoué et chaleureux.",
            descEn: "Very dedicated and warm protector, always ready to defend their loved ones.",
            details: {
                fr: {
                    quote: { text: "L‘amour ne naît que dans le partage. On ne peut en avoir plus pour soi qu‘en le donnant aux autres.", author: "BRIAN TRACY" },
                    sections: [
                        { title: "Introduction", content: "Sans prétention et avec discrétion, les Défenseurs (ISFJ) contribuent à faire avancer le monde. Travailleurs et dévoués, les personnes dotées de ce type de personnalité se sentent profondément responsables de ceux qui les entourent. On peut compter sur les Défenseurs pour respecter les délais, se souvenir des anniversaires et des occasions spéciales, maintenir les traditions et combler leurs proches de gestes attentionnés et encourageants. Mais ils demandent rarement que l‘on reconnaisse tout ce qu‘ils font, préférant agir dans l‘ombre." },
                        { title: "Le don de la loyauté", content: "La loyauté est l‘un des traits les plus distinctifs des Défenseurs. Il est rare qu‘un Défenseur laisse une amitié ou une relation s‘étioler par manque d‘efforts. Au contraire, ils investissent beaucoup d‘énergie dans le maintien de liens solides avec leurs proches. Les personnes avec ce type de personnalité ont la réputation de tout laisser tomber pour donner un coup de main lorsqu‘un ami ou un membre de la famille traverse une période difficile.\n\nLes Défenseurs ont tendance à se sentir plus dynamiques et plus efficaces lorsqu‘ils volent au secours de quelqu‘un qui a besoin de leur aide." },
                        { title: "Des normes très strictes", content: "Les Défenseurs se contentent rarement d‘un « suffisant ». Les personnes avec ce type de personnalité peuvent être méticuleuses au point d‘être perfectionnistes. Elles prennent leurs responsabilités à cœur, se surpassent constamment et font tout ce qu‘elles peuvent pour surpasser les attentes des autres.\n\nMais que se passe-t-il lorsque les efforts des Défenseurs passent inaperçus ou ne sont pas appréciés ? Si les Défenseurs ont tendance à minimiser leurs réalisations, cela ne signifie pas qu‘ils n‘apprécient pas la reconnaissance. S‘ils n‘apprennent pas à se faire respecter, les Défenseurs risquent de perdre doucement leur enthousiasme et leur motivation." },
                        { title: "Défendre les autres – et soi-même", content: "Bien qu‘ils soient introvertis, les Défenseurs ont une nature profondément sociable. Grâce à leur capacité à se souvenir des détails de la vie des autres, les Défenseurs ont un talent particulier pour faire en sorte que leurs amis et connaissances se sentent vus, connus et appréciés. Peu de types de personnalité peuvent rivaliser avec la capacité des Défenseurs à choisir le bon cadeau pour toute occasion, qu‘elle soit petite ou grande." }
                    ]
                },
                en: {
                    quote: { text: "Love only grows by sharing. You can only have more for yourself by giving it away to others.", author: "BRIAN TRACY" },
                    sections: [
                        { title: "Introduction", content: "In their own unassuming, humble way, Defenders (ISFJ) help make the world go round. Hardworking and devoted, people with this personality type feel a deep sense of responsibility to those around them. Defenders can be counted on to meet deadlines, remember birthdays and special occasions, uphold traditions, and shower their loved ones with gestures of care and support. But they rarely demand recognition for all that they do, preferring to operate behind the scenes." },
                        { title: "The Gift of Loyalty", content: "Loyalty is among Defenders’ most distinctive traits. It’s rare for a Defender to let a friendship or relationship fade away from lack of effort. Instead, they invest a great deal of energy into maintaining strong connections with their loved ones. People with this personality type are known for dropping everything to lend a hand when a friend or family member is going through a hard time.\n\nDefenders tend to feel most energized and effective when they’re showing up for someone who needs their help." },
                        { title: "Exact Standards", content: "Defenders are rarely satisfied with \"good enough.\" People with this personality type can be meticulous to the point of perfectionism. They take their responsibilities personally, consistently going above and beyond and doing everything they can to exceed other people’s expectations.\n\nBut what happens when Defenders’ efforts go unnoticed or unappreciated? While Defenders tend to underplay their accomplishments, that doesn’t mean they don’t enjoy recognition. Unless they learn to stand up for themselves, Defenders may find themselves quietly losing their enthusiasm and motivation." },
                        { title: "Showing Up for Others – and Themselves", content: "Although they are Introverts, Defenders have a deeply social nature. Thanks to their ability to remember the details of other people’s lives, Defenders have a special talent for making their friends and acquaintances feel seen, known, and cherished. Few personality types can match Defenders’ ability to choose the right gift for any occasion, big or small." }
                    ]
                }
            }
        },
        {
            name: 'ESTJ',
            labelFr: 'Directeur',
            labelEn: 'Executive',
            img: 'estj-executive.svg',
            descFr: "Administrateur excellent, inégalé dans la gestion.",
            descEn: "Excellent administrator, unsurpassed at managing things or people.",
            details: {
                fr: {
                    quote: { text: "Un ordre juste est le fondement de toutes choses.", author: "EDMUND BURKE" },
                    sections: [
                        { title: "Introduction", content: "Les Directeurs (ESTJ) sont des représentants de la tradition et de l‘ordre, utilisant leur compréhension de ce qui est bien, mal et socialement acceptable pour rassembler les familles et les communautés. Attachées aux valeurs d‘honnêteté, de dévouement et de dignité, les personnalités de type Directeur sont appréciées pour la clarté de leurs conseils et de leurs orientations.\n\nFiers de rassembler les gens, les Directeurs jouent souvent le rôle d‘organisateurs communautaires, s‘efforçant de fédérer tout le monde pour célébrer des manifestations locales appréciées ou pour défendre les valeurs traditionnelles." },
                        { title: "Prêcher par l‘exemple", content: "Fervents défenseurs de l‘État de droit et de l‘autorité qui se mérite, les personnalités de type Directeur montrent l‘exemple en faisant preuve de dévouement et d‘honnêteté volontaire, et en rejetant catégoriquement la paresse et la tricherie. S‘il est un groupe estimant que le travail dur et manuel constituent un excellent moyen de forger le caractère, c‘est bien celui des Directeurs.\n\nLes Directeurs sont conscients de ce qui les entoure et vivent dans un monde de faits concrets et vérifiables. Leur certitude en leurs connaissances leur permet, même contre une forte résistance, de s‘en tenir à leurs principes et de défendre une vision claire de ce qui est acceptable et de ce qui ne l‘est pas." },
                        { title: "Une plus grande responsabilité", content: "Les Directeurs constituent l‘archétype classique du citoyen modèle : ils aident leurs voisins, font respecter la loi et essaient de s‘assurer que tout le monde participe à la communauté et à l‘organisation qui leur sont si chères.\n\nLe principal défi des Directeurs est de reconnaître que tout le monde ne suit pas le même chemin ou ne contribue pas de la même manière. Un véritable leader reconnaît la force de chaque individu, ainsi que celle du groupe, et aide à faire émerger les idées de ces personnes." }
                    ]
                },
                en: {
                    quote: { text: "Good order is the foundation of all things.", author: "EDMUND BURKE" },
                    sections: [
                        { title: "Introduction", content: "Executives (ESTJ) are representatives of tradition and order, utilizing their understanding of what is right, wrong, and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance.\n\nTaking pride in bringing people together, Executives often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together." },
                        { title: "Leading by Example", content: "Strong believers in the rule of law and authority that must be earned, Executive personalities lead by example, demonstrating dedication and purposeful honesty, and an utter rejection of laziness and cheating. If anyone declares that hard, manual work is an excellent way to build character, it is Executives.\n\nExecutives are aware of their surroundings and live in a world of clear, verifiable facts. Their certainty in their knowledge means that even against heavy resistance, they stick to their principles and push an unclouded vision of what is and is not acceptable." },
                        { title: "A Greater Responsibility", content: "Executives are the classic image of the model citizen: they help their neighbors, uphold the law, and try to make sure that everyone participates in the communities and organizations they hold so dear.\n\nThe main challenge for Executives is to recognize that not everyone follows the same path or contributes in the same way. A true leader recognizes the strength of the individual, as well as that of the group, and helps bring those people’s ideas to the table." }
                    ]
                }
            }
        },
        {
            name: 'ESFJ',
            labelFr: 'Consul',
            labelEn: 'Consul',
            img: 'esfj-consul.svg',
            descFr: "Personne extraordinairement attentionnée et sociale.",
            descEn: "Extraordinarily caring, social and popular person.",
            details: {
                fr: {
                    quote: { text: "Encouragez-vous, élevez-vous et renforcez-vous les uns les autres, car l‘énergie positive que reçoit une personne sera ressentie par nous tous.", author: "DEBORAH DAY" },
                    sections: [
                        { title: "Introduction", content: "Pour les Consuls (ESFJ), la vie est plus douce lorsqu‘elle est partagée avec autrui. Les personnes présentant ce type de personnalité sont le socle de nombreuses communautés, ouvrant leur maison – et leur cœur – à leurs amis, à leurs proches et à leurs voisins.\n\nCela ne signifie pas que les Consuls aiment tout le monde ou qu‘ils sont des saints. Mais les Consuls croient au pouvoir de l‘hospitalité et des bonnes manières, et ils ont tendance à se sentir investis d‘un devoir envers ceux qui les entourent." },
                        { title: "La beauté d‘une vie responsable", content: "Les Consuls sont altruistes. Ils prennent au sérieux leur responsabilité de donner en retour, de servir les autres et de faire ce qui est juste.\n\nLes Consuls sont convaincus que, pour presque toutes les situations, il existe une bonne voie à suivre. Alors que certains types de personnalité adoptent une attitude plus indulgente, les Consuls peuvent avoir du mal à ne pas juger quelqu‘un qui prend un chemin leur semblant peu judicieux. Avec leurs idées bien arrêtées sur ce qu’il faut faire et ne pas faire, les Consuls ont tendance à avoir des avis bien tranchés." },
                        { title: "Établir des relations durables", content: "D‘un grand soutien et d‘un caractère extraverti, les Consuls sont facilement repérables lors d‘une fête – ce sont eux qui vont d‘un coin à l‘autre pour s‘assurer que tout le monde passe un bon moment ! Mais ne vous y méprenez pas : les Consuls ne se contentent pas de passer à côté de la vie des autres. D‘une loyauté indéfectible, ils nouent des relations durables et on peut compter sur eux pour se manifester chaque fois qu‘un coup de main – ou une oreille attentive – est nécessaire.\n\nPour de nombreuses personnes ayant le type de personnalité Consul, l‘un des plus grands défis de la vie est d‘accepter qu‘elles ne peuvent pas contrôler les pensées ou le comportement d‘autres personnes." }
                    ]
                },
                en: {
                    quote: { text: "Encourage, lift and strengthen one another. For the positive energy spread to one will be felt by us all.", author: "DEBORAH DAY" },
                    sections: [
                        { title: "Introduction", content: "For Consuls (ESFJ), life is sweetest when it’s shared with others. People with this personality type are the bedrock of many communities, opening their homes – and their hearts – to friends, loved ones, and neighbors.\n\nThis isn’t to say that Consuls like everyone or that they’re saints. But Consuls do believe in the power of hospitality and good manners, and they tend to feel a sense of duty to those around them." },
                        { title: "The Beauty of a Responsible Life", content: "Consuls are altruists. They take seriously their responsibility to give back, serve others, and do the right thing.\n\nConsuls believe that there is a clear right thing to do in nearly every situation. While some personality types adopt a more lenient, live-and-let-live attitude, Consuls may find it difficult not to judge when someone takes a path that strikes them as misguided. With their strong views on right and wrong, Consuls tend to be on the opinionated side." },
                        { title: "Building Lasting Relationships", content: "Supportive and outgoing, Consuls can always be spotted at a party – they’re the ones flitting from person to person, making sure that everyone else is having a good time! But make no mistake: Consuls don’t just breeze through other people’s lives. Loyally dedicated, they build lasting relationships, and they can be counted on to show up whenever a helping hand – or a listening ear – is needed.\n\nFor many people with the Consul personality type, one of life’s greatest challenges is accepting that they can’t control other people’s thoughts or actions." }
                    ]
                }
            }
        }
    ],
    explorers: [
        {
            name: 'ISTP',
            labelFr: 'Virtuose',
            labelEn: 'Virtuoso',
            img: 'istp-virtuoso.svg',
            descFr: "Expérimentateur audacieux et pratique.",
            descEn: "Bold and practical experimenter, master of all kinds of tools.",
            details: {
                fr: {
                    quote: { text: "Je voulais vivre une vie, une vie différente. Je ne voulais pas aller au même endroit tous les jours, voir les mêmes personnes et faire le même travail. Je voulais des défis intéressants.", author: "HARRISON FORD" },
                    sections: [
                        { title: "Introduction", content: "Les Virtuoses (ISTP) aiment explorer avec leurs mains et leurs yeux, touchant et examinant le monde qui les entoure avec un rationalisme détaché et une curiosité enthousiaste. Les personnes dotées de ce type de personnalité sont des créateurs naturels, passant d‘un projet à l‘autre, construisant l‘utile et le superflu pour le plaisir, et apprenant de leur environnement au fur et à mesure qu‘ils avancent. Souvent mécaniciens et ingénieurs, les Virtuoses n‘aiment rien tant que de mettre les mains dans le cambouis en démontant et en réassemblant les choses." },
                        { title: "Oser la différence", content: "Les Virtuoses explorent les idées en créant, en réparant, en procédant par essais et erreurs et par expérience directe. Ils aiment que d‘autres personnes s‘intéressent à leurs projets et ne voient parfois aucun inconvénient à ce qu‘elles envahissent leur espace.\n\nSi leurs penchants mécaniques peuvent les faire paraître simples au premier abord, les Virtuoses sont en réalité assez énigmatiques. Amicaux mais très discrets, calmes mais soudainement spontanés, extrêmement curieux mais incapables de se concentrer sur des études formelles, les personnalités des Virtuoses peuvent être difficiles à prédire." },
                        { title: "Défier les règles", content: "Le plus gros problème auquel les Virtuoses sont susceptibles d‘être confrontés est qu‘ils agissent souvent trop tôt, tenant pour acquis leur nature permissive et supposant que tout le monde fonctionne pareil.\n\nLes Virtuoses apprendront que beaucoup d‘autres types de personnalité obéissent à des règles et des comportements jugés acceptables beaucoup plus stricts qu‘eux. Ils ont du mal à accepter les limites et les directives, préférant avoir la liberté de se déplacer et de sortir des sentiers battus si nécessaire." }
                    ]
                },
                en: {
                    quote: { text: "I wanted to live a life, a different life. I didn't want to go to the same place every day and see the same people and do the same job. I wanted interesting challenges.", author: "HARRISON FORD" },
                    sections: [
                        { title: "Introduction", content: "Virtuosos (ISTP) love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, Virtuosos find no greater joy than in getting their hands dirty taking things apart and putting them back together." },
                        { title: "Dare to Differ", content: "Virtuosos explore ideas through creating, troubleshooting, trial and error, and first-hand experience. They enjoy having other people take an interest in their projects and sometimes don’t even mind them getting into their space.\n\nWhile their mechanical tendencies can make them appear simple at a glance, Virtuosos are actually quite enigmatic. Friendly but very private, calm but suddenly spontaneous, extremely curious but unable to stay focused on formal studies, Virtuoso personalities can be a challenge to predict." },
                        { title: "Defying the Rules", content: "The biggest issue Virtuosos are likely to face is that they often act too soon, taking their permissive nature for granted and assuming that others are the same.\n\nVirtuosos will learn that many other personality types have much firmer lines on rules and acceptable behavior than they do. They struggle with boundaries and guidelines, preferring the freedom to move about and color outside the lines if they need to." }
                    ]
                }
            }
        },
        {
            name: 'ISFP',
            labelFr: 'Aventurier',
            labelEn: 'Adventurer',
            img: 'isfp-adventurer.svg',
            descFr: "Artiste flexible et charmant.",
            descEn: "Flexible and charming artist, always ready to explore and experience something new.",
            details: {
                fr: {
                    quote: { text: "J‘évolue au cours d‘une journée. Je me réveille en étant une personne, et au coucher, je sais avec certitude que j‘en suis une autre.", author: "BOB DYLAN" },
                    sections: [
                        { title: "Introduction", content: "Les Aventuriers (ISFP) sont de véritables artistes – mais pas nécessairement au sens conventionnel du terme. Pour ce type de personnalité, la vie elle-même est une toile pour s‘exprimer. De leurs vêtements à la façon dont ils passent leur temps libre, le comportement des Aventuriers reflète fidèlement ce qu‘ils sont en tant qu‘individus uniques.\n\nPoussées par la curiosité et désireuses d‘essayer de nouvelles choses, les personnes dotées de cette personnalité possèdent souvent un éventail fascinant de passions et d‘intérêts. De par leur esprit d‘exploration et leur capacité à trouver de la joie dans la vie de tous les jours, les Aventuriers peuvent être parmi les personnes les plus intéressantes que vous rencontrerez." },
                        { title: "La beauté de l‘ouverture d‘esprit", content: "Les Aventuriers adoptent une attitude souple et adaptable face à la vie. Alors que d'autres s‘épanouissent dans des routines, les Aventuriers veillent à laisser une grande place à l‘imprévu dans leur vie.\n\nCet état d‘esprit flexible rend les Aventuriers remarquablement tolérants et ouverts d‘esprit. Ces personnalités s‘épanouissent réellement dans un monde composé de toutes sortes de personnes, même de celles qui ne sont pas d‘accord avec elles ou qui choisissent des modes de vie radicalement différents. Les Aventuriers veulent vivre dans un monde où eux – et le reste du monde – ont la liberté de vivre à leur guise, sans être jugés." },
                        { title: "Vivre en harmonie", content: "Dans leurs relations, les Aventuriers sont chaleureux, amicaux et attentionnés, et prennent un réel plaisir à la compagnie de leurs proches. Mais ne vous y méprenez pas : il s‘agit d‘un type de personnalité introverti, ce qui signifie que les Aventuriers ont besoin de passer du temps en solitaire pour recharger leur énergie après avoir fréquenté d‘autres personnes.\n\nCréatifs et libres d‘esprit, les Aventuriers marchent à leur propre rythme. Ils sont réfléchis et perspicaces, capables de déceler les sentiments et les opinions tacites des gens." }
                    ]
                },
                en: {
                    quote: { text: "I change during the course of a day. I wake and I'm one person, and when I go to sleep I know for certain I'm somebody else.", author: "BOB DYLAN" },
                    sections: [
                        { title: "Introduction", content: "Adventurers (ISFP) are true artists – but not necessarily in the typical sense. For this personality type, life itself is a canvas for self-expression. From what they wear to how they spend their free time, Adventurers act in ways that vividly reflect who they are as unique individuals.\n\nDriven by curiosity and eager to try new things, people with this personality often have a fascinating array of passions and interests. With their exploratory spirit and their ability to find joy in everyday life, Adventurers can be among the most interesting people you’ll ever meet." },
                        { title: "The Beauty of an Open Mind", content: "Adventurers embrace a flexible, adaptable approach to life. Some personality types thrive on strict schedules and routines, but not Adventurers. Adventurers take each day as it comes, doing what feels right to them in the moment. And they make sure to leave plenty of room in their lives for the unexpected.\n\nThis flexible mindset makes Adventurers remarkably tolerant and open-minded. These personalities genuinely love living in a world filled with all kinds of people – even people who disagree with them or choose radically different lifestyles. It’s not that Adventurers don’t have strong beliefs. It’s just that they want to live in a world where they – and everyone else – have the freedom to live as they see fit, without being judged." },
                        { title: "Living in Harmony", content: "In their relationships, Adventurers are warm, friendly, and caring, taking wholehearted enjoyment in the company of their nearest and dearest. But make no mistake: this is an Introverted personality type. This means that Adventurers need dedicated time alone to recharge their energy after socializing with others.\n\nCreative and free-spirited, Adventurers march to the beat of their own drum. They are thoughtful and perceptive, able to pick up on people’s unspoken feelings and opinions." }
                    ]
                }
            }
        },
        {
            name: 'ESTP',
            labelFr: 'Entrepreneur',
            labelEn: 'Entrepreneur',
            img: 'estp-entrepreneur.svg',
            descFr: "Personne intelligente, énergique et perceptrice.",
            descEn: "Smart, energetic and very perceptive person, who truly enjoys living on the edge.",
            details: {
                fr: {
                    quote: { text: "La vie est une aventure audacieuse ou elle n‘est rien.", author: "HELEN KELLER" },
                    sections: [
                        { title: "Introduction", content: "Les Entrepreneurs (ESTP) ont toujours un impact sur leur environnement immédiat – la meilleure façon de les repérer lors d‘une fête est de chercher le tourbillon de personnes qui s‘agitent autour d‘eux. Aimant rire et se divertir avec un humour franc et terre à terre, les Entrepreneurs adorent être au centre de l‘attention.\n\nLa théorie, les concepts abstraits et les discussions laborieuses ne retiennent pas longtemps l‘attention des Entrepreneurs. Ils entretiennent des conversations énergiques mais ils aiment parler de ce qui est – ou mieux encore, de se lancer et de le réaliser." },
                        { title: "Plonger dans l‘action", content: "Les Entrepreneurs sont le type de personnalité le plus susceptible d‘adopter un style de vie risqué. Ils vivent dans l‘instant et se jettent dans l‘action – ils sont l‘œil du cyclone. Les personnes ayant le type de personnalité Entrepreneurs aiment le drame, la passion et le plaisir, non pas pour les sensations fortes, mais parce que cela stimule leur esprit logique.\n\nC‘est la raison pour laquelle l‘école et d‘autres environnements très organisés représentent un défi pour les Entrepreneurs. Ils préfèrent un apprentissage pratique plutôt qu'une approche théorique." },
                        { title: "Le sentier le moins fréquenté", content: "Les Entrepreneurs, qui ont peut-être la vision la plus perspicace et la moins filtrée de tous les types de personnalité, ont un talent unique pour remarquer les petits changements. Qu‘il s‘agisse d‘un changement d‘expression faciale, d‘un nouveau style vestimentaire ou d‘une habitude abandonnée, les personnes dotées de ce type de personnalité devinent des pensées et des motivations cachées.\n\nLes Entrepreneurs sont pleins de passion et d‘énergie, avec un esprit rationnel. Source d‘inspiration, convaincants et hauts en couleur, ils sont des meneurs de groupe nés, entraînant tout le monde sur le chemin le moins fréquenté." }
                    ]
                },
                en: {
                    quote: { text: "Life is either a daring adventure or nothing at all.", author: "HELEN KELLER" },
                    sections: [
                        { title: "Introduction", content: "Entrepreneurs (ESTP) always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneurs love to be the center of attention.\n\nTheory, abstract concepts and plodding discussions about global issues and their implications don’t keep Entrepreneurs interested for long. They keep their conversation energetic, but they like to talk about what is – or better yet, to just go out and do it." },
                        { title: "Diving Right In", content: "Entrepreneurs are the likeliest personality type to make a lifestyle of risky behavior. They live in the moment and dive into the action – they are the eye of the storm. People with the Entrepreneur personality type enjoy drama, passion, and pleasure, not for emotional thrills, but because it’s so stimulating to their logical minds.\n\nThis makes school and other highly organized environments a challenge for Entrepreneurs. They prefer a hands-on approach rather than a theoretical one." },
                        { title: "The Path Less Traveled", content: "With perhaps the most perceptive, unfiltered view of any type, Entrepreneurs have a unique skill in noticing small changes. Whether a shift in facial expression, a new clothing style, or a broken habit, people with this personality type pick up on hidden thoughts and motives.\n\nEntrepreneurs are full of passion and energy, complemented by a rational, if sometimes distracted, mind. Inspiring, convincing and colorful, they are natural group leaders, pulling everyone along the path less traveled." }
                    ]
                }
            }
        },
        {
            name: 'ESFP',
            labelFr: 'Amuseur',
            labelEn: 'Entertainer',
            img: 'esfp-entertainer.svg',
            descFr: "Amuseur spontané, énergique et enthousiaste.",
            descEn: "Spontaneous, energetic and enthusiastic entertainer - life is never boring around them.",
            details: {
                fr: {
                    quote: { text: "Vivez chaque seconde sans hésitation.", author: "ELTON JOHN" },
                    sections: [
                        { title: "Introduction", content: "S‘il y a quelqu‘un qui se met spontanément à chanter et à danser, c‘est bien l‘Amuseur (ESFP). Les Amuseurs sont pris dans la fièvre de l‘instant et veulent que tout le monde se sente comme eux. Aucun autre type de personnalité n‘est aussi porté sur le don de son temps et de son énergie que les Amuseurs lorsqu‘il s‘agit d‘encourager les autres, et aucun autre type de personnalité ne le fait avec un style aussi irrésistible." },
                        { title: "Vivre avec passion", content: "Les Amuseurs aiment être sous les feux de la rampe, et le monde entier est leur scène. De nombreuses personnes célèbres ayant le type de personnalité Amuseur sont en effet des acteurs, mais ils aiment aussi se donner en spectacle à leurs amis. Absolument sociables, les Amuseurs apprécient les choses les plus simples, et rien ne les rend plus heureux que de s‘amuser avec un bon groupe d‘amis.\n\nLes Amuseurs ont le sens de l‘esthétique le plus développé de tous les types de personnalité. Sachant ce qui est beau dès qu‘ils le voient, les Amuseurs n‘ont pas peur de changer leur environnement pour refléter leur style personnel." },
                        { title: "Un tempérament spontané", content: "Le plus grand défi auquel les Amuseurs sont confrontés est qu‘ils sont souvent tellement centrés sur les plaisirs immédiats qu‘ils négligent les obligations et les responsabilités qui rendent ce luxe possible. Les analyses complexes, les tâches répétitives et l‘adéquation entre les statistiques et les conséquences réelles ne sont pas des activités faciles pour les Amuseurs.\n\nLes Amuseurs reconnaissent la valeur et la qualité, ce qui, en soi, est un bon trait de caractère. Cependant, plus enclins à saisir des opportunités qu‘à définir des objectifs à long terme, ils doivent faire attention à ne pas vivre au-dessus de leurs moyens." }
                    ]
                },
                en: {
                    quote: { text: "Live for each second without hesitation.", author: "ELTON JOHN" },
                    sections: [
                        { title: "Introduction", content: "If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer (ESFP). Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others, and no other personality type does it with such irresistible style." },
                        { title: "Living With Passion", content: "Entertainers love the spotlight, and all the world’s a stage. Many famous people with the Entertainer personality type are indeed actors, but they love putting on a show for their friends too. Utterly social, Entertainers enjoy the simplest things, and there’s no greater joy for them than just having fun with a good group of friends.\n\nEntertainers have the strongest aesthetic sense of any personality type. Knowing what is beautiful the moment they see it, Entertainers aren't afraid to change their surroundings to reflect their personal style." },
                        { title: "A Spontaneous Spirit", content: "The biggest challenge Entertainers face is that they are often so focused on immediate pleasures that they neglect the duties and responsibilities that make those luxuries possible. Complex analysis, repetitive tasks, and matching statistics to real consequences are not easy activities for Entertainers.\n\nEntertainers recognize value and quality, which, on its own, is a fine trait. However, being more prone to seizing opportunities than planning long-term goals, they may find themselves living beyond their means." }
                    ]
                }
            }
        }
    ]
};