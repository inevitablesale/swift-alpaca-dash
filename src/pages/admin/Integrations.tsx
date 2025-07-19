import IntegrationCard from "@/components/admin/IntegrationCard";
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
      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Applicant Tracking Systems (ATS)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atsIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data & Social</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Automation & Outreach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Productivity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Integrations;