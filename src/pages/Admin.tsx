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
  { name: "LinkedIn", icon: Linkedin },
  { name: "GitHub", icon: Github },
  { name: "Twitter / X", icon: Twitter },
];

const aiIntegrations = [
  { name: "OpenAI", icon: Bot },
  { name: "Mistral", icon: BrainCircuit },
];

const productivityIntegrations = [
  { name: "Google Workspace", icon: Mail },
  { name: "Microsoft 365", icon: Mail },
];

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Integrations Management
          </h1>
          <p className="text-gray-600 mt-2">
            Connect your data sources, AI services, and productivity tools.
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
    </div>
  );
};

export default Admin;