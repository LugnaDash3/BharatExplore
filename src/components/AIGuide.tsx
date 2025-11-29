import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Namaste! I'm your AI guide for India. Ask me anything about temples, food, or history!", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      let response = "That's a great question! India has a rich heritage.";
      if (userMsg.toLowerCase().includes('food') || userMsg.toLowerCase().includes('restaurant')) {
        response = "The local cuisine is divine! You can find both veg and non-veg options near the temples. Check the 'Nearby' tab for recommendations.";
      } else if (userMsg.toLowerCase().includes('ticket') || userMsg.toLowerCase().includes('pass')) {
        response = "You can book passes directly through this app. Just click the 'Book Pass' button on any location page.";
      } else if (userMsg.toLowerCase().includes('temple') || userMsg.toLowerCase().includes('history')) {
        response = "These temples are centuries old marvels of architecture. Konark, for instance, is designed as a massive chariot!";
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-orange-100 flex flex-col"
            style={{ maxHeight: '500px', height: '70vh' }}
          >
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-semibold">AI Tour Guide</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isUser 
                      ? 'bg-orange-500 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about history, food..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="submit" className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2 font-medium"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
        <span className="hidden md:inline">{isOpen ? 'Close Guide' : 'Ask AI Guide'}</span>
      </motion.button>
    </>
  );
};

export default AIGuide;
