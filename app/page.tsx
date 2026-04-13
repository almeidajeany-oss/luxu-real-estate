import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Hero />
      <SearchBar />
    </main>
  );
}
