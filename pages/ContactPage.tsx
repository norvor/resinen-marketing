import React from 'react';
import { dossierData } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  const { title, subtitle, formFields } = dossierData.contactPage;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      <ScrollReveal width="100%" className="max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">{title}</h1>
            <p className="text-gray-400">{subtitle}</p>
        </div>

        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl shadow-2xl relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
        >
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

            <div className="space-y-6">
                {formFields.map((field, index) => (
                    <div key={index}>
                        <label className="block text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
                            {field.label}
                        </label>
                        <input 
                            type="text" 
                            placeholder={field.placeholder}
                            className="w-full bg-gray-900 border border-gray-600 rounded-md p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                    </div>
                ))}
                
                <div className="pt-4">
                    <button 
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-md transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex justify-center items-center gap-2 group"
                    >
                        <span>TRANSMIT APPLICATION</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="text-xs text-gray-600 font-mono">
                    SECURE CONNECTION ESTABLISHED // ENCRYPTION: AES-256
                </p>
            </div>
        </motion.form>
      </ScrollReveal>
    </div>
  );
};

export default ContactPage;