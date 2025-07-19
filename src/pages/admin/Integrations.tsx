import IntegrationCard from "@/components/admin/IntegrationCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter, Users, GitMerge, CreditCard, Shield } from "lucide-react";

const coreArchitecture = [
    { name: "Multi-Tenant Structure", icon: Users, milestones: ['MVP'] },
    { name: "Security & Scalability Foundations", icon: Shield, milestones: ['MVP', 'V1', 'V1.1'] },
    { name: "API Orchestration Layer", icon: GitMerge, milestones: ['V1'] },
    { name: "Usage Tracking & Credit System", icon: CreditCard, milestones: ['V1'] },
];

const atsIntegrations = [
  { name: "Greenhouse", icon: Briefcase, milestones: ['V1'] },
  { name: "Lever", icon: Briefcase, milestones: ['V1'] },
  { name: "Ashby", icon: Briefcase, milestones: ['V1.1'] },
  { name: "Workable", icon: Briefcase, milestones: ['V1.1'] },
  { name: "SmartRecruiters", icon: Briefcase, milestones: ['V1.1'] },
  { name: "Recruitee", icon: Briefcase, milestones: ['V1.1'] },
  { name: "BreezyHR", icon: Briefcase, milestones: ['V1.1'] },
];

const dataIntegrations = [
  { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin, milestones: ['MVP'], cost: "$40.00/mo", requests: "15,000 Requests / Month" },
  { name: "GitHub", icon: Github, milestones: ['V1.1'] },
  { name: "Twitter / X", icon: Twitter, milestones: ['V1.1'] },
];

const automationIntegrations = [
  { name: "Phantombuster", icon: Bot, milestones: ['V1'] },
];

const aiIntegrations = [
  { name: "OpenAI", icon: Bot, milestones: ['MVP'] },
  { name: "Mistral", icon: BrainCircuit, milestones: ['V1'] },
];

const productivityIntegrations = [
  { name: "Google Workspace", icon: Mail, milestones: ['V1'] },
  { name: "Microsoft 365", icon: Mail, milestones: ['V1.1'] },
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
                    cost={integration.cost}
                    requests={integration.requests}
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