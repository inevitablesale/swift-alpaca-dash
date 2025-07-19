import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/FeatureSection";
import ProductTabs from "@/components/landing/ProductTabs";
import GlobalReach from "@/components/landing/GlobalReach";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <FeatureSection
          title={<>Find qualified talent using <span className="text-purple-600">natural language</span></>}
          description="Search on PeopleGPT is powered by PeopleGPT, the world's first people search engine built on natural language. Describe who you're searching for, no Booleans needed."
          image="https://placehold.co/800x600/f3e8ff/6b21a8?text=Natural+Language+Search"
          imageAlt="Natural language search feature"
          buttonText="Try for free"
          demoText="Request a demo"
        />
        <FeatureSection
          title={<>Review and evaluate profiles <span className="text-purple-600">faster with AI</span></>}
          description="Turn your candidate search into an AI-powered spreadsheet. Autopilot ranks, scores, and organizes profiles based on your criteria for best-fit talent without manual screening."
          image="https://placehold.co/800x600/f3e8ff/6b21a8?text=AI+Profile+Evaluation"
          imageAlt="AI profile evaluation feature"
          buttonText="Try for free"
          demoText="Request a demo"
          reverse={true}
        />
        <FeatureSection
          title={<>Engage with <span className="text-purple-600">AI-powered email sequences</span></>}
          description="Found the perfect fit? Increase response rates with smart outreach. Juicebox personalizes your email template while retaining your tone and voice."
          image="https://placehold.co/800x600/f3e8ff/6b21a8?text=AI+Email+Sequences"
          imageAlt="AI email sequences feature"
          buttonText="Try for free"
          demoText="Request a demo"
        />
        <ProductTabs />
        <GlobalReach />
      </main>
      <Footer />
    </div>
  );
};

export default Index;