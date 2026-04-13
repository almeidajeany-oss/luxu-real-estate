import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Bed, Bath, Move } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tag?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  image,
  tag,
}) => {
  return (
    <Card className="group relative rounded-xl overflow-hidden border-none bg-background shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tag && (
          <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {tag}
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4" /> {location}
            </p>
          </div>
          <span className="text-xl font-semibold text-primary">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 border-t border-border mt-4">
        <div className="flex items-center gap-6 mt-6 w-full">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Bed className="w-4 h-4 text-primary/80" /> {beds} Beds
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Bath className="w-4 h-4 text-primary/80" /> {baths} Baths
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Move className="w-4 h-4 text-primary/80" /> {sqft} m²
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
