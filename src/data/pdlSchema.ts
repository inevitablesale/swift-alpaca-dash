export const personSchema = {
  fields: [
    { name: "full_name", type: "string", description: "Full name of the person." },
    { name: "linkedin_url", type: "string", description: "URL to the person's LinkedIn profile." },
    { name: "personal_emails", type: "string[]", description: "List of personal email addresses." },
    { name: "mobile_phone", type: "string", description: "Primary mobile phone number." },
    { name: "job_title", type: "string", description: "Current job title." },
    { name: "job_company_name", type: "string", description: "Current company name." },
    { name: "location_name", type: "string", description: "Current location." },
    { name: "skills", type: "string[]", description: "List of professional skills." },
    { name: "experience", type: "object[]", description: "Detailed work experience history." },
  ],
  exampleResponse: `{
  "id": "sLsMlpmWl5pjVonFTZLY8Q_0000",
  "full_name": "Chris Tabb",
  "linkedin_url": "linkedin.com/in/christabb",
  "personal_emails": [
    "christabb@gmail.com",
    "tabbc23@yahoo.com"
  ],
  "mobile_phone": "+19703333534",
  "job_title": "Digital Content Marketing Manager",
  "job_company_name": "Trueparallel",
  "location_name": "Knoxville, Tennessee, United States",
  "skills": [
    "Account Management",
    "Digital Marketing",
    "Business Strategy",
    "..."
  ],
  "experience": [
    {
      "company": {
        "name": "Trueparallel",
        "industry": "Marketing and Advertising"
      },
      "title": {
        "name": "Digital Content Marketing Manager"
      }
    }
  ]
}`,
};

export const companySchema = {
  fields: [
    { name: "name", type: "string", description: "Name of the company." },
    { name: "size", type: "string", description: "Range of employees (e.g., '51-200')." },
    { name: "employee_count", type: "number", description: "Exact number of employees." },
    { name: "founded", type: "number", description: "Year the company was founded." },
    { name: "industry", type: "string", description: "Primary industry of the company." },
    { name: "website", type: "string", description: "Company's official website." },
    { name: "summary", type: "string", description: "A brief summary of the company." },
    { name: "total_funding_raised", type: "number", description: "Total funding amount in USD." },
  ],
  exampleResponse: `{
  "id": "tnHcNHbCv8MKeLh92946LAkX6PKg",
  "name": "People Data Labs",
  "size": "51-200",
  "employee_count": 81,
  "founded": 2015,
  "inferred_revenue": "$50m-$100m",
  "industry": "Computer Software",
  "location": {
    "name": "San Francisco, California, United States",
    "street_address": "455 Market Street"
  },
  "website": "peopledatalabs.com",
  "summary": "People Data Labs builds B2B data for developers, engineers, and data scientists...",
  "total_funding_raised": 55250000
}`,
};