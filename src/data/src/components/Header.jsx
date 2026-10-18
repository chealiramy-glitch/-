// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center dir-rtl">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">📖 تطبيق الفرقان</span>
          <span className="bg-emerald-900 text-emerald-200 text-xs px-2 py-1 rounded-full border border-emerald-500">
            رواية قالون عن نافع
          </span>
        </div>
        <p className="text-sm hidden md:block text-emerald-100">
          تسهيل الحفظ والمراجعة بالرواية المدنية
        </p>
      </div>
    </header>
  );
}
