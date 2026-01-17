import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-sp-red flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-hard-lg transform -rotate-1">
        <h1 className="text-3xl font-black mb-6 uppercase text-center">Join The Network</h1>
        
        <form className="space-y-4">
            <div>
                <label className="block font-bold text-sm mb-1 uppercase">Full Name</label>
                <input type="text" className="w-full border-4 border-black p-3 bg-sp-paper focus:bg-white outline-none font-bold" />
            </div>
            <div>
                <label className="block font-bold text-sm mb-1 uppercase">Email Identity</label>
                <input type="email" className="w-full border-4 border-black p-3 bg-sp-paper focus:bg-white outline-none font-bold" />
            </div>
            <button className="w-full bg-sp-yellow text-black font-black py-4 border-4 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Initialize Account
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;