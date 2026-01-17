import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-sp-orange font-sans relative overflow-hidden flex items-center justify-center py-20 px-4">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sp-yellow border-4 border-black rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-sp-cyan border-4 border-black transform rotate-12 opacity-50"></div>

      <div className="max-w-xl w-full relative z-10">
        
        {/* HEADER TAPE */}
        <div className="w-40 h-10 bg-[#e5e5e5]/90 border-l-4 border-r-4 border-black mx-auto -mb-6 relative z-20 transform -rotate-2"></div>

        {/* MAIN CARD */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-hard-lg transform rotate-1">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase text-black transform -rotate-1">
              Contact Us
            </h1>
            <p className="text-lg font-bold text-gray-600">
              Fill out the form below to initialize the protocol.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="transform -rotate-1">
              <label className="block text-sm font-black text-black uppercase mb-2 ml-1">Identity (Email)</label>
              <input 
                type="email" 
                className="w-full bg-sp-paper border-4 border-black px-4 py-4 text-black font-bold focus:bg-white focus:shadow-hard outline-none transition-all placeholder:text-gray-400" 
                placeholder="you@entity.com" 
              />
            </div>
            
            <div className="transform rotate-1">
              <label className="block text-sm font-black text-black uppercase mb-2 ml-1">Transmission</label>
              <textarea 
                rows={5} 
                className="w-full bg-sp-paper border-4 border-black px-4 py-4 text-black font-bold focus:bg-white focus:shadow-hard outline-none transition-all placeholder:text-gray-400" 
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button className="w-full bg-sp-cyan text-black text-xl font-black py-5 border-4 border-black shadow-hard hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;