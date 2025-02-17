"use client";

import { useRouter } from 'next/navigation';
import EquipmentForm from '@/components/equimentForm';

export default function AddNewEquipment() {
  const router = useRouter();
  
  const handleClose = () => {
    router.push('/');
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Add new equipment</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <EquipmentForm onClose={handleClose} />
      </div>
    </div>
  );
}