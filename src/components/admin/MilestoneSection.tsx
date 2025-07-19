import IntegrationCard from "@/components/admin/IntegrationCard";
import { LucideProps, Target, Calendar } from "lucide-react";

interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  milestones: string[];
  cost?: string;
  requests?: string;
}

interface MilestoneSectionProps {
  title: string;
  date: string;
  successMetrics: string[];
  integrations: Integration[];
}

const MilestoneSection = ({ title, date, successMetrics, integrations }: MilestoneSectionProps) => {
  return (
    <section className="mb-12 bg-gray-50/50 p-6 rounded-lg border">
      <div className="mb-6 pb-4 border-b">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h3 className="text-lg font-semibold flex items-center mb-3 text-primary">
            <Target className="h-5 w-5 mr-2" />
            Success Metrics
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            {successMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-8">
          {integrations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <IntegrationCard
                  key={`${integration.name}-${index}`}
                  name={integration.name}
                  Icon={integration.icon}
                  milestones={integration.milestones}
                  cost={integration.cost}
                  requests={integration.requests}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              No new features for this milestone.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;