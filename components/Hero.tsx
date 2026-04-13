import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
          Find your{' '}
          <span className="relative inline-block">
            <span className="relative z-10 font-medium">sanctuary</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1 z-0"></span>
          </span>
          .
        </h1>
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-muted-foreground w-6 h-6 group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            className="block w-full pl-12 pr-4 py-8 rounded-xl border-none bg-background text-foreground shadow-lg placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-primary transition-all text-lg"
            placeholder="Search by city, neighborhood, or address..."
            type="text"
          />
          <Button className="absolute inset-y-2 right-2 px-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors shadow-lg shadow-primary/20">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
