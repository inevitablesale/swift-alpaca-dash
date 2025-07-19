import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideProps } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  Icon: React.ComponentType<LucideProps>;
}

const IntegrationCard = ({ name, Icon }: IntegrationCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <Icon className="h-6 w-6 text-gray-400" />
      </CardHeader>
      <CardContent className="flex-grow flex items-end">
        <Badge variant="outline">Coming Soon</Badge>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;