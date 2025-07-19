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
import { CheckCircle2, XCircle } from "lucide-react";
import { searchParams, enums, exampleResponse } from "../../data/apiSchema.ts";

const DataSchemaDialog = () => {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>API Data Schema: LinkedIn Scraper</DialogTitle>
        <DialogDescription>
          This defines the search vectors and response structure for our jobs database.
        </DialogDescription>
      </DialogHeader>
      <div className="max-h-[75vh] overflow-y-auto p-1 pr-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Search Jobs Endpoint</CardTitle>
            <CardDescription>Parameters for querying the jobs API.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-center">Required</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchParams.map((param) => (
                  <TableRow key={param.name}>
                    <TableCell><Badge variant="outline">{param.name}</Badge></TableCell>
                    <TableCell>{param.type}</TableCell>
                    <TableCell className="text-center">
                      {param.required ? <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" /> : <XCircle className="h-5 w-5 text-gray-400 inline-block" />}
                    </TableCell>
                    <TableCell>{param.description}</TableCell>
                    <TableCell><code>{param.example}</code></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enumerations (Enums)</CardTitle>
            <CardDescription>Pre-defined values for certain search parameters.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enums.map((enumItem) => (
              <Card key={enumItem.title} className="bg-gray-50/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{enumItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {enumItem.values.map((value) => (
                    <Badge key={value} variant="secondary">{value}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example Response Schema</CardTitle>
            <CardDescription>The structure of the data returned from a successful API call.</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
              <code>{exampleResponse}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  );
};

export default DataSchemaDialog;