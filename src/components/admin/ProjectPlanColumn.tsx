import IntegrationCard from "@/components/admin/IntegrationCard";
import { LucideProps } from "lucide-react";

// Define the type for a single integration
interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  milestones: string[];
  cost?: string;
  requests?: string;
}

interface ProjectPlanColumnProps {
  title: string;
  integrations: Integration[];
}

const ProjectPlanColumn = ({ title, integrations }: ProjectPlanColumnProps) => {
  return (
    <div className="flex h-full w-80 flex-shrink-0 flex-col rounded-lg bg-gray-100/80 shadow-sm">
      <div className="p-4 border-b bg-white rounded-t-lg">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-gray-500">{integrations.length} item(s)</p>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {integrations.length > 0 ? (
          integrations.map((integration, index) => (
            <IntegrationCard
              key={`${integration.name}-${index}`}
              name={integration.name}
              Icon={integration.icon}
              milestones={integration.milestones}
              cost={integration.cost}
              requests={integration.requests}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-500">
            No items for this milestone.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPlanColumn;