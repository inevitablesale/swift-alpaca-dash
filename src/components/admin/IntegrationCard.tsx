import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
  name: string;
  Icon: React.ComponentType<LucideProps>;
  milestones?: string[];
  cost?: string;
  requests?: string;
}

const getMilestoneVariant = (milestone: string): "default" | "secondary" | "outline" | "destructive" => {
  const lowerMilestone = milestone.toLowerCase();
  if (lowerMilestone === 'mvp') {
    return 'default';
  }
  if (lowerMilestone === 'v1') {
    return 'secondary';
  }
  // For point releases like V1.1, V1.2
  if (lowerMilestone.startsWith('v1.')) {
    return 'outline';
  }
  // Fallback for anything else
  return 'outline';
};

const IntegrationCard = ({ name, Icon, milestones = [], cost, requests }: IntegrationCardProps) => {
  const [costValue, costPeriod] = cost?.split('/') || [];

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <Icon className="h-6 w-6 text-gray-400" />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          {costValue && (
            <p className="text-2xl font-bold">
              {costValue}
              {costPeriod && <span className="text-sm font-normal text-gray-500">/{costPeriod}</span>}
            </p>
          )}
          {requests && (
            <p className="text-xs text-gray-500">{requests}</p>
          )}
        </div>
        <div className={cn("flex gap-2", (cost || requests) && "mt-4")}>
          {milestones.map((milestone) => (
            <Badge key={milestone} variant={getMilestoneVariant(milestone)}>
              {milestone}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;