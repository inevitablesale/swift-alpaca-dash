export const searchParams = [
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

export const enums = [
  { title: "WorkplaceType", values: ["onsite", "remote", "hybrid"] },
  { title: "SortType", values: ["recent", "relevant"] },
  { title: "TimeRange", values: ["month", "week", "day"] },
  { title: "ExperienceLevel", values: ["internship", "entry", "associate", "mid_senior", "director", "executive"] },
  { title: "JobType", values: ["fulltime", "parttime", "contract", "internship", "other"] },
];

export const exampleResponse = `{
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