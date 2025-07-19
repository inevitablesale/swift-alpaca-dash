import IntegrationCard from "@/components/admin/IntegrationCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Linkedin, Github, Bot, Mail, BrainCircuit, Twitter } from "lucide-react";

const atsIntegrations = [
  { name: "Greenhouse", icon: Briefcase },
  { name: "Lever", icon: Briefcase },
  { name: "Ashby", icon: Briefcase },
  { name: "Workable", icon: Briefcase },
  { name: "SmartRecruiters", icon: Briefcase },
  { name: "Recruitee", icon: Briefcase },
  { name: "BreezyHR", icon: Briefcase },
];

const dataIntegrations = [
  { name: "LinkedIn Scraper (RapidAPI)", icon: Linkedin },
  { name: "GitHub", icon: Github },
  { name: "Twitter / X", icon: Twitter },
];

const automationIntegrations = [
  { name: "Phantombuster", icon: Bot },
];

const aiIntegrations = [
  { name: "OpenAI", icon: Bot },
  { name: "Mistral", icon: BrainCircuit },
];

const productivityIntegrations = [
  { name: "Google Workspace", icon: Mail },
  { name: "Microsoft 365", icon: Mail },
];

const Integrations = () => {
  return (
    <div className="p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          System Integrations
        </h1>
        <p className="text-gray-600 mt-2">
          Manage system-wide API keys and service connections.
        </p>
      </header>
      <main>
        <Accordion
          type="multiple"
          defaultValue={["ats", "data", "automation", "ai", "productivity"]}
          className="w-full space-y-4"
        >
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