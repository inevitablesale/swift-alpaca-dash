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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import { searchParams, enums, exampleResponse } from "../../data/apiSchema.ts";
import { personSchema, companySchema } from "../../data/pdlSchema.ts";

const DataSchema = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <header className="p-6 md:p-8 border-b">
        <h1 className="text-3xl font-bold tracking-tight">
          API Data Schema
        </h1>
        <p className="text-gray-600 mt-2">
          Data models for integrated APIs. This defines the search vectors and response structures.
        </p>
      </header>
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <Tabs defaultValue="linkedin-scraper">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="linkedin-scraper">LinkedIn Scraper (RapidAPI)</TabsTrigger>
            <TabsTrigger value="pdl">People Data Labs</TabsTrigger>
          </TabsList>
          <TabsContent value="linkedin-scraper" className="space-y-6 mt-6">
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
          </TabsContent>
          <TabsContent value="pdl" className="space-y-6 mt-6">
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DataSchema;