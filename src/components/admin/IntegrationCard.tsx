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
  const [isConnected, setIsConnected] = React.useState(false);
  const [apiKey, setApiKey] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSave = () => {
    // In a real app, you'd send this to a secure backend.
    // For now, we'll simulate a successful connection.
    console.log(`Saving API Key for ${name}: ${apiKey}`);
    if (apiKey) {
      setIsConnected(true);
      showSuccess(`${name} connected successfully!`);
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
          Connect your {name} account to sync job postings.
        </CardDescription>
        <div className="flex items-center justify-between">
          <Badge variant={isConnected ? "default" : "secondary"}>
            {isConnected ? "Connected" : "Not Connected"}
          </Badge>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                {isConnected ? "Configure" : "Connect"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Configure {name} Integration</DialogTitle>
                <DialogDescription>
                  Enter your API key to connect your {name} account.
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
                    placeholder="Paste your API key here"
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
                  Save
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