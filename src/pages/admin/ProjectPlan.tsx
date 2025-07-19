import MilestoneSection from "@/components/admin/MilestoneSection";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, LucideProps, Database, FileText, CheckSquare } from "lucide-react";

interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  milestones: string[];
  cost?: string;
  requests?: string;
}

interface Milestone {
  title: string;
  date: string;
  successMetrics: string[];
}

const allIntegrations: Integration[] = [
    { name: "User Registration & Profiles", icon: Users, milestones: ['MVP'] },
    { name: "Basic Job Application Tracking", icon: CheckSquare, milestones: ['MVP'] },
    { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['MVP'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
    { name: "AI Job Matching (OpenAI)", icon: Bot, milestones: ['MVP'] },
    { name: "Basic Job Posting", icon: FileText, milestones: ['V1'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestones: ['V1'] },
    { name: "People Data Labs (Companies & People)", icon: Database, milestones: ['V1'], cost: "$1,325.00/mo", requests: "5,000 Credits / month" },
    { name: "Phantombuster", icon: Bot, milestones: ['V1'], cost: "$56/mo", requests: "20h/month execution time" },
    { name: "Company Profile System", icon: Briefcase, milestones: ['V1.1'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestones: ['V1.1'] },
    { name: "Mistral", icon: BrainCircuit, milestones: ['V1.1'] },
    { name: "Greenhouse", icon: Briefcase, milestones: ['V1.1'] },
    { name: "Lever", icon: Briefcase, milestones: ['V1.1'] },
    { name: "Google Workspace", icon: Mail, milestones: ['V1.1'] },
    { name: "GitHub", icon: Github, milestones: ['V1.2'] },
    { name: "Ashby", icon: Briefcase, milestones: ['V1.2'] },
    { name: "Workable", icon: Briefcase, milestones: ['V1.2'] },
    { name: "Microsoft 365", icon: Mail, milestones: ['V1.2'] },
    { name: "Twitter / X", icon: Twitter, milestones: ['V1.3'] },
    { name: "SmartRecruiters", icon: Briefcase, milestones: ['V1.3'] },
    { name: "Recruitee", icon: Briefcase, milestones: ['V1.3'] },
    { name: "BreezyHR", icon: Briefcase, milestones: ['V1.3'] },
];

const milestones: Milestone[] = [
  {
    title: 'MVP',
    date: 'Target: End of Q3 2024',
    successMetrics: [
      'Launch a functional job matching platform for candidates.',
      'Achieve 1,000+ active weekly users.',
      'Aggregate over 1 million job listings.',
    ],
  },
  {
    title: 'V1',
    date: 'Target: Q4 2024',
    successMetrics: [
      'Onboard first 100 recruiters.',
      'Develop basic recruiter-facing features.',
      'Establish initial revenue stream.',
    ],
  },
  {
    title: 'V1.1',
    date: 'Target: Q1 2025',
    successMetrics: [
      'Achieve $10k MRR.',
      'Integrate with major ATS & productivity suites.',
      'Expand AI capabilities with alternative models.',
    ],
  },
  {
    title: 'V1.2',
    date: 'Target: Q2 2025',
    successMetrics: [
      'Double active recruiter base to 200+.',
      'Incorporate developer-specific data sources (GitHub).',
      'Expand ATS integration offerings.',
    ],
  },
  {
    title: 'V1.3',
    date: 'Target: Q3 2025',
    successMetrics: [
      'Reach 10,000+ active weekly candidates.',
      'Integrate social data sources (Twitter/X).',
      'Become a top-3 solution in at least one niche recruiting market.',
    ],
  },
];

const getIntegrationsForMilestone = (milestoneTitle: string) => {
  return allIntegrations.filter(integration => integration.milestones.includes(milestoneTitle));
};

const ProjectPlan = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <header className="p-6 md:p-8 border-b">
        <h1 className="text-3xl font-bold tracking-tight">
          Project Roadmap & Goals
        </h1>
        <p className="text-gray-600 mt-2">
          A strategic overview of our development milestones, target dates, and success metrics.
        </p>
      </header>
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        {milestones.map(milestone => (
          <MilestoneSection
            key={milestone.title}
            title={milestone.title}
            date={milestone.date}
            successMetrics={milestone.successMetrics}
            integrations={getIntegrationsForMilestone(milestone.title)}
          />
        ))}
      </main>
    </div>
  );
};

export default ProjectPlan;