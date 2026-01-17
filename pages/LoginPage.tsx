import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-sp-blue flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-hard-lg transform rotate-1">
        <h1 className="text-3xl font-black mb-6 uppercase text-center">Enter Resinen</h1>
        
        <form className="space-y-4">
            <div>
                <label className="block font-bold text-sm mb-1 uppercase">Email Identity</label>
                <input type="email" className="w-full border-4 border-black p-3 bg-sp-paper focus:bg-white outline-none font-bold" />
            </div>
            <div>
                <label className="block font-bold text-sm mb-1 uppercase">Passkey</label>
                <input type="password" className="w-full border-4 border-black p-3 bg-sp-paper focus:bg-white outline-none font-bold" />
            </div>
            <button className="w-full bg-sp-green text-white font-black py-4 border-4 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Login
            </button>
        </form>
        
        <div className="mt-6 text-center">
            <p className="text-sm font-bold text-gray-500">Need an account? <span className="text-sp-cyan cursor-pointer underline">Signup</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;