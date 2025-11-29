import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Navigation, Phone, Utensils, Ticket, AlertCircle, ChevronLeft, Clock, Info } from 'lucide-react';
import { locations } from '../data/locations';
import Location360 from '../components/Location360';
import { motion } from 'framer-motion';

const LocationDetails = () => {
  const { id } = useParams();
  const location = locations.find(l => l.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'dining' | 'emergency'>('overview');
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (!location) {
    return <div className="min-h-screen flex items-center justify-center">Location not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={location.coverImage} 
          alt={location.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-6 left-4 md:left-8 z-20">
          <Link to="/" className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors inline-flex">
            <ChevronLeft size={24} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-orange-300 mb-2 font-medium">
                <MapPin size={20} />
                {location.location}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{location.name}</h1>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors"
                >
                  <Ticket size={20} />
                  Book Passes {location.ticketPrice > 0 ? `₹${location.ticketPrice}` : '(Free)'}
                </button>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors"
                >
                  <Navigation size={20} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200 pb-1 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-2 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Overview & 360°
            </button>
            <button 
              onClick={() => setActiveTab('dining')}
              className={`pb-3 px-2 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'dining' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Nearby Dining
            </button>
            <button 
              onClick={() => setActiveTab('emergency')}
              className={`pb-3 px-2 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'emergency' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Emergency Info
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Info className="text-orange-500" /> About the Place
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{location.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Virtual Tour</h2>
                  <Location360 image={location.panoramaImage} isActive={true} />
                  <p className="text-sm text-gray-500 mt-2 text-center">Drag the image to explore the 360° view</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {location.gallery.map((img, idx) => (
                      <img key={idx} src={img} alt={`Gallery ${idx}`} className="rounded-xl w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'dining' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Restaurants Nearby</h2>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    {location.restaurants.length} places found
                  </span>
                </div>
                
                {location.restaurants.map(restaurant => (
                  <div key={restaurant.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
                    <img src={restaurant.image} alt={restaurant.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          restaurant.type === 'veg' ? 'bg-green-100 text-green-700 border border-green-200' : 
                          restaurant.type === 'non-veg' ? 'bg-red-100 text-red-700 border border-red-200' : 
                          'bg-orange-100 text-orange-700 border border-orange-200'
                        }`}>
                          {restaurant.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><Utensils size={14} /> {restaurant.distance} away</span>
                        <span className="flex items-center gap-1 text-yellow-500 font-bold">★ {restaurant.rating}</span>
                      </div>
                      <button className="mt-3 text-orange-600 text-sm font-semibold hover:underline">View Menu &rarr;</button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'emergency' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <AlertCircle size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Police Station</h3>
                    <p className="text-red-600 text-2xl font-bold">{location.emergencyContact.police}</p>
                    <a href={`tel:${location.emergencyContact.police}`} className="text-sm text-gray-600 underline">Tap to Call</a>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ambulance</h3>
                    <p className="text-blue-600 text-2xl font-bold">{location.emergencyContact.ambulance}</p>
                    <a href={`tel:${location.emergencyContact.ambulance}`} className="text-sm text-gray-600 underline">Tap to Call</a>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex items-center gap-4 md:col-span-2">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Info size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Tourist Helpline</h3>
                    <p className="text-orange-600 text-2xl font-bold">{location.emergencyContact.touristHelpline}</p>
                    <a href={`tel:${location.emergencyContact.touristHelpline}`} className="text-sm text-gray-600 underline">Tap to Call</a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Visitor Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-orange-500 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Opening Hours</p>
                  <p className="text-sm text-gray-600">6:00 AM - 8:00 PM</p>
                  <p className="text-xs text-green-600 mt-1">Open Now</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ticket className="text-orange-500 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Entry Fee</p>
                  <p className="text-sm text-gray-600">{location.ticketPrice === 0 ? 'Free Entry' : `₹${location.ticketPrice} per person`}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">{location.location}</p>
                </div>
              </div>
              
              <hr className="border-gray-100" />
              
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl w-full max-w-md p-6 relative"
          >
            <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <AlertCircle size={24} className="rotate-45" />
            </button>
            
            <h2 className="text-2xl font-bold mb-2">Book Entry Pass</h2>
            <p className="text-gray-500 mb-6">for {location.name}</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking Confirmed! (Demo)'); setShowBookingModal(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input type="date" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visitors</label>
                  <input type="number" min="1" defaultValue="1" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg flex justify-between items-center mt-4">
                <span className="font-semibold text-orange-900">Total Amount</span>
                <span className="font-bold text-xl text-orange-600">₹{location.ticketPrice}</span>
              </div>

              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors mt-4">
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LocationDetails;
