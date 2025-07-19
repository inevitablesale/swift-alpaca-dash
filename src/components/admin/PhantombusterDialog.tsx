import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

const PhantombusterDialog = () => {
  const workflowSteps = [
    "Send connection requests to new profiles",
    "Send up to 3 follow-up messages",
    "Track your results",
  ];

  return (
    <DialogContent className="max-w-lg">
      <DialogHeader>
        <DialogTitle>Phantombuster: Automated Outreach Workflow</DialogTitle>
        <DialogDescription>
          This outlines the automated LinkedIn outreach sequence powered by Phantombuster.
        </DialogDescription>
      </DialogHeader>
      <div className="p-1 pr-4 space-y-4">
        <ul className="space-y-3">
          {workflowSteps.map((step, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-800">{step}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 pt-4 border-t">
          This workflow helps automate top-of-funnel engagement, saving time and increasing outreach efficiency.
        </p>
      </div>
    </DialogContent>
  );
};

export default PhantombusterDialog;