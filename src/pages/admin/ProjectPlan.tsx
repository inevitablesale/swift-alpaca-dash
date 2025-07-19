import MilestoneSection from "@/components/admin/MilestoneSection";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, LucideProps, Database, FileText, CheckSquare, Filter } from "lucide-react";

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
    { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['MVP'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
    { name: "Job Aggregation Engine", icon: GitMerge, milestones: ['MVP'] },
    { name: "AI Job Matching (JobGPT)", icon: Bot, milestones: ['MVP'] },
    { name: "Candidate Profile System", icon: Users, milestones: ['V1'] },
    { name: "Candidate Scoring AI (Talent Insights)", icon: BrainCircuit, milestones: ['V1'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestones: ['V1'] },
    { name: "People Data Labs (Enrichment)", icon: Database, milestones: ['V1.1'], cost: "$1,325.00/mo", requests: "5,000 Credits / month" },
    { name: "Recruiter Search (PeopleGPT)", icon: Filter, milestones: ['V1.1'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestones: ['V1.1'] },
    { name: "Email Notification System", icon: Mail, milestones: ['V1.1'] },
    { name: "Greenhouse", icon: Briefcase, milestones: ['V1.1'] },
    { name: "Lever", icon: Briefcase, milestones: ['V1.1'] },
    { name: "GitHub", icon: Github, milestones: ['V1.2'] },
    { name: "Ashby", icon: Briefcase, milestones: ['V1.2'] },
    { name: "Workable", icon: Briefcase, milestones: ['V1.2'] },
    { name: "Twitter / X", icon: Twitter, milestones: ['V1.3'] },
];

const milestones: Milestone[] = [
  {
    title: 'MVP: JobGPT - Candidate Acquisition',
    date: 'Target: July 22, 2025',
    successMetrics: [
      'Aggregate jobs from multiple sources to create a comprehensive job feed.',
      'Use AI (JobGPT) to match candidates with highly relevant job openings.',
      'Drive initial candidate sign-ups to the platform.',
    ],
  },
  {
    title: 'V1: Talent Insights - Candidate Scoring AI',
    date: 'Target: July 29, 2025',
    successMetrics: [
      'Build a robust candidate profile system for collecting user data.',
      'Develop the core AI to score and analyze candidate profiles, providing value back to the user.',
      'Establish the foundation of our proprietary candidate dataset.',
    ],
  },
  {
    title: 'V1.1: PeopleGPT - Recruiter Toolkit & Monetization',
    date: 'Target: August 5, 2025',
    successMetrics: [
      'Launch recruiter-facing search (PeopleGPT) to query our proprietary data.',
      'Introduce on-demand data enrichment (People Data Labs) as a paid feature.',
      'Onboard first 10 beta recruiters to test and validate the toolkit.',
      'Achieve first paying customers.',
    ],
  },
  {
    title: 'V1.2: Expansion & Integrations',
    date: 'Target: August 12, 2025',
    successMetrics: [
      'Incorporate developer-specific data sources like GitHub.',
      'Expand ATS integration offerings (Ashby, Workable).',
      'Double active recruiter base.',
    ],
  },
  {
    title: 'V1.3: Scaling & Market Penetration',
    date: 'Target: August 19, 2025',
    successMetrics: [
      'Reach 10,000+ active weekly candidates.',
      'Integrate social data sources (Twitter/X).',
      'Become a top-3 solution in at least one niche recruiting market.',
    ],
  },
];

const milestoneColors: ("purple" | "sky" | "emerald" | "amber" | "rose")[] = ["purple", "sky", "emerald", "amber", "rose"];

const getIntegrationsForMilestone = (milestoneTitle: string) => {
  const key = milestoneTitle.split(':')[0];
  return allIntegrations.filter(integration => integration.milestones.includes(key));
};

const ProjectPlan = () => {
  return (
    <div className="flex h-full flex-col">
      <header className="p-6 md:p-8 border-b bg-gray-50">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          Project Roadmap & Goals
        </h1>
        <p className="text-gray-600 mt-2">
          A strategic overview of development milestones, target dates, and success metrics.
        </p>
      </header>
      <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-100">
        {milestones.map((milestone, index) => (
          <MilestoneSection
            key={milestone.title}
            title={milestone.title}
            date={milestone.date}
            successMetrics={milestone.successMetrics}
            integrations={getIntegrationsForMilestone(milestone.title)}
            color={milestoneColors[index % milestoneColors.length]}
          />
        ))}
      </main>
    </div>
  );
};

export default ProjectPlan;