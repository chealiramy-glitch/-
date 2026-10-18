// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import QuranReader from './components/QuranReader';
import { surahsList, sampleAyahs, qaloonNotes } from './data/qaloonData';

export default function App() {
  const [currentSurah, setCurrentSurah] = useState(surahsList[0]);

  return (
    <div className="min-h-screen bg-slate-100 text-right font-sans dir-rtl">
      {/* الهيدر */}
      <Header />

      <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* القائمة الجانبية للسور */}
        <aside className="md:col-span-1 bg-white p-4 rounded-xl shadow-md border border-gray-100 max-h-[80vh] overflow-y-auto">
          <h3 className="font-bold text-gray-700 mb-3 border-b pb-2 text-lg">فهرس السور</h3>
          <ul className="space-y-2">
            {surahsList.map((surah) => (
              <li key={surah.id}>
                <button
                  onClick={() => setCurrentSurah(surah)}
                  className={`w-full text-right p-3 rounded-lg flex justify-between items-center transition ${
                    currentSurah.id === surah.id
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'hover:bg-emerald-50 text-gray-700'
                  }`}
                >
                  <span>{surah.id}. {surah.name}</span>
                  <span className="text-xs border border-current px-2 py-0.5 rounded-full">
                    {surah.versesCount} آية
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* منطقة عرض السورة والحفظ */}
        <section className="md:col-span-3">
          <QuranReader 
            surah={currentSurah} 
            ayahs={sampleAyahs[currentSurah.id] || []} 
            qaloonNotes={qaloonNotes}
          />
        </section>
      </main>
    </div>
  );
}
