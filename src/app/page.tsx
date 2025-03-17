// app/equipment/page.tsx
// 'use client';

import React from 'react';
// import { PlusCircle } from 'lucide-react';
// import EquipmentCategoryComponent, { EquipmentCategory } from '@/components/equip';
import { Homepage } from '@/components/HomePage/Homepage';

// const initialCategories: EquipmentCategory[] = [
//   {
//     name: 'Sound',
//     icon: '🔊',
//     types: [
//       { id: '1', name: 'Speaker', count: 0, isAdded: false },
//       { id: '2', name: 'Speaker', count: 0, isAdded: false },
//       { id: '3', name: 'Microphone', count: 0, isAdded: false },
//       { id: '4', name: 'Audio Mixer', count: 0, isAdded: false }
//     ]
//   },
//   {
//     name: 'Structures',
//     icon: '🏗️',
//     types: [
//       { id: '5', name: 'Fixed Fixture', count: 0, isAdded: false }
//     ]
//   }
// ];

export default function HomePage() {
  // const [categories, setCategories] = useState<EquipmentCategory[]>(initialCategories);

  // const updateCount = (categoryIndex: number, typeIndex: number, increment: boolean) => {
  //   setCategories(prevCategories => {
  //     const newCategories = [...prevCategories];
  //     const type = newCategories[categoryIndex].types[typeIndex];
  //     type.count = increment ? type.count + 1 : Math.max(0, type.count - 1);
      
  //     // If count becomes 0, reset isAdded state
  //     if (type.count === 0) {
  //       type.isAdded = false;
  //     }
      
  //     return newCategories;
  //   });
  // };

  // const addEquipment = (categoryIndex: number, typeIndex: number) => {
  //   setCategories(prevCategories => {
  //     const newCategories = [...prevCategories];
  //     const type = newCategories[categoryIndex].types[typeIndex];
  //     type.isAdded = true;
  //     type.count = 1;
  //     return newCategories;
  //   });
  // };

  return (
    // <div className="min-h-screen bg-white">
    //   Header
    //   <div className="p-4 border-b">
    //     <div className="max-w-md mx-auto">
    //       <div className="flex justify-between items-center mb-2">
    //         <h1 className="text-xl font-semibold">Add equipment</h1>
    //         <button className="text-blue-600 text-sm">Save & exit</button>
    //       </div>
    //       <p className="text-sm text-gray-600 mb-2">
    //         Add equipment items in this template for your saved package series.
    //       </p>
    //       <button className="text-blue-600 text-sm">Preview Package</button>
    //     </div>
    //   </div>

    //   {/* Equipment List */}
    //   <div className="p-4">
    //     <div className="max-w-md mx-auto">
    //       <div className="mb-4">
    //         <h2 className="text-lg font-semibold mb-2">Equipment</h2>
    //         <p className="text-sm text-gray-600">Equipment items included in this package.</p>
    //       </div>

    //       {/* Categories */}
    //       <div className="space-y-6">
    //         {categories.map((category, index) => (
    //           <EquipmentCategoryComponent
    //             key={category.name}
    //             category={category}
    //             categoryIndex={index}
    //             onUpdateCount={updateCount}
    //             onAddEquipment={addEquipment}
    //           />
    //         ))}
    //       </div>

    //       {/* Add More Button */}
    //       <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
    //         <PlusCircle className="w-4 h-4" />
    //         Add more
    //       </button>

    //       {/* Navigation */}
    //       <div className="flex justify-between mt-6">
    //         <button className="px-4 py-2 text-blue-600">Back</button>
    //         <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <h1 className="text-[#ff0000]">this is a h1 tag </h1>
      <Homepage/>
    </>
  );
}
