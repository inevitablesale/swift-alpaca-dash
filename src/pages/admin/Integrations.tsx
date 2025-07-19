import IntegrationCard from "@/components/admin/IntegrationCard";
import ProjectPlanColumn from "@/components/admin/ProjectPlanColumn";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, Shield, LucideProps } from "lucide-react";

interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  milestones: string[];
  cost?: string;
  requests?: string;
}

const coreArchitecture: Integration[] = [
    { name: "Multi-Tenant Structure", icon: Users, milestones: ['MVP'] },
    { name: "Security & Scalability Foundations", icon: Shield, milestones: ['MVP', 'V1', 'V1.1'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestones: ['V1'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestones: ['V1'] },
];

const atsIntegrations: Integration[] = [
  { name: "Greenhouse", icon: Briefcase, milestones: ['V1'] },
  { name: "Lever", icon: Briefcase, milestones: ['V1'] },
  { name: "Ashby", icon: Briefcase, milestones: ['V1.1'] },
  { name: "Workable", icon: Briefcase, milestones: ['V1.1'] },
  { name: "SmartRecruiters", icon: Briefcase, milestones: ['V1.1'] },
  { name: "Recruitee", icon: Briefcase, milestones: ['V1.1'] },
  { name: "BreezyHR", icon: Briefcase, milestones: ['V1.1'] },
];

const dataIntegrations: Integration[] = [
  { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['MVP'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
  { name: "GitHub", icon: Github, milestones: ['V1.1'] },
  { name: "Twitter / X", icon: Twitter, milestones: ['V1.1'] },
];

const automationIntegrations: Integration[] = [
  { name: "Phantombuster", icon: Bot, milestones: ['V1'] },
];

const aiIntegrations: Integration[] = [
  { name: "OpenAI", icon: Bot, milestones: ['MVP'] },
  { name: "Mistral", icon: BrainCircuit, milestones: ['V1'] },
];

const productivityIntegrations: Integration[] = [
  { name: "Google Workspace", icon: Mail, milestones: ['V1'] },
  { name: "Microsoft 365", icon: Mail, milestones: ['V1.1'] },
];

const allIntegrations = [
  ...coreArchitecture,
  ...atsIntegrations,
  ...dataIntegrations,
  ...automationIntegrations,
  ...aiIntegrations,
  ...productivityIntegrations,
];

const milestoneOrder = ['MVP', 'V1', 'V1.1'];

const integrationsByMilestone = milestoneOrder.reduce((acc, milestone) => {
  acc[milestone] = [];
  return acc;
}, {} as Record<string, Integration[]>);

allIntegrations.forEach(integration => {
  (integration.milestones || []).forEach(milestone => {
    if (integrationsByMilestone[milestone]) {
      integrationsByMilestone[milestone].push(integration);
    }
  });
});


const Integrations = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <header className="p-6 md:p-8 border-b">
        <h1 className="text-3xl font-bold tracking-tight">
          Project Plan & Integrations
        </h1>
        <p className="text-gray-600 mt-2">
          A visual roadmap of core architecture and service integrations.
        </p>
      </header>
      <main className="flex-1 overflow-x-auto">
        <div className="inline-flex h-full space-x-6 p-6 md:p-8">
          {milestoneOrder.map(milestone => (
            <ProjectPlanColumn
              key={milestone}
              title={milestone}
              integrations={integrationsByMilestone[milestone]}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Integrations;