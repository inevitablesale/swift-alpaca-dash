import MilestoneSection from "@/components/admin/MilestoneSection";
import { Linkedin, Bot, Users, FileText, CheckSquare, Filter, LucideProps } from "lucide-react";

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
    { name: "User Registration & Social Auth", icon: Users, milestones: ['MVP'] },
    { name: "Basic Job Application Tracking", icon: CheckSquare, milestones: ['MVP'] },
    { name: "Advanced Job Filtering", icon: Filter, milestones: ['MVP'] },
    { name: "AI Cover Letter Generation", icon: FileText, milestones: ['MVP'] },
    { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['MVP'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
    { name: "AI Job Matching (OpenAI)", icon: Bot, milestones: ['MVP'] },
];

const milestones: Milestone[] = [
  {
    title: 'MVP',
    date: 'Target: July 22, 2025',
    successMetrics: [
      'Launch a functional job matching platform for candidates.',
      'Achieve 1,000+ active weekly users.',
      'Aggregate over 1 million job listings.',
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