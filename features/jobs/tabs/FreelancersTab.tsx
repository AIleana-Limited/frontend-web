import FreelancerList from "@/components/freelancers/FreelancerList";
import SearchBar from "@/components/freelancers/SearchBar";
import { Freelancer } from "@/types/freelancer";

const freelancers: Freelancer[] = [
  {
    id: "1",
    name: "Big Jay",
    title: "Senior Software Engineer",
    tagline: "Epic Coder",
    rating: 4.8,
    hourlyRate: 20,
    location: "Poland",
    availability: "Full time",
    skills: ["HTTP", "CSS", "JAVA", "Python"],
    avatar: "/avatars/user2.png",
  },
  {
    id: "2",
    name: "John Doe",
    title: "WordPress Developer",
    tagline: "Your Friendly guy",
    rating: 4.8,
    hourlyRate: 20,
    location: "LA, USA",
    availability: "Full time",
    skills: ["HTML", "PHP", "JavaScript", "WordPress"],
    avatar: "/avatars/user1.png",
  },
  {
    id: "3",
    name: "Derrick Igwe",
    title: "Product Manager",
    tagline: "PM for a reason",
    rating: 4.8,
    hourlyRate: 20,
    location: "LA, USA",
    availability: "Full time",
    skills: ["HTML", "PHP", "JavaScript", "WordPress"],
    avatar: "/avatars/user3.png",
  },
  {
    id: "4",
    name: "Amelia Brooks",
    title: "UI/UX Designer",
    tagline: "Designs that convert",
    rating: 4.9,
    hourlyRate: 25,
    location: "London, UK",
    availability: "Part time",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    avatar: "/avatars/user4.png",
  },
  {
    id: "5",
    name: "Samuel Okafor",
    title: "Frontend Developer",
    tagline: "React & performance nerd",
    rating: 4.7,
    hourlyRate: 18,
    location: "Lagos, Nigeria",
    availability: "Full time",
    skills: ["React", "Next.js", "Tailwind", "TypeScript"],
    avatar: "/avatars/user3.png",
  },
  {
    id: "6",
    name: "Nina Petrova",
    title: "Mobile App Developer",
    tagline: "iOS & Android specialist",
    rating: 4.6,
    hourlyRate: 22,
    location: "Sofia, Bulgaria",
    availability: "Part time",
    skills: ["Flutter", "Dart", "Firebase", "REST API"],
    avatar: "/avatars/user1.png",
  },
  {
    id: "7",
    name: "Carlos Mendes",
    title: "Backend Engineer",
    tagline: "Scaling systems calmly",
    rating: 4.9,
    hourlyRate: 30,
    location: "São Paulo, Brazil",
    availability: "Full time",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    avatar: "/avatars/user5.png",
  },
  {
    id: "8",
    name: "Fatima Zahra",
    title: "Data Analyst",
    tagline: "Turning data into insight",
    rating: 4.7,
    hourlyRate: 19,
    location: "Casablanca, Morocco",
    availability: "Part time",
    skills: ["SQL", "Python", "Power BI", "Excel"],
    avatar: "/avatars/user1.png",
  },
  {
    id: "9",
    name: "Liam O'Connor",
    title: "DevOps Engineer",
    tagline: "Automation first",
    rating: 4.8,
    hourlyRate: 28,
    location: "Dublin, Ireland",
    availability: "Full time",
    skills: ["AWS", "Terraform", "CI/CD", "Linux"],
    avatar: "/avatars/user2.png",
  },
  {
    id: "10",
    name: "Hannah Lee",
    title: "Content Strategist",
    tagline: "Words that sell",
    rating: 4.6,
    hourlyRate: 15,
    location: "Seoul, South Korea",
    availability: "Part time",
    skills: ["SEO", "Copywriting", "Content Marketing"],
    avatar: "/avatars/user5.png",
  },

  // --- extra for pagination demo ---
  {
    id: "11",
    name: "Michael Rossi",
    title: "QA Engineer",
    tagline: "Breaks things professionally",
    rating: 4.5,
    hourlyRate: 16,
    location: "Milan, Italy",
    availability: "Full time",
    skills: ["Manual Testing", "Cypress", "Jest"],
    avatar: "/avatars/user3.png",
  },
  {
    id: "12",
    name: "Zara Ali",
    title: "AI Prompt Engineer",
    tagline: "Talking to machines",
    rating: 4.9,
    hourlyRate: 35,
    location: "Dubai, UAE",
    availability: "Part time",
    skills: ["LLMs", "Prompt Design", "Automation"],
    avatar: "/avatars/user1.png",
  },
];


export default function FreelancersTab() {
  return (
    <div className="mx-auto space-y-6">
      <SearchBar />
      <h2 className="text-xl font-semibold text-(--text-primary)">
        Top Freelancers
      </h2>

      <FreelancerList data={freelancers} pageSize={10} />
    </div>
  );
}
