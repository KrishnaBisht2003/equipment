import React from 'react'
// import { text } from 'stream/consumers'

 const Section1 = () => {
  return (
    <>
        <div className=' flex justify-end w-full'>
            <button className="w-[116px] h-[48px] border-[2px] boarder-[]  px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ">
                <div className='text-black text-[14px] leading-5 font-semibold'>
                    Save & exit
                </div>
            </button>
        </div>
        <div className= 'text-[342px] leading-10 '>
            <h1 className='text-[32px]  font-semibold text-[#0F161E]'>Add equipment</h1>
            <p className='text-[#5A5F66] font-normal text-[14px] leading-5'>
                Add equipment items in the template for your selected package series.
            </p>
        </div>
    </>
  )
}

export default Section1

// import React from 'react';

// const EquipmentTemplate: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Add Equipment</h2>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//           Save & exit
//         </button>
//       </div>
//       <div className="mb-4">
//         <p className="text-gray-700">
//           Add equipment items in the template for your selected package series.
//         </p>
//       </div>
//       <div className="space-y-4">
//         {/* Placeholder for equipment items */}
//         <div className="p-4 border border-gray-200 rounded-lg">
//           <p className="text-gray-500">Equipment item 1</p>
//         </div>
//         <div className="p-4 border border-gray-200 rounded-lg">
//           <p className="text-gray-500">Equipment item 2</p>
//         </div>
//         {/* Add more equipment items as needed */}
//       </div>
//       <button className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
//         Add Equipment
//       </button>
//     </div>
//   );
// };

// export default EquipmentTemplate;