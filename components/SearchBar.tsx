import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'House', 'Apartment', 'Villa', 'Penthouse'];

export const SearchBar = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          className={cn(
            'whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm',
            activeCategory === category
              ? 'bg-nordic-dark text-white hover:bg-nordic-dark/90 shadow-nordic-dark/10'
              : 'bg-background border-border text-nordic-muted hover:text-nordic-dark hover:border-primary/50 hover:bg-primary/5'
          )}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
      <Separator orientation="vertical" className="h-6 bg-border mx-2" />
      <Button
        variant="ghost"
        className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-nordic-dark font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" /> Filters
      </Button>
    </div>
  );
};
