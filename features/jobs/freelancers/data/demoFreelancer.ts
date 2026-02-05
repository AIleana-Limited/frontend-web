import { Freelancer } from "@/types/freelancer"

export const demoFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Big Jay",
    rank: "Epic Coder",
    title: "Senior Software Engineer",
    tagline: "Epic Coder",
    coverImage: "/post/ui.jpg",
    rating: 4.8,
    hourlyRate: 20,
    location: "Poland",
    availability: "Full time",
    skills: ["Python", "Java", "PostgreSQL", "REST APIs"],
    avatar: "/avatars/user2.png",

    about:
      "Senior Software Engineer with 8+ years of experience designing scalable backend systems. I specialize in API architecture, performance optimization, and secure systems for startups and enterprises.",

    reviews: [
      {
        id: "r1",
        clientName: "Startup X",
        rating: 5,
        comment:
          "Big Jay delivered beyond expectations. Clean architecture, excellent communication, and zero delays.",
      },
      {
        id: "r2",
        clientName: "Fintech Co",
        rating: 4.6,
        comment:
          "Very professional engineer. Improved system performance by over 40%.",
      },
      {
        id: "r3",
        clientName: "SaaS Hub",
        rating: 4.8,
        comment:
          "Strong ownership mentality. Would definitely work with him again.",
      },
    ],

    portfolio: [
      {
        id: "p1",
        title: "Scalable E-commerce Platform",
        role: "Senior Backend Engineer",
        techStack: ["Python", "PostgreSQL", "Stripe", "Docker"],
        overview:
          "Built a high-traffic backend supporting authentication, payments, and order management for 100k+ users.",
      },
      {
        id: "p2",
        title: "SaaS Admin Dashboard",
        role: "Full-Stack Engineer",
        techStack: ["Java", "Spring Boot", "React"],
        overview:
          "Developed a secure admin dashboard with role-based access and analytics.",
      },
    ],
  },

  {
    id: "2",
    name: "John Doe",
    rank: "WordPress Pro",
    title: "WordPress Developer",
    tagline: "Your Friendly Guy",
    rating: 4.8,
    hourlyRate: 20,
    location: "LA, USA",
    availability: "Full time",
    skills: ["WordPress", "PHP", "Elementor", "WooCommerce"],
    avatar: "/avatars/user1.png",

    about:
      "I build conversion-focused WordPress websites that are fast, secure, and easy to manage for clients.",

    reviews: [
      {
        id: "r1",
        clientName: "Local Business",
        rating: 5,
        comment:
          "John transformed our outdated website into a modern, fast site.",
      },
      {
        id: "r2",
        clientName: "Online Store Owner",
        rating: 4.7,
        comment:
          "Great WooCommerce experience. Sales improved after redesign.",
      },
    ],

    portfolio: [
      {
        id: "p1",
        title: "E-commerce Store",
        role: "WordPress Developer",
        techStack: ["WordPress", "WooCommerce", "Elementor"],
        overview:
          "Designed and built a full WooCommerce store with custom checkout flow.",
      },
      {
        id: "p2",
        title: "Corporate Website",
        role: "Frontend Developer",
        techStack: ["WordPress", "ACF", "PHP"],
        overview:
          "Created a corporate website with reusable content blocks.",
      },
    ],
  },

  {
    id: "3",
    name: "Amelia Brooks",
    rank: "Design Specialist",
    title: "UI/UX Designer",
    tagline: "Designs that convert",
    rating: 4.9,
    hourlyRate: 25,
    location: "London, UK",
    availability: "Part time",
    skills: ["Figma", "UX Research", "Prototyping"],
    avatar: "/avatars/user4.png",

    about:
      "Product-focused UI/UX designer helping startups improve usability and conversions.",

    reviews: [
      {
        id: "r1",
        clientName: "Fintech App",
        rating: 5,
        comment:
          "Our onboarding conversion increased significantly after Amelia’s redesign.",
      },
      {
        id: "r2",
        clientName: "Startup Founder",
        rating: 4.8,
        comment:
          "Very thoughtful design decisions and smooth collaboration.",
      },
    ],

    portfolio: [
      {
        id: "p1",
        title: "Mobile Banking App",
        role: "Lead Designer",
        techStack: ["Figma", "UX Research"],
        overview:
          "Redesigned mobile banking flows to improve accessibility and clarity.",
      },
      {
        id: "p2",
        title: "SaaS Landing Page",
        role: "UI Designer",
        techStack: ["Figma", "Design Systems"],
        overview:
          "Designed a high-conversion landing page for a SaaS product.",
      },
    ],
  },

  {
    id: "4",
    name: "Carlos Mendes",
    rank: "System Architect",
    title: "Backend Engineer",
    tagline: "Scaling systems calmly",
    rating: 4.9,
    hourlyRate: 30,
    location: "São Paulo, Brazil",
    availability: "Full time",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    avatar: "/avatars/user5.png",

    about:
      "Backend engineer focused on reliability, scalability, and clean system design.",

    reviews: [
      {
        id: "r1",
        clientName: "Logistics Startup",
        rating: 5,
        comment:
          "Carlos redesigned our backend and eliminated downtime issues.",
      },
      {
        id: "r2",
        clientName: "Enterprise Client",
        rating: 4.9,
        comment:
          "Rock-solid backend work. Very calm and methodical engineer.",
      },
    ],

    portfolio: [
      {
        id: "p1",
        title: "Real-time Logistics API",
        role: "Backend Architect",
        techStack: ["Node.js", "Redis", "PostgreSQL"],
        overview:
          "Built a real-time tracking API handling thousands of concurrent requests.",
      },
      {
        id: "p2",
        title: "Microservices Migration",
        role: "Lead Engineer",
        techStack: ["Docker", "Node.js"],
        overview:
          "Migrated a monolith into scalable microservices architecture.",
      },
    ],
  },

  {
    id: "5",
    name: "Zara Ali",
    rank: "AI Whisperer",
    title: "AI Prompt Engineer",
    tagline: "Talking to machines",
    rating: 4.9,
    hourlyRate: 35,
    location: "Dubai, UAE",
    availability: "Part time",
    skills: ["LLMs", "Prompt Engineering", "Automation"],
    avatar: "/avatars/user1.png",

    about:
      "I design prompts and workflows that unlock maximum value from AI systems.",

    reviews: [
      {
        id: "r1",
        clientName: "AI Startup",
        rating: 5,
        comment:
          "Zara helped us improve LLM accuracy dramatically with prompt tuning.",
      },
      {
        id: "r2",
        clientName: "Content Platform",
        rating: 4.8,
        comment:
          "Excellent understanding of AI workflows and automation.",
      },
    ],

    portfolio: [
      {
        id: "p1",
        title: "AI Customer Support Bot",
        role: "Prompt Engineer",
        techStack: ["GPT-4", "Automation"],
        overview:
          "Designed prompt systems powering an AI customer support assistant.",
      },
      {
        id: "p2",
        title: "Content Generation Pipeline",
        role: "AI Engineer",
        techStack: ["LLMs", "Workflow Automation"],
        overview:
          "Built automated content workflows for blogs and newsletters.",
      },
    ],
  },
  {
  id: "6",
  name: "Samuel Okafor",
  rank: "Frontend Specialist",
  title: "Frontend Developer",
  tagline: "React & performance nerd",
  coverImage: "/post/ui.jpg",
  rating: 4.7,
  hourlyRate: 18,
  location: "Lagos, Nigeria",
  availability: "Full time",
  skills: ["React", "Next.js", "Tailwind", "TypeScript"],
  avatar: "/avatars/user3.png",

  about:
    "Frontend developer passionate about performance, accessibility, and delightful UI interactions. I build fast, scalable web apps with React and Next.js.",

  reviews: [
    {
      id: "r1",
      clientName: "EdTech Startup",
      rating: 4.7,
      comment:
        "Samuel optimized our frontend and reduced load time significantly.",
    },
    {
      id: "r2",
      clientName: "Agency Client",
      rating: 4.6,
      comment:
        "Very responsive and detail-oriented. Clean UI work.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "Learning Management System",
      role: "Frontend Engineer",
      techStack: ["Next.js", "Tailwind", "TypeScript"],
      overview:
        "Built a reusable UI system for an LMS used by 10k+ students.",
    },
    {
      id: "p2",
      title: "Marketing Website",
      role: "Frontend Developer",
      techStack: ["React", "Framer Motion"],
      overview:
        "Implemented animated landing pages focused on conversions.",
    },
  ],
},

