export interface Restaurant {
  id: string;
  name: string;
  type: 'veg' | 'non-veg' | 'both';
  rating: number;
  distance: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  panoramaImage: string; // For 360 view simulation
  coordinates: { lat: number; lng: number };
  restaurants: Restaurant[];
  emergencyContact: {
    police: string;
    ambulance: string;
    touristHelpline: string;
  };
  ticketPrice: number;
}
