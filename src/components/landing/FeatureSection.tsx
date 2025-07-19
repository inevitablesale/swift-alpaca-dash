import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  demoText: string;
  reverse?: boolean;
}

const FeatureSection = ({ title, description, image, imageAlt, buttonText, demoText, reverse = false }: FeatureSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <div className={reverse ? 'md:col-start-2' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <div className="flex items-center gap-4">
              <Button size="lg">{buttonText}</Button>
              <Button variant="link" className="text-purple-600">
                {demoText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className={reverse ? 'md:col-start-1' : ''}>
            <img src={image} alt={imageAlt} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;