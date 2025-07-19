import MilestoneSection from "@/components/admin/MilestoneSection";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, LucideProps, Database, Filter, Send, Search } from "lucide-react";

interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  milestone: 'MVP' | 'V1' | 'V1.1' | 'V1.2' | 'V1.3';
  tags: string[];
  cost?: string;
  requests?: string;
}

interface Milestone {
  title: string;
  date: string;
  successMetrics: string[];
}

const allIntegrations: Integration[] = [
    { name: "Job Aggregator Engine", icon: Search, milestone: 'MVP', tags: ['Job Sourcing', 'Multi-Platform'] },
    { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestone: 'MVP', tags: ['Candidate Sourcing'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
    { name: "Phantombuster", icon: Send, milestone: 'MVP', tags: ['Candidate Outreach', 'Automation'], cost: "$69.00/mo", requests: "20h Execution Time / Mo" },
    { name: "Candidate Profile System", icon: Users, milestone: 'V1', tags: ['User Data'] },
    { name: "Candidate Scoring AI (Talent Insights)", icon: BrainCircuit, milestone: 'V1', tags: ['Scoring AI', 'Ranking Engine'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestone: 'V1', tags: ['Backend API'] },
    { name: "People Data Labs", icon: Database, milestone: 'V1.1', tags: ['Data Enrichment'], cost: "$0.26", requests: "per contact record" },
    { name: "Recruiter Search (PeopleGPT)", icon: Filter, milestone: 'V1.1', tags: ['Recruiter Tool', 'Powered by LinkedIn Scraper'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestone: 'V1.1', tags: ['Monetization'] },
    { name: "Email Notification System", icon: Mail, milestone: 'V1.1', tags: ['Notifications'] },
    { name: "Greenhouse", icon: Briefcase, milestone: 'V1.1', tags: ['ATS Integration'] },
    { name: "Lever", icon: Briefcase, milestone: 'V1.1', tags: ['ATS Integration'] },
    { name: "GitHub", icon: Github, milestone: 'V1.2', tags: ['Developer Sourcing'] },
    { name: "Ashby", icon: Briefcase, milestone: 'V1.2', tags: ['ATS Integration'] },
    { name: "Workable", icon: Briefcase, milestone: 'V1.2', tags: ['ATS Integration'] },
    { name: "Twitter / X", icon: Twitter, milestone: 'V1.3', tags: ['Social Sourcing'] },
];

const milestones: Milestone[] = [
  {
    title: 'MVP: Core Job Board & Candidate Outreach Pipeline',
    date: 'Target: July 22, 2025',
    successMetrics: [
      'Aggregate job listings from LinkedIn, Upwork, Indeed, and ZipRecruiter.',
      'Source potential candidates for aggregated jobs using the LinkedIn scraper.',
      'Initiate automated outreach to sourced candidates via Phantombuster.',
    ],
  },
  {
    title: 'V1: Talent Insights - Candidate Scoring AI',
    date: 'Target: July 29, 2025',
    successMetrics: [
      'Build a robust candidate profile system for collecting user data.',
      'Develop the core AI to rank and score candidate profiles, providing value back to the user.',
      'Establish the foundation of our proprietary candidate dataset.',
    ],
  },
  {
    title: 'V1.1: PeopleGPT - Recruiter Toolkit & Monetization',
    date: 'Target: August 5, 2025',
    successMetrics: [
      'Launch recruiter-facing search (PeopleGPT) to query for candidates directly using the LinkedIn Scraper API.',
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
  return allIntegrations.filter(integration => integration.milestone === key);
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