{
  id: "7",
  name: "Nina Petrova",
  rank: "Mobile Expert",
  title: "Mobile App Developer",
  tagline: "iOS & Android specialist",
  rating: 4.6,
  hourlyRate: 22,
  location: "Sofia, Bulgaria",
  availability: "Part time",
  skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
  avatar: "/avatars/user1.png",

  about:
    "Cross-platform mobile developer building stable and scalable apps using Flutter.",

  reviews: [
    {
      id: "r1",
      clientName: "Health Startup",
      rating: 4.6,
      comment:
        "Nina delivered a smooth mobile app on time with great UX.",
    },
    {
      id: "r2",
      clientName: "Fitness Brand",
      rating: 4.5,
      comment:
        "Very professional and great Flutter knowledge.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "Health Tracking App",
      role: "Mobile Developer",
      techStack: ["Flutter", "Firebase"],
      overview:
        "Built a real-time health tracking app with cloud sync.",
    },
    {
      id: "p2",
      title: "E-commerce Mobile App",
      role: "Flutter Developer",
      techStack: ["Flutter", "REST APIs"],
      overview:
        "Developed a cross-platform shopping app with payment integration.",
    },
  ],
},

{
  id: "8",
  name: "Fatima Zahra",
  rank: "Data Whisperer",
  title: "Data Analyst",
  tagline: "Turning data into insight",
  rating: 4.7,
  hourlyRate: 19,
  location: "Casablanca, Morocco",
  availability: "Part time",
  skills: ["SQL", "Python", "Power BI", "Excel"],
  avatar: "/avatars/user1.png",

  about:
    "Data analyst with strong storytelling skills, helping businesses make data-driven decisions.",

  reviews: [
    {
      id: "r1",
      clientName: "Retail Company",
      rating: 4.8,
      comment:
        "Fatima helped us uncover trends that boosted sales.",
    },
    {
      id: "r2",
      clientName: "Marketing Team",
      rating: 4.6,
      comment:
        "Clear dashboards and actionable insights.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "Sales Analytics Dashboard",
      role: "Data Analyst",
      techStack: ["Power BI", "SQL"],
      overview:
        "Built dashboards tracking revenue, churn, and growth.",
    },
    {
      id: "p2",
      title: "Customer Segmentation",
      role: "Data Analyst",
      techStack: ["Python", "Pandas"],
      overview:
        "Segmented customers to improve marketing campaigns.",
    },
  ],
},

