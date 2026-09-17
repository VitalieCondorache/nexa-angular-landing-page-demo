export type Language = 'ro' | 'en';

export const translations = {
  ro: {
    nav: {
      product: 'Produs',
      solutions: 'Soluții',
      pricing: 'Prețuri',
      signIn: 'Autentificare',
      getStarted: 'Începe gratuit',
    },
    hero: {
      eyebrow: 'Spațiul de lucru pentru echipe care construiesc',
      title: 'Ideile bune merită un loc mai clar.',
      description:
        'Nexa aduce proiectele, conversațiile și deciziile echipei într-un singur spațiu calm, construit pentru progres.',
      primaryCta: 'Începe gratuit',
      secondaryCta: 'Vezi cum funcționează',
      note: 'Nu este necesar un card. Configurare în 2 minute.',
      activeProjects: 'proiecte active',
      completed: 'finalizat săptămâna aceasta',
    },
    trusted: 'Folosit de echipe care refuză haosul',
    features: {
      eyebrow: 'Mai puțină administrare. Mai multă creație.',
      title: 'Tot ce ai nevoie pentru a păstra ritmul.',
      description: 'Un sistem flexibil care se adaptează felului în care lucrează echipa ta.',
      items: [
        {
          number: '01',
          title: 'Un singur adevăr',
          description:
            'Documente, task-uri și decizii într-un spațiu pe care toată echipa îl înțelege.',
        },
        {
          number: '02',
          title: 'Context la îndemână',
          description:
            'Găsește rapid ce contează și păstrează conversațiile lângă munca propriu-zisă.',
        },
        {
          number: '03',
          title: 'Progres vizibil',
          description:
            'Transformă planurile în pași concreți și vezi cum avansează fiecare proiect.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Simplu de început. Ușor de extins.',
      title: 'Planul potrivit pentru ritmul tău.',
      description: 'Începe cu ce ai nevoie acum și crește când echipa ta este pregătită.',
      popular: 'Cel mai ales',
      monthly: '/ lună',
      start: 'Alege planul',
      plans: [
        {
          name: 'Solo',
          description: 'Pentru idei și proiecte personale.',
          price: '0',
          features: ['3 proiecte active', 'Note și documente', 'Partajare de bază'],
        },
        {
          name: 'Studio',
          description: 'Pentru echipe mici care construiesc.',
          price: '12',
          features: ['Proiecte nelimitate', 'Colaborare în timp real', 'Automatizări simple'],
        },
        {
          name: 'Scale',
          description: 'Pentru organizații în mișcare.',
          price: '29',
          features: ['Spații de lucru nelimitate', 'Permisiuni avansate', 'Suport prioritar'],
        },
      ],
    },
    faq: {
      eyebrow: 'Întrebări frecvente',
      title: 'Ai întrebări? Avem răspunsuri.',
      items: [
        {
          question: 'Pot începe fără card?',
          answer: 'Da. Planul Solo este gratuit și nu solicită date de plată.',
        },
        {
          question: 'Pot schimba planul mai târziu?',
          answer: 'Sigur. Poți face upgrade sau downgrade oricând, fără contract pe termen lung.',
        },
        {
          question: 'Este Nexa potrivit pentru echipe distribuite?',
          answer:
            'Da. Nexa păstrează conversațiile, documentele și progresul accesibile de oriunde.',
        },
      ],
    },
    cta: {
      title: 'Lucrurile bune încep cu un spațiu mai bun.',
      description: 'Construiește următorul tău proiect cu mai puțin zgomot și mai multă intenție.',
      button: 'Creează workspace-ul tău',
    },
    footer: {
      tagline: 'Un spațiu clar pentru idei care merită construite.',
      product: 'Produs',
      company: 'Companie',
      resources: 'Resurse',
      about: 'Despre Nexa',
      careers: 'Cariere',
      blog: 'Jurnal',
      help: 'Ajutor',
      privacy: 'Confidențialitate',
      terms: 'Termeni',
    },
  },
  en: {
    nav: {
      product: 'Product',
      solutions: 'Solutions',
      pricing: 'Pricing',
      signIn: 'Sign in',
      getStarted: 'Get started free',
    },
    hero: {
      eyebrow: 'The workspace for teams that build',
      title: 'Good ideas deserve a clearer place.',
      description:
        'Nexa brings your team’s projects, conversations, and decisions into one calm space, built for progress.',
      primaryCta: 'Get started free',
      secondaryCta: 'See how it works',
      note: 'No credit card required. Set up in 2 minutes.',
      activeProjects: 'active projects',
      completed: 'completed this week',
    },
    trusted: 'Trusted by teams that refuse the chaos',
    features: {
      eyebrow: 'Less administration. More creation.',
      title: 'Everything you need to keep momentum.',
      description: 'A flexible system that adapts to the way your team works.',
      items: [
        {
          number: '01',
          title: 'One source of truth',
          description: 'Docs, tasks, and decisions in one space everyone on your team understands.',
        },
        {
          number: '02',
          title: 'Context at hand',
          description: 'Find what matters quickly and keep conversations close to the actual work.',
        },
        {
          number: '03',
          title: 'Visible progress',
          description: 'Turn plans into concrete steps and see every project move forward.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Simple to start. Easy to scale.',
      title: 'The right plan for your pace.',
      description: 'Start with what you need now and grow when your team is ready.',
      popular: 'Most popular',
      monthly: '/ month',
      start: 'Choose plan',
      plans: [
        {
          name: 'Solo',
          description: 'For personal ideas and projects.',
          price: '0',
          features: ['3 active projects', 'Notes and docs', 'Basic sharing'],
        },
        {
          name: 'Studio',
          description: 'For small teams that build.',
          price: '12',
          features: ['Unlimited projects', 'Real-time collaboration', 'Simple automations'],
        },
        {
          name: 'Scale',
          description: 'For organizations in motion.',
          price: '29',
          features: ['Unlimited workspaces', 'Advanced permissions', 'Priority support'],
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Have questions? We have answers.',
      items: [
        {
          question: 'Can I start without a card?',
          answer: 'Yes. The Solo plan is free and never asks for payment details.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'Absolutely. Upgrade or downgrade at any time, with no long-term contract.',
        },
        {
          question: 'Is Nexa right for distributed teams?',
          answer: 'Yes. Nexa keeps conversations, docs, and progress accessible from anywhere.',
        },
      ],
    },
    cta: {
      title: 'Good work starts with a better space.',
      description: 'Build your next project with less noise and more intention.',
      button: 'Create your workspace',
    },
    footer: {
      tagline: 'A clear space for ideas worth building.',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      about: 'About Nexa',
      careers: 'Careers',
      blog: 'Journal',
      help: 'Help center',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
