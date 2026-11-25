/**
 * RESUME CONFIG: the content from the resume, in one place.
 * Edit this file to change the About, Skills, Experience and Education sections.
 */

export const SUMMARY =
  "I'm a software developer who builds responsive web applications from the interface down to the backend. I've shipped production sites for small businesses, and I've also run teams and events, which helps when a project needs more than code.";

export const SKILLS = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Responsive UI/UX"],
  },
  {
    group: "Backend and data",
    items: ["Node.js", "RESTful APIs", "Supabase"],
  },
  {
    group: "Tools and deployment",
    items: ["Git", "GitHub", "Vercel", "CI/CD pipelines"],
  },
  {
    group: "How I work",
    items: ["Agile", "Scrum", "Project lifecycle management", "Cross-functional collaboration", "Technical communication"],
  },
] as const;

export interface Experience {
  org: string;
  role: string;
  place: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    org: "Hub for Innovation Ventures and Experience",
    role: "Operations Intern",
    place: "Kochi, Kerala",
    start: "Sep 2026",
    end: "Present",
    current: true,
    points: [
      "Coordinate operations and logistics for campus events, with a team of 30 to 40 people.",
      "Line up departments and run each event from the first meeting to the final day.",
      "Set up onboarding and communication routines so teams stay in sync and resources go where they're needed.",
    ],
  },
  {
    org: "Teklearn",
    role: "Developer Intern",
    place: "Kochi, Kerala (on-site)",
    start: "Jun 2026",
    end: "Sep 2026",
    points: [
      "Built and maintained software on-site, tuning code for speed and scalability.",
      "Worked with other teams to define architecture, write technical requirements and ship new features.",
      "Fixed hard technical problems and simplified the deployment process.",
    ],
  },
  {
    org: "Cénit Labs",
    role: "Co-Founder and Director of Operations",
    place: "Hybrid",
    start: "Oct 2025",
    end: "Mar 2026",
    points: [
      "Co-founded an agile product studio and ran software delivery for paying clients.",
      "Used agile practice and engineering management to tighten the core development workflow.",
      "Led mixed teams building custom digital products, keeping client requirements and technical work in step.",
    ],
  },
  {
    org: "BuilderClan (AISAT)",
    role: "Outreach Lead",
    place: "Kochi, Kerala",
    start: "Jul 2025",
    end: "Jun 2026",
    points: [
      "Ran outreach and social media for the community, which raised turnout at technical events.",
      "Built relationships with outside tech partners and student groups to run joint software initiatives.",
    ],
  },
  {
    org: "TinkerHub",
    role: "Campus Lead",
    place: "Kochi, Kerala",
    start: "Jul 2024",
    end: "Jun 2025",
    points: [
      "Led technical community programs where students teach and learn engineering from each other.",
      "Organized bootcamps, hackathons and campus events that connected coursework to industry software skills.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Albertian Institute of Science and Technology (AISAT)",
    degree: "B.Tech, Computer Science and Engineering",
    years: "Sep 2023 to Sep 2027",
    activities: "TinkerHub, Techiepedia, BuilderClan, IEDC, IEEE",
  },
  {
    school: "Christava Mahilalayam Public School",
    degree: "Higher Secondary Education",
    years: "Jun 2017 to Apr 2023",
    activities: "Campus Event Manager, Red House Captain",
  },
] as const;

export const RESUME_HREF = "/Joseph_Shibu_Resume.pdf";
