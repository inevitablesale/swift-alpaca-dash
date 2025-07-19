import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";
import { LucideProps } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  Icon: React.ComponentType<LucideProps>;
}

const IntegrationCard = ({ name, Icon }: IntegrationCardProps) => {
  const [isActive, setIsActive] = React.useState(Math.random() > 0.3); // Simulate active status
  const [apiKey, setApiKey] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSave = () => {
    console.log(`Updating system-wide API Key for ${name}: ${apiKey}`);
    if (apiKey) {
      setIsActive(true);
      showSuccess(`${name} API key updated successfully!`);
    }
    setIsDialogOpen(false);
    setApiKey("");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <Icon className="h-6 w-6 text-gray-400" />
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          Manage the system-wide {name} integration.
        </CardDescription>
        <div className="flex items-center justify-between">
          <Badge variant={isActive ? "default" : "destructive"}>
            {isActive ? "Active" : "Inactive"}
          </Badge>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Manage {name} API Key</DialogTitle>
                <DialogDescription>
                  Update the system-wide API key for {name}. This will affect all users.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="api-key" className="text-right">
                    API Key
                  </Label>
                  <Input
                    id="api-key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="col-span-3"
                    placeholder="Enter new system-wide API key"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="button" onClick={handleSave}>
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;