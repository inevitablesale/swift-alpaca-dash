import { Button } from "@/components/ui/button";

const GlobalReach = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Global reach: 800 million profiles
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          With close to a billion records across the globe, Juicebox helps you fulfill any search, no matter how specific. And once you've found the perfect fit, Juicebox provides you with the contact information to get in touch right away.
        </p>
        <div className="relative h-64 mb-12">
          <img src="https://placehold.co/1200x400/f3e8ff/6b21a8?text=Global+Reach" alt="Global reach visualization" className="w-full h-full object-contain" />
        </div>
        <Button size="lg">Try for free</Button>
      </div>
    </section>
  );
};

export default GlobalReach;