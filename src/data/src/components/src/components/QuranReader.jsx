// src/components/QuranReader.jsx
import React, { useState } from 'react';

export default function QuranReader({ surah, ayahs, qaloonNotes }) {
  const [selectedAyah, setSelectedAyah] = useState(null);
  const [repeatCount, setRepeatCount] = useState(3);
  const [memorizedAyahs, setMemorizedAyahs] = useState({});

  const toggleMemorized = (ayahNum) => {
    setMemorizedAyahs(prev => ({
      ...prev,
      [ayahNum]: !prev[ayahNum]
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 my-4 border border-emerald-100">
      {/* عنوان السورة والتوجيهات */}
      <div className="border-b pb-4 mb-6 text-center">
        <h2 className="text-3xl font-serif text-emerald-800 mb-2">سورة {surah.name}</h2>
        <span className="text-gray-500 text-sm">عدد الآيات: {surah.versesCount} | {surah.type}</span>
        
        {/* تنبيه خاص بأصول قالون */}
        <div className="mt-4 bg-amber-50 border-r-4 border-amber-500 p-3 text-right text-sm text-amber-900 rounded">
          <strong>تنبيه في أصول قالون:</strong> {qaloonNotes.mimGroup}
        </div>
      </div>

      {/* أدوات الحفظ والتكرار */}
      <div className="flex flex-wrap items-center justify-between bg-slate-50 p-3 rounded-lg mb-6 text-sm">
        <div className="flex items-center gap-2">
          <span>مرات تكرار الآية للحفظ:</span>
          <select 
            value={repeatCount} 
            onChange={(e) => setRepeatCount(Number(e.target.value))}
            className="border rounded px-2 py-1 bg-white focus:outline-none focus:border-emerald-500"
          >
            <option value={1}>1 مرة</option>
            <option value={3}>3 مرات</option>
            <option value={5}>5 مرات</option>
            <option value={10}>10 مرات</option>
          </select>
        </div>
        <p className="text-gray-500">اضغط على الآية للتركيز عليها والاستماع</p>
      </div>

      {/* عرض المصحف الشريف */}
      <div className="leading-loose text-2xl font-serif text-justify text-gray-800 space-y-4 dir-rtl">
        {ayahs && ayahs.length > 0 ? (
          ayahs.map((item) => (
            <span
              key={item.number}
              onClick={() => setSelectedAyah(item.number)}
              className={`inline-block p-2 m-1 rounded transition duration-200 cursor-pointer ${
                selectedAyah === item.number ? 'bg-emerald-100 border border-emerald-400' : 'hover:bg-slate-100'
              } ${memorizedAyahs[item.number] ? 'line-through text-gray-400 bg-emerald-50' : ''}`}
            >
              {item.text} 
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMemorized(item.number);
                }}
                title="تحديد كـ تم الحفظ"
                className={`mr-2 px-2 py-0.5 text-xs rounded-full border ${
                  memorizedAyahs[item.number] 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'border-emerald-600 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                ﴿{item.number}﴾ {memorizedAyahs[item.number] ? '✓ تم الحفظ' : 'حفظ'}
              </button>
            </span>
          ))
        ) : (
          <p className="text-center text-gray-400 text-base">يرجى اختيار سورة متاحة لعرض النص القرآني.</p>
        )}
      </div>
    </div>
  );
}
