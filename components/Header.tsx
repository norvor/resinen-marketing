
import React from 'react';

interface HeaderProps {
  title: string;
  subject: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subject }) => {
  return (
    <header className="text-center mb-16 border-b-2 border-gray-700 pb-8">
      <div className="text-sm font-mono tracking-widest text-cyan-400">
        <p>RESINEN INTERNAL DOSSIER</p>
        <p>CLASSIFICATION: STRATEGIC / OPERATIONAL DOCTRINE</p>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Version: 1.0 // Subject: {subject}
      </p>
    </header>
  );
};