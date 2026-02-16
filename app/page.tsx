'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 p-6">
      <div className="text-center text-white max-w-2xl">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
          <p className="text-sm font-bold">אפליקציה חינוכית לימודית</p>
        </div>
        
        <h1 className="text-6xl font-bold mb-4">🤖 עולם ההפכים</h1>
        <h2 className="text-3xl font-bold mb-4 text-yellow-300">by Osher Ben Or</h2>
        <p className="text-2xl mb-4">מפעל האיזון הקוסמי</p>
        
        <p className="text-lg mb-6 opacity-90 leading-relaxed">
          למידת הפכים בעברית לילדים
          <br />
          דרך משחק, הנאה והמחשה רב-חושית
        </p>
        
        <p className="text-base mb-8 opacity-80 italic">
          נוצר על ידי אמא שרוצה לגרום לילדיה להנות יותר בלמידה
        </p>
        
        <button
          onClick={() => router.push('/child')}
          className="bg-white text-blue-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition-transform shadow-xl"
        >
          התחל ללמוד
        </button>
        
        <div className="mt-12 flex justify-center gap-8 text-sm opacity-75">
          <div>📚 4 שלבים</div>
          <div>🎯 73 מילים</div>
          <div>🎮 7 משחקים</div>
        </div>
      </div>
    </div>
  );
}
