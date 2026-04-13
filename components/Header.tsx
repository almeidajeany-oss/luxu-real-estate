import React from 'react';
import { Building2, Search, Bell } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-nordic-dark flex items-center justify-center">
              <Building2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-nordic-dark dark:text-white">
              LuxeEstate
            </span>
          </div>

          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-primary font-medium text-sm bg-transparent border-b-2 border-primary rounded-none hover:bg-transparent focus:bg-transparent'
                      )}
                    >
                      Buy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-muted-foreground hover:text-foreground font-medium text-sm bg-transparent hover:bg-transparent focus:bg-transparent'
                      )}
                    >
                      Rent
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-muted-foreground hover:text-foreground font-medium text-sm bg-transparent hover:bg-transparent focus:bg-transparent'
                      )}
                    >
                      Sell
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-muted-foreground hover:text-foreground font-medium text-sm bg-transparent hover:bg-transparent focus:bg-transparent'
                      )}
                    >
                      Saved Homes
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
            </Button>
            <div className="h-8 w-px bg-border mx-2" />
            <Avatar className="w-9 h-9 ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};
