import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProductTabs = () => {
  const tabs = [
    {
      value: "search",
      trigger: "Search (PeopleGPT)",
      title: "Discover talent through AI-powered search",
      description: "Elevate your recruitment strategy with PeopleGPT, the AI-powered search platform that transforms how you find talent. Streamline your search with semantic natural language queries – no need for complicated boolean strings.",
      image: "https://placehold.co/800x600/f3e8ff/6b21a8?text=AI-powered+Search",
      imageAlt: "AI-powered search feature"
    },
    {
      value: "insights",
      trigger: "Talent Insights",
      title: "Uncover new data by leveraging Talent Insights",
      description: "Analyze comprehensive data directly tied to your searches and uncover valuable insights instantly. Benefit from an integrated overview of your talent pool and drive your search forward with data you can act on.",
      image: "https://placehold.co/800x600/f3e8ff/6b21a8?text=Talent+Insights",
      imageAlt: "Talent insights feature"
    },
    {
      value: "outreach",
      trigger: "Email Outreach",
      title: "Convert candidates with AI email campaigns",
      description: "Maximize candidate engagement with AI-powered email campaigns that reflect your unique voice. Personalize messaging at scale using templates and AI commands, ensuring a 40% increase in response rates.",
      image: "https://placehold.co/800x600/f3e8ff/6b21a8?text=Email+Outreach",
      imageAlt: "Email outreach feature"
    },
    {
      value: "agents",
      trigger: "Juicebox Agents",
      title: "Add AI Agents to your recruiting team",
      description: "From sourcing to outreach, your Agents automate the manual work. Just configure your ideal candidate once and let them find, filter, and engage dozens of profiles daily.",
      image: "https://placehold.co/800x600/f3e8ff/6b21a8?text=Juicebox+Agents",
      imageAlt: "Juicebox agents feature"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            {tabs.map(tab => <TabsTrigger key={tab.value} value={tab.value}>{tab.trigger}</TabsTrigger>)}
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{tab.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{tab.description}</p>
                  <div className="flex items-center gap-4">
                    <Button size="lg">Try for free</Button>
                    <Button variant="link" className="text-purple-600">
                      Request a demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <img src={tab.image} alt={tab.imageAlt} className="rounded-lg shadow-xl" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;