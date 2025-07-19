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
}

const getMilestoneVariant = (milestone: string): "default" | "secondary" | "outline" | "destructive" => {
  switch (milestone.toLowerCase()) {
    case 'now':
      return 'default';
    case 'next':
      return 'secondary';
    case 'later':
      return 'outline';
    default:
      return 'outline';
  }
};

const IntegrationCard = ({ name, Icon, milestones = [] }: IntegrationCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <Icon className="h-6 w-6 text-gray-400" />
      </CardHeader>
      <CardContent className="flex-grow flex items-end">
        <div className="flex gap-2">
          {milestones.length > 0 ? (
            milestones.map((milestone) => (
              <Badge key={milestone} variant={getMilestoneVariant(milestone)}>
                {milestone}
              </Badge>
            ))
          ) : (
            <Badge variant="outline">Later</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;