'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { featuredProperties } from '@/lib/mock-data';

export default function Home() {
  const [filteredProperties, setFilteredProperties] = React.useState(featuredProperties);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filterProperties = React.useCallback((query: string, category: string) => {
    let filtered = featuredProperties;

    // Filtrar por búsqueda (título, ubicación)
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(lowerQuery) ||
          property.location.toLowerCase().includes(lowerQuery) ||
          property.tag.toLowerCase().includes(lowerQuery)
      );
    }

    // Filtrar por categoría
    if (category !== 'All') {
      const categoryMap: Record<string, string> = {
        'House': 'FOR SALE',
        'Apartment': 'New Arrival',
        'Villa': 'Exclusive',
        'Penthouse': 'New Arrival',
      };
      const categoryTag = categoryMap[category] || category;
      filtered = filtered.filter(
        (property) =>
          property.tag.toLowerCase().includes(categoryTag.toLowerCase()) ||
          property.title.toLowerCase().includes(category.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProperties(query, activeCategory);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterProperties(searchQuery, category);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Hero onSearch={handleSearch} />
      <SearchBar onCategoryChange={handleCategoryChange} />
      <section className="mt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-light text-foreground">Featured Properties</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {searchQuery || activeCategory !== 'All'
                ? `Resultados de búsqueda${searchQuery ? ` para "${searchQuery}"` : ''}${activeCategory !== 'All' ? ` - ${activeCategory}` : ''}`
                : 'Curated properties for the discerning eye.'}
            </p>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No se encontraron propiedades</h3>
            <p className="text-muted-foreground max-w-md">
              {searchQuery
                ? `No encontramos propiedades que coincidan con "${searchQuery}". Intenta con otros términos de búsqueda.`
                : `No hay propiedades disponibles en la categoría "${activeCategory}".\nIntenta cambiar los filtros.`}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
