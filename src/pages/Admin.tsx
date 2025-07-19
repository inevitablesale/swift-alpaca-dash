import IntegrationCard from "@/components/admin/IntegrationCard";
import { Briefcase } from "lucide-react";

const integrations = [
  { name: "Greenhouse", icon: Briefcase },
  { name: "Lever", icon: Briefcase },
  { name: "Ashby", icon: Briefcase },
  { name: "Workable", icon: Briefcase },
  { name: "SmartRecruiters", icon: Briefcase },
  { name: "Recruitee", icon: Briefcase },
  { name: "BreezyHR", icon: Briefcase },
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
            Connect your Applicant Tracking Systems (ATS) to start aggregating data.
          </p>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                Icon={integration.icon}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;