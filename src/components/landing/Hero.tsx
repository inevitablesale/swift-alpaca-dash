import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 cursor-pointer">
          <span className="mr-2 rounded-full bg-purple-200 px-2 py-0.5 text-xs font-semibold text-purple-800">New</span>
          Try Juicebox Agents, your 24/7 recruiting assistants
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          The AI Platform for Recruiting
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          PeopleGPT, the AI search engine that understands who you're looking for. Discover and unlock talent density at scale.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button size="lg">Try for free</Button>
          <Button size="lg" variant="outline">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Tour
          </Button>
        </div>
        <a href="#" className="text-sm text-gray-500 mt-2 inline-block">Close</a>
        <div className="mt-12">
          <img
            src="https://placehold.co/1200x785/f3e8ff/6b21a8?text=Juicebox+Platform"
            alt="Juicebox platform screenshot"
            className="mx-auto rounded-lg shadow-2xl"
            width={1200}
            height={785}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;