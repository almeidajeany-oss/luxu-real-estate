import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { featuredProperties } from '@/lib/mock-data';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Hero />
      <SearchBar />
      <section className="mt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-light text-foreground">Featured Properties</h2>
            <p className="text-muted-foreground mt-1 text-sm">Curated properties for the discerning eye.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>
    </main>
  );
}
