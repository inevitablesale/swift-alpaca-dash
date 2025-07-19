import IntegrationCard from "@/components/admin/IntegrationCard";
import { LucideProps, Target, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  icon: React.ComponentType<LucideProps>;
  tags: string[];
  cost?: string;
  requests?: string;
}

const colorClasses = {
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-50",
    text: "text-purple-800",
    icon: "text-purple-600",
  },
  sky: {
    border: "border-sky-500",
    bg: "bg-sky-50",
    text: "text-sky-800",
    icon: "text-sky-600",
  },
  emerald: {
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    icon: "text-emerald-600",
  },
  amber: {
    border: "border-amber-500",
    bg: "bg-amber-50",
    text: "text-amber-800",
    icon: "text-amber-600",
  },
  rose: {
    border: "border-rose-500",
    bg: "bg-rose-50",
    text: "text-rose-800",
    icon: "text-rose-600",
  },
};

type Color = keyof typeof colorClasses;

interface MilestoneSectionProps {
  title: string;
  date: string;
  successMetrics: string[];
  integrations: Integration[];
  color: Color;
}

const MilestoneSection = ({ title, date, successMetrics, integrations, color = 'purple' }: MilestoneSectionProps) => {
  const colors = colorClasses[color] || colorClasses.purple;

  return (
    <section className={cn("mb-12 p-6 rounded-lg border-l-4 transition-all shadow-sm", colors.border, colors.bg)}>
      <div className="mb-6 pb-4 border-b">
        <h2 className={cn("text-2xl font-bold tracking-tight", colors.text)}>{title}</h2>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h3 className={cn("text-lg font-semibold flex items-center mb-3", colors.text)}>
            <Target className="h-5 w-5 mr-2" />
            Success Metrics
          </h3>
          <ul className="space-y-2">
            {successMetrics.map((metric, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className={cn("h-5 w-5 mr-3 mt-1 flex-shrink-0", colors.icon)} />
                <span className="text-gray-700">{metric}</span>
              </li>
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
                  tags={integration.tags}
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