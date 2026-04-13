# Track Specification: Implement Home Discover Screen

## Overview
The goal of this track is to implement the primary landing page of the luxu-real-estate application, as defined in the `home_discover_screen` resource. This page is the first point of contact for users and must provide a premium, modern experience for discovering luxury properties.

## Requirements
- **Hero Section**: A visually stunning welcome area with a primary call to action.
- **Search & Filters**: A prominent search bar with access to advanced filtering options.
- **Property Listings**: A grid or list of featured properties, showcasing high-quality images and key details (price, location, basic specs).
- **Navigation**: Integration with the overall application layout, including links to property details and user profiles.
- **Responsive Design**: The screen must be fully functional and visually appealing on mobile and desktop devices.
- **Performance**: High-resolution images should be optimized for fast loading times.

## Design Reference
- `prd/resources/home_discover_screen/screen.png`: Visual design.
- `prd/resources/home_discover_screen/code.html`: HTML/CSS reference prototype.

## Technical Details
- **Framework**: Next.js 16.2.0 (App Router).
- **Styling**: Tailwind CSS 4.
- **UI Components (shadcn/ui)**: Use shadcn/ui components for a consistent, premium design system.
    - `button`: Search button, Filter pills, Heart icons, "Load More".
    - `input`: Main search bar.
    - `card`: Property listing cards.
    - `badge`: Property status labels (`EXCLUSIVE`, `FOR SALE`).
    - `tabs`: Category filters for listings.
    - `avatar`: User profile image in navigation.
    - `navigation-menu`: Main header navigation.
    - `separator`: Section dividers.
- **Data Fetching**: Use Server Components for initial listing data.
