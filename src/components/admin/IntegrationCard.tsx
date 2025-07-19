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
  tags?: string[];
  cost?: string;
  requests?: string;
}

const IntegrationCard = ({ name, Icon, tags = [], cost, requests }: IntegrationCardProps) => {
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
        <div className={cn("flex gap-2 flex-wrap", (cost || requests) && "mt-4")}>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;