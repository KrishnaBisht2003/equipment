// app/equipment/page.tsx
'use client';

import React from 'react';
// import { PlusCircle } from 'lucide-react';
// import EquipmentCategoryComponent, { EquipmentCategory } from '@/components/equip';
import { Homepage } from '@/components/HomePage/Homepage';
import { Switch } from '@/components/ui/switch';
import HalfRating from '@/components/ui/rating';

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
    <>
      <HalfRating/>
      <Switch />
      <Homepage />
    </>
  );
}