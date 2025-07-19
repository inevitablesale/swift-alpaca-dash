import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { personSchema, companySchema } from "../../data/pdlSchema";

const PdlSchemaDialog = () => {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>API Data Schema: People Data Labs</DialogTitle>
        <DialogDescription>
          This defines the response structure for Person and Company data.
        </DialogDescription>
      </DialogHeader>
      <div className="max-h-[75vh] overflow-y-auto p-1 pr-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Person Schema</CardTitle>
            <CardDescription>Key fields returned for an individual person.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personSchema.fields.map((param) => (
                  <TableRow key={param.name}>
                    <TableCell><Badge variant="outline">{param.name}</Badge></TableCell>
                    <TableCell>{param.type}</TableCell>
                    <TableCell>{param.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Schema</CardTitle>
            <CardDescription>Key fields returned for a company.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companySchema.fields.map((param) => (
                  <TableRow key={param.name}>
                    <TableCell><Badge variant="outline">{param.name}</Badge></TableCell>
                    <TableCell>{param.type}</TableCell>
                    <TableCell>{param.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  );
};

export default PdlSchemaDialog;