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

const searchParams = [
  { name: "keywords", type: "string", required: true, description: "Search keywords for jobs", example: '"java developer"' },
  { name: "location", type: "string", required: false, description: "Valid country/city name or LinkedIn geoId", example: '"United States"' },
  { name: "page_number", type: "integer", required: false, description: "Page number for pagination", example: '1' },
  { name: "remote", type: "string", required: false, description: "See WorkplaceType enum", example: '"remote"' },
  { name: "sort", type: "string", required: false, description: "See SortType enum", example: '"relevant"' },
  { name: "date_posted", type: "string", required: false, description: "See TimeRange enum", example: '"week"' },
  { name: "experience", type: "string", required: false, description: "See ExperienceLevel enum", example: '"entry"' },
  { name: "job_type", type: "string", required: false, description: "See JobType enum", example: '"fulltime"' },
  { name: "easy_apply", type: "boolean", required: false, description: "Show only Easy Apply jobs", example: 'false' },
  { name: "under_10_applicants", type: "boolean", required: false, description: "Show only jobs with <10 applicants", example: 'false' },
];

const enums = [
  { title: "WorkplaceType", values: ["onsite", "remote", "hybrid"] },
  { title: "SortType", values: ["recent", "relevant"] },
  { title: "TimeRange", values: ["month", "week", "day"] },
  { title: "ExperienceLevel", values: ["internship", "entry", "associate", "mid_senior", "director", "executive"] },
  { title: "JobType", values: ["fulltime", "parttime", "contract", "internship", "other"] },
];

const exampleResponse = `{
  "metadata": {
    "total_jobs": 10,
    "count": 50
  },
  "jobs": [
    {
      "company": "Boston Consulting Group (BCG)",
      "company_url": "https://www.linkedin.com/company/boston-consulting-group/life",
      "job_title": "Software Engineering, Internship - X Delivery",
      "job_url": "https://www.linkedin.com/jobs/view/4049586471",
      "job_urn": "4049586471",
      "location": "Plymouth, Michigan, United States",
      "remote": "Hybrid",
      "posted_at": "4 days ago",
      "job_type": "Full-time",
      "is_easy_apply": false,
      "is_promoted": true
    }
  ]
}`;

const DataSchema = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <header className="p-6 md:p-8 border-b">
        <h1 className="text-3xl font-bold tracking-tight">
          API Data Schema
        </h1>
        <p className="text-gray-600 mt-2">
          Data model for the LinkedIn Scraper API (RapidAPI). This defines the search vectors and response structure for our jobs database.
        </p>
      </header>
      <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
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
      </main>
    </div>
  );
};

export default DataSchema;