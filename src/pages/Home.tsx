import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { locations } from '../data/locations';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop" 
            alt="India Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Discover the Soul of <span className="text-orange-500">India</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
              Your AI-powered companion to the most spiritual and historic destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#destinations" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
                Start Exploring
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Plan a Trip
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated selection of India's most magnificent temples and historic sites, complete with 360° views and AI guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={location.coverImage} 
                  alt={location.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600 flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> 4.9
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin size={16} />
                  {location.location}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{location.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{location.shortDescription}</p>
                
                <Link 
                  to={`/location/${location.id}`}
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Maps</h3>
              <p className="text-gray-600">Navigate with ease using our integrated maps finding the best routes to your spiritual destination.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712009.png" className="w-8 h-8 opacity-80" alt="AI" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Tour Guide</h3>
              <p className="text-gray-600">Get instant answers about history, rituals, and local secrets from your personal AI companion.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Booking</h3>
              <p className="text-gray-600">Book entry passes, find verified veg/non-veg restaurants, and access emergency services instantly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