{
  id: "9",
  name: "Liam O'Connor",
  rank: "Cloud Operator",
  title: "DevOps Engineer",
  tagline: "Automation first",
  rating: 4.8,
  hourlyRate: 28,
  location: "Dublin, Ireland",
  availability: "Full time",
  skills: ["AWS", "Terraform", "CI/CD", "Linux"],
  avatar: "/avatars/user2.png",

  about:
    "DevOps engineer focused on automation, infrastructure as code, and system reliability.",

  reviews: [
    {
      id: "r1",
      clientName: "SaaS Company",
      rating: 4.9,
      comment:
        "Liam stabilized our infrastructure and improved deployments.",
    },
    {
      id: "r2",
      clientName: "Startup CTO",
      rating: 4.7,
      comment:
        "Strong DevOps practices and documentation.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "Cloud Infrastructure Setup",
      role: "DevOps Engineer",
      techStack: ["AWS", "Terraform"],
      overview:
        "Provisioned scalable cloud infrastructure using IaC.",
    },
    {
      id: "p2",
      title: "CI/CD Pipeline",
      role: "DevOps Engineer",
      techStack: ["GitHub Actions", "Docker"],
      overview:
        "Automated testing and deployment pipelines.",
    },
  ],
},

{
  id: "10",
  name: "Hannah Lee",
  rank: "Content Strategist",
  title: "Content Strategist",
  tagline: "Words that sell",
  rating: 4.6,
  hourlyRate: 15,
  location: "Seoul, South Korea",
  availability: "Part time",
  skills: ["SEO", "Copywriting", "Content Marketing"],
  avatar: "/avatars/user5.png",

  about:
    "Content strategist helping brands grow with SEO-focused storytelling.",

  reviews: [
    {
      id: "r1",
      clientName: "E-commerce Brand",
      rating: 4.6,
      comment:
        "Traffic increased significantly after Hannah’s content strategy.",
    },
    {
      id: "r2",
      clientName: "Blog Owner",
      rating: 4.5,
      comment:
        "Very structured and SEO-focused writing.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "SEO Blog Strategy",
      role: "Content Strategist",
      techStack: ["SEO", "Analytics"],
      overview:
        "Built an SEO content plan driving organic traffic growth.",
    },
    {
      id: "p2",
      title: "Product Copywriting",
      role: "Copywriter",
      techStack: ["Copywriting"],
      overview:
        "Wrote high-converting product descriptions.",
    },
  ],
},

