const profile = {
  name: "Vaibhav Sharma",
  title: "Senior Software Engineer • Full Stack (MERN/MEAN/PHP)",
  location: "Indore, India • Open to Remote (WFH)",
  taglineWords: [
    "Building Scalable Web Apps",
    "9+ Years Experience",
    "MERN • MEAN • NestJS  • NextJs  • PHP • Laravel ",
    "AWS • Azure • Docker • K8s"
  ],
  summary:
    "Full Stack Developer with 9 years' experience in MERN & MEAN, PHP/Laravel, and modern JavaScript frameworks. I design scalable architectures, lead teams, and ship reliable software with CI/CD, testing, and cloud.",
  skills: {
    frontend: ["React.js","Next.js","Angular","Vue.js","Tailwind CSS","Storybook"],
    backend: ["Node.js","Express.js","NestJS","PHP","Laravel","REST","GraphQL","WebSockets"],
    databases: ["MongoDB","MySQL","PostgreSQL","Redis"],
    devops: ["AWS","Azure","Docker","Kubernetes","CI/CD"],
    testing: ["Jest","Playwright","Cypress"]
  },
  experience: [
    {
      company: "Tech Mahindra",
      role: "Senior Software Engineer",
      period: "Apr 2025 – Jul 2025",
      summary:
        "Node.js microservices, REST APIs, MongoDB, Angular frontend, auth, Agile, Jest testing."
    },
    {
      company: "CDN Solutions Group",
      role: "Senior Software Engineer",
      period: "Jan 2024 – Dec 2024",
      summary:
        "Led Node/NestJS APIs and React/Next.js UIs; performance, security, CI/CD, stakeholder collaboration."
    },
    {
      company: "OutThinkCoders",
      role: "Team Lead",
      period: "Aug 2019 – Dec 2023",
      summary:
        "Led teams across Laravel/Node/Angular/React/Next/Vue; sprint planning, mentoring, delivery ownership."
    },
    {
      company: "Mindiii Systems Pvt. Ltd.",
      role: "Software Engineer",
      period: "Nov 2015 – Jul 2019",
      summary:
        "Full-stack projects with PHP/CodeIgniter/Node/Angular; API design, bug-fixing, performance improvements."
    }
  ],
  projects: [
    {
      title: "IntegriShield (Compliance Monitoring)",
      stack: ["NestJS","MongoDB","Queues","Docker","CI/CD"],
      description:
        "Automated violation detection and reporting across marketing/compliance workflows.",
      highlights: [
        "Designed REST modules (Affiliates, Clients, Contacts)",
        "Queue-based import/export pipelines",
        "Dockerized services and CI/CD"
      ]
    },
    {
      title: "Casino (Online Gaming)",
      stack: ["WebSockets","Node.js","Micro-frontends","Kubernetes"],
      description:
        "Realtime gaming with multiplayer flows and secure transactions.",
      highlights: [
        "Crash game engine with WebSockets",
        "Card game logic (Bet/Rebet/Insurance)",
        "Auto Settings & micro-frontends"
      ]
    },
    {
      title: "HappyToFun (Loyalty)",
      stack: ["React","Redux","Node.js","MongoDB","Azure"],
      description:
        "Loyalty & rewards platform improving user engagement.",
      highlights: [
        "React + Redux front-end",
        "Node.js/Express APIs",
        "MongoDB schema & aggregations"
      ]
    },
    {
      title: "HR2day (Enterprise HR)",
      stack: ["Angular 11","Node.js","MongoDB","AWS"],
      description:
        "Enterprise HR automation across multi-site operations.",
      highlights: [
        "Led Angular team",
        "HR workflow APIs in Node.js",
        "AWS (EC2, S3, RDS, Lambda)"
      ]
    }
  ],
  education: [
    { degree: "B.E. Computer Science & Engineering", institution: "SDITS, Khandwa (RGPV University)", year: "2012" }
  ],
  contact: {
    email: "php.vaibhav@gmail.com",
    phone: "+91 9009585194",
    linkedin: "https://www.linkedin.com/in/vaibhav-sharma-371229127",
    github: "https://github.com/phpvaibhav"
  }
};

export default profile;