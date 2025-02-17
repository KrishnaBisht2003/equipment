// components/EquipmentCategory.tsx
'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';

export type EquipmentType = {
  id: string;
  name: string;
  count: number;
  isAdded: boolean;
};

export type EquipmentCategory = {
  name: string;
  icon: string;
  types: EquipmentType[];
};

interface EquipmentCategoryProps {
  category: EquipmentCategory;
  categoryIndex: number;
  onUpdateCount: (categoryIndex: number, typeIndex: number, increment: boolean) => void;
  onAddEquipment: (categoryIndex: number, typeIndex: number) => void;
}

const EquipmentCategoryComponent: React.FC<EquipmentCategoryProps> = ({
  category,
  categoryIndex,
  onUpdateCount,
  onAddEquipment
}) => {
  return (
    <div className="space-y-4">
      {/* Category Header */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-sm">{category.icon}</span>
        </div>
        <h3 className="font-medium">{category.name}</h3>
      </div>

      {/* Equipment Types */}
      <div className="space-y-6">
        {category.types.map((type, typeIndex) => (
          <div key={type.id} className="space-y-2">
            <div className="text-sm font-medium">{type.name}</div>
            <div className="border border-dashed rounded-lg p-3">
              {!type.isAdded ? (
                <button
                  onClick={() => onAddEquipment(categoryIndex, typeIndex)}
                  className="w-full flex items-center justify-center gap-2 text-blue-600"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              ) : (
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => onUpdateCount(categoryIndex, typeIndex, false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center">{type.count}</span>
                  <button
                    onClick={() => onUpdateCount(categoryIndex, typeIndex, true)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentCategoryComponent;