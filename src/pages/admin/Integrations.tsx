import IntegrationCard from "@/components/admin/IntegrationCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, Shield } from "lucide-react";

const coreArchitecture = [
    { name: "Multi-Tenant Structure", icon: Users, milestones: ['Now'] },
    { name: "Security & Scalability Foundations", icon: Shield, milestones: ['Now', 'Next', 'Later'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestones: ['Next'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestones: ['Next'] },
];

const atsIntegrations = [
  { name: "Greenhouse", icon: Briefcase, milestones: ['Next'] },
  { name: "Lever", icon: Briefcase, milestones: ['Next'] },
  { name: "Ashby", icon: Briefcase, milestones: ['Later'] },
  { name: "Workable", icon: Briefcase, milestones: ['Later'] },
  { name: "SmartRecruiters", icon: Briefcase, milestones: ['Later'] },
  { name: "Recruitee", icon: Briefcase, milestones: ['Later'] },
  { name: "BreezyHR", icon: Briefcase, milestones: ['Later'] },
];

const dataIntegrations = [
  { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['Next'] },
  { name: "GitHub", icon: Github, milestones: ['Later'] },
  { name: "Twitter / X", icon: Twitter, milestones: ['Later'] },
];

const automationIntegrations = [
  { name: "Phantombuster", icon: Bot, milestones: ['Next'] },
];

const aiIntegrations = [
  { name: "OpenAI", icon: Bot, milestones: ['Now'] },
  { name: "Mistral", icon: BrainCircuit, milestones: ['Next'] },
];

const productivityIntegrations = [
  { name: "Google Workspace", icon: Mail, milestones: ['Next'] },
  { name: "Microsoft 365", icon: Mail, milestones: ['Later'] },
];

const Integrations = () => {
  return (
    <div className="p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Project Plan & Integrations
        </h1>
        <p className="text-gray-600 mt-2">
          A visual roadmap of core architecture and service integrations.
        </p>
      </header>
      <main>
        <Accordion
          type="multiple"
          defaultValue={["architecture", "ats", "data", "automation", "ai", "productivity"]}
          className="w-full space-y-4"
        >
          <AccordionItem value="architecture">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              Core Platform Architecture
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {coreArchitecture.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ats">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              Applicant Tracking Systems (ATS)
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {atsIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              Data & Social
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {dataIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="automation">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              Automation & Outreach
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {automationIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ai">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              AI Services
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {aiIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="productivity">
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              Productivity
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {productivityIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    name={integration.name}
                    Icon={integration.icon}
                    milestones={integration.milestones}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
};

export default Integrations;