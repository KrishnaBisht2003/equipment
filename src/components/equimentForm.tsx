"use client";

import { useState } from 'react';

type EquipmentFormProps = {
  onClose: () => void;
};

type EquipmentData = {
  section: string;
  type: string;
  category: string;
  inventoryQuantity: string;
  size: string;
  assembled: boolean;
  brand: string;
};

export default function EquipmentForm({ onClose }: EquipmentFormProps) {
  const [expanded, setExpanded] = useState(true);
  const [formData, setFormData] = useState<EquipmentData>({
    section: 'Sound',
    type: 'Speakers',
    category: '',
    inventoryQuantity: '',
    size: '',
    assembled: false,
    brand: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to an API
    // For now, we'll just close the form
    onClose();
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Equipment Specifications</h3>
          <button 
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500"
          >
            {expanded ? '▼' : '▲'}
          </button>
        </div>
        
        {expanded && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Section</label>
                <select 
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="Sound">Sound</option>
                  <option value="Lighting">Lighting</option>
                  <option value="Video">Video</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="Speakers">Speakers</option>
                  <option value="Microphones">Microphones</option>
                  <option value="Mixers">Mixers</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">Select</option>
                  <option value="PA">PA</option>
                  <option value="Studio">Studio</option>
                  <option value="DJ">DJ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Inventory Quantity</label>
                <input 
                  type="text"
                  name="inventoryQuantity"
                  value={formData.inventoryQuantity}
                  onChange={handleChange}
                  placeholder="Enter here"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Size (Woofer inches)</label>
              <select 
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="6">6"</option>
                <option value="8">8"</option>
                <option value="10">10"</option>
                <option value="12">12"</option>
              </select>
            </div>
            
            <div className="border p-3 rounded-md bg-gray-50">
              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox"
                  name="assembled"
                  checked={formData.assembled}
                  onChange={handleCheckboxChange}
                  className="mt-1"
                />
                <div>
                  <h4 className="font-medium text-sm">Assembled</h4>
                  <p className="text-xs text-gray-500">
                    Select if this is a Copy Speaker built locally using cabinets. This helps managing customer expectations and avoiding complaints.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Brand</label>
              <input 
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                placeholder="Enter brand name"
              />
            </div>
          </div>
        )}
      </div>
      
      <button 
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
      >
        Save
      </button>
    </form>
  );
}