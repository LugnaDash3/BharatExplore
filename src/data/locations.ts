import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    shortDescription: 'A 13th-century CE Sun Temple at Konark about 35 kilometres northeast of Puri.',
    description: 'The Konark Sun Temple is a 13th-century CE (year 1250) Sun Temple at Konark about 35 kilometres (22 mi) northeast of Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE.',
    coverImage: 'https://images.unsplash.com/photo-1562313637-b91450582a24?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626107534639-0c1d89f85862?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605628965343-27943b818899?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1676269328937-513337306422?q=80&w=1000&auto=format&fit=crop'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1598890777032-bde66e6db0e2?q=80&w=3000&auto=format&fit=crop',
    coordinates: { lat: 19.8876, lng: 86.0945 },
    ticketPrice: 40,
    restaurants: [
      { id: 'r1', name: 'Surya Garden', type: 'veg', rating: 4.5, distance: '0.5 km', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500' },
      { id: 'r2', name: 'Odisha Delights', type: 'both', rating: 4.2, distance: '1.2 km', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500' }
    ],
    emergencyContact: {
      police: '100',
      ambulance: '108',
      touristHelpline: '1363'
    }
  },
  {
    id: 'jagannath-puri',
    name: 'Jagannath Temple',
    location: 'Puri, Odisha',
    shortDescription: 'An important Hindu temple dedicated to Jagannath, a form of Sri Krishna.',
    description: 'The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Sri Krishna in Puri in the state of Odisha on the eastern coast of India. The present temple was rebuilt from the 10th century onwards, on the site of an earlier temple, and begun by Anantavarman Chodaganga Deva, the first king of the Eastern Ganga dynasty.',
    coverImage: 'https://images.unsplash.com/photo-1626278438988-500d407e6a62?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1604906657620-628395f4573f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597646785794-3e634936521b?q=80&w=1000&auto=format&fit=crop'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1591268865838-547015434939?q=80&w=3000&auto=format&fit=crop',
    coordinates: { lat: 19.8049, lng: 85.8179 },
    ticketPrice: 0,
    restaurants: [
      { id: 'r3', name: 'Mahaprasad Dining', type: 'veg', rating: 4.9, distance: '0.2 km', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=500' },
      { id: 'r4', name: 'Sea View Shack', type: 'non-veg', rating: 4.0, distance: '2.0 km', image: 'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=500' }
    ],
    emergencyContact: {
      police: '100',
      ambulance: '108',
      touristHelpline: '1800-208-1414'
    }
  },
  {
    id: 'badrinath-temple',
    name: 'Badrinath Temple',
    location: 'Badrinath, Uttarakhand',
    shortDescription: 'A Hindu temple dedicated to Vishnu which is situated in the town of Badrinath.',
    description: 'Badrinath or Badrinarayan Temple is a Hindu temple dedicated to Vishnu which is situated in the town of Badrinath in Uttarakhand, India. The temple and town form one of the four Char Dham and Chota Char Dham pilgrimage sites.',
    coverImage: 'https://images.unsplash.com/photo-1626521853562-297979444635?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1598606673278-8d1f39262668?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1623655852697-a57419770e47?q=80&w=1000&auto=format&fit=crop'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=3000&auto=format&fit=crop',
    coordinates: { lat: 30.7433, lng: 79.4938 },
    ticketPrice: 0,
    restaurants: [
      { id: 'r5', name: 'Himalayan Cafe', type: 'veg', rating: 4.7, distance: '0.3 km', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=500' }
    ],
    emergencyContact: {
      police: '100',
      ambulance: '108',
      touristHelpline: '1363'
    }
  }
];