{
  id: "11",
  name: "Michael Rossi",
  rank: "Quality Guardian",
  title: "QA Engineer",
  tagline: "Breaks things professionally",
  rating: 4.5,
  hourlyRate: 16,
  location: "Milan, Italy",
  availability: "Full time",
  skills: ["Manual Testing", "Cypress", "Jest"],
  avatar: "/avatars/user3.png",

  about:
    "QA engineer ensuring product quality through rigorous testing.",

  reviews: [
    {
      id: "r1",
      clientName: "SaaS Startup",
      rating: 4.5,
      comment:
        "Michael improved our release stability significantly.",
    },
    {
      id: "r2",
      clientName: "Product Manager",
      rating: 4.4,
      comment:
        "Reliable testing and great bug reports.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "Automated Testing Suite",
      role: "QA Engineer",
      techStack: ["Cypress", "Jest"],
      overview:
        "Implemented automated tests reducing regressions.",
    },
    {
      id: "p2",
      title: "QA Process Setup",
      role: "QA Engineer",
      techStack: ["Manual Testing"],
      overview:
        "Defined QA workflows and bug tracking process.",
    },
  ],
},

{
  id: "12",
  name: "Zara Ali",
  rank: "AI Whisperer",
  title: "AI Prompt Engineer",
  tagline: "Talking to machines",
  rating: 4.9,
  hourlyRate: 35,
  location: "Dubai, UAE",
  availability: "Part time",
  skills: ["LLMs", "Prompt Design", "Automation"],
  avatar: "/avatars/user1.png",

  about:
    "Prompt engineer specializing in AI workflows and automation.",

  reviews: [
    {
      id: "r1",
      clientName: "AI Startup",
      rating: 5,
      comment:
        "Zara dramatically improved our AI outputs.",
    },
    {
      id: "r2",
      clientName: "Content Platform",
      rating: 4.8,
      comment:
        "Excellent AI knowledge and fast turnaround.",
    },
  ],

  portfolio: [
    {
      id: "p1",
      title: "AI Support Bot",
      role: "Prompt Engineer",
      techStack: ["GPT-4", "Automation"],
      overview:
        "Designed prompts powering AI customer support.",
    },
    {
      id: "p2",
      title: "Content Automation",
      role: "AI Engineer",
      techStack: ["LLMs"],
      overview:
        "Built AI workflows for content generation.",
    },
  ],
},

];

