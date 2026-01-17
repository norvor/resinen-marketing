import { useEffect, useState } from 'react';
import { api, Journey, Stop } from '../api';

interface JourneyMapProps {
  journeyId: string; // <--- NEW: We need to know WHICH journey to show
  stopIndex: number;
}

export function JourneyMap({ journeyId, stopIndex }: JourneyMapProps) {
  const [journey, setJourney] = useState<Journey | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const journeys = await api.getJourneys();
        
        // 1. FIND THE CORRECT JOURNEY
        // Instead of journeys[0], we look for the one the user is actually playing
        const active = journeys.find(j => j.id === journeyId) || journeys[0];
        
        setJourney(active || null);
      } catch (e) {
        console.error("Map Load Error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [journeyId]); // Reload if ID changes

  if (loading) return <div className="p-10 text-center text-slate-400">Loading Map...</div>;
  
  if (!journey) return (
    <div className="p-10 text-center text-red-500 bg-red-50 rounded-xl">
      Error: Journey "{journeyId}" not found in database.
    </div>
  );

  // 2. FIND THE CORRECT STOP
  // We explicitly look for the index. 
  const currentStop = journey.stops?.find(s => s.order_index === stopIndex);

  // If we haven't created this stop in Codex yet, show a fallback instead of crashing
  if (!currentStop) {
      return (
          <div className="p-10 text-center space-y-4 max-w-md mx-auto">
              <div className="text-4xl">🚧</div>
              <h2 className="text-xl font-bold text-slate-700">Stop #{stopIndex} Not Found</h2>
              <p className="text-slate-500">
                  You have reached level {stopIndex}, but the content hasn't been added to Codex yet.
              </p>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono text-left">
                  Current Journey: {journey.title}<br/>
                  Stops Available: {journey.stops?.length || 0}<br/>
                  Your Index: {stopIndex}
              </div>
          </div>
      );
  }

  return (
    <div className="space-y-6 pt-6 animate-fade-in max-w-md mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Current Location
        </span>
        <h2 className="text-3xl font-black text-slate-800">
            {currentStop.title}
        </h2>
      </div>

      {/* VISUAL CARD */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
        <img 
            src={currentStop.visual_asset_url} 
            alt={currentStop.title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-lg font-medium leading-relaxed opacity-95">
                {currentStop.description}
            </p>
        </div>
      </div>

      {/* PROGRESS TRACKER */}
      <div className="flex justify-between items-center relative px-6 pt-4">
         {/* The Line */}
         <div className="absolute top-1/2 left-6 right-6 h-1 bg-slate-200 -z-10" />
            
         {/* Dots for every available stop */}
         {journey.stops?.sort((a,b) => a.order_index - b.order_index).map((stop) => {
             const isPassed = stop.order_index <= stopIndex;
             const isCurrent = stop.order_index === stopIndex;
             return (
                 <div 
                     key={stop.id}
                     className={`
                         relative w-4 h-4 rounded-full border-2 transition-all duration-500
                         ${isPassed ? 'bg-orange-500 border-orange-500' : 'bg-white border-slate-300'}
                         ${isCurrent ? 'scale-150 ring-4 ring-orange-100 z-10' : ''}
                     `}
                 >
                    {isCurrent && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-orange-500">
                            YOU
                        </div>
                    )}
                 </div>
             );
         })}
      </div>
    </div>
  );
}