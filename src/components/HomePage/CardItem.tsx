import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Image from 'next/image';

export const CardItem = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState(null);

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            section: '',
            type: '',
            category: '',
            inventoryQuantity: '',
            size: '',
            assembled: false,
            brand: '',
            model: '',
            powerWatts: '',
            equipmentImage: undefined,
        },
    });

    const onSubmit = (data) => {
        setFormData(data);
        setIsModalOpen(false);
    };

    const handleUpdate = () => {
        setIsModalOpen(true);
    };

    const handleDelete = () => {
        setFormData(null);
        reset();
    };

    const sectionOptions = [
        { value: 'sound', label: 'Sound' },
        { value: 'structure', label: 'Structure' },
    ];

    const typeOptions = [
        { value: 'speakers', label: 'Speakers' },
        { value: 'microphone', label: 'Microphone' },
        { value: 'audio_mixer', label: 'Audio Mixer' },
        { value: 'fixed_fixture', label: 'Fixed Fixture' },
    ];

    const categoryOptions = [
        { value: 'category1', label: 'Category 1' },
        { value: 'category2', label: 'Category 2' },
    ];

    const sizeOptions = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
    ];

    return (
        <>
            <div>
                <div className='flex pt-4 pb-3 justify-between border-gray-200 border-b'>
                    {formData ? (
                        <div className="flex items-center gap-2">
                            <span>{formData.brand} - {formData.model}</span>
                            <button
                                onClick={handleUpdate}
                                className="text-blue-500 underline"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="text-red-500 underline"
                            >
                                Delete
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-1 border-2 border-dashed border-blue-500 text-blue-500 w-44 h-16 px-4 py-2 rounded-md text-sm leading-5"
                        >
                            <span className="text-2xl">+</span> Add
                        </button>
                    )}

                    <div className='flex gap-2'>
                        <button
                            onClick={() => setCount(prev => Math.max(0, prev - 1))}
                            className='bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-2xl cursor-pointer text-gray-500'
                        >
                            -
                        </button>
                        <span className='text-xl text-gray-500'>
                            {count}
                        </span>
                        <button
                            onClick={() => setCount(prev => prev + 1)}
                            className='bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-2xl cursor-pointer text-gray-500'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="pb-16">
                            <div className=" px-5 pt-3 pb-2 flex justify-between items-center text-[#0F161E] border-b-2 border-gray-200">
                                <h4 className='font-semibold text-[22px] leading-7'>
                                    Add new equipment
                                </h4>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className=" hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 " />
                                </button>
                            </div>


                            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
                                <div className='p-5 m-5 rounded-md border-2 border-[#D7D9DD]'>
                                    <div className=' flex justify-between'>
                                        <h6 className='text-[16px] leading-5 font-semibold text-[#0F161E]'>
                                            Equipment Specifications
                                        </h6>
                                        <Image src={"/Images/upwardarrow.png"} width={24} height={24} alt='arrow' className='' />
                                    </div>

                                    <div className='flex gap-4'>
                                        <div className='w-1/2'>
                                            <label className="block mb-2 text-[14px] leading-5 font-semibold text-[#5A5F66]">Section</label>
                                            <Controller
                                                name="section"
                                                control={control}
                                                rules={{ required: 'Section is required' }}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        options={sectionOptions}
                                                        placeholder="Select"
                                                        value={sectionOptions.find(option => option.value === field.value) || null}
                                                        onChange={(option) => field.onChange(option?.value)}
                                                        classNames={{
                                                            control: () => 'px-0 py-1.5', // padding for the main control
                                                            option: () => 'px-0 py-1.5',  // padding for each option                                                                menu: () => 'mt-1',         // margin top for the dropdown menu
                                                            menuList: () => 'py-1'      // padding for the menu list container
                                                        }}
                                                    />
                                                )}
                                            />
                                            {errors.section && <p className="text-red-500 text-sm mt-1">{errors.section.message}</p>}
                                        </div>
                                        <div className='w-1/2'>
                                            <label className="block mb-2 text-[14px] leading-5 font-semibold text-[#5A5F66]">Type</label>
                                            <Controller
                                                name="type"
                                                control={control}
                                                rules={{ required: 'Type is required' }}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        options={typeOptions}
                                                        placeholder="Select"
                                                        value={typeOptions.find(option => option.value === field.value) || null}
                                                        onChange={(option) => field.onChange(option?.value)}
                                                        classNames={{
                                                            control: () => 'px-0 py-1.5', // padding for the main control
                                                            option: () => 'px-0 py-1.5',  // padding for each option                                                                menu: () => 'mt-1',         // margin top for the dropdown menu
                                                            menuList: () => 'py-1'      // padding for the menu list container
                                                        }}
                                                    />
                                                )}
                                            />
                                            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
                                        </div>

                                    </div>

                                    <div className=' px-3 py-2 my-6 bg-white border rounded-2xl'>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <div>
                                                <label className="block mb-2 text-[#0F161E] text-[14px] leading-5 font-semibold">Category</label>
                                                <Controller
                                                    name="category"
                                                    control={control}
                                                    rules={{ required: 'Category is required' }}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            options={categoryOptions}
                                                            placeholder="Select"
                                                            value={categoryOptions.find(option => option.value === field.value) || null}
                                                            onChange={(option) => field.onChange(option?.value)}
                                                            classNames={{
                                                                control: () => 'px-0 py-1.5', // padding for the main control
                                                                option: () => 'px-0 py-1.5',  // padding for each option                                                                menu: () => 'mt-1',         // margin top for the dropdown menu
                                                                menuList: () => 'py-1'      // padding for the menu list container
                                                            }}
                                                        />
                                                    )}
                                                />
                                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                                            </div>

                                            <div>
                                                <label className="block mb-2 text-[#0F161E] text-[14px] leading-5 font-semibold">Inventory Quantity</label>
                                                <Controller
                                                    name="inventoryQuantity"
                                                    control={control}
                                                    rules={{ required: 'Inventory Quantity is required', min: 0 }}
                                                    render={({ field: { value, onChange, ...field } }) => (
                                                        <input
                                                            {...field}
                                                            type="number"
                                                            placeholder="Enter here"
                                                            value={value || ''}
                                                            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
                                                            className="w-full border border-[#D7D9DD] rounded px-4 py-3"

                                                        />
                                                    )}
                                                />
                                                {errors.inventoryQuantity && <p className="text-red-500 text-sm mt-1">{errors.inventoryQuantity.message}</p>}
                                            </div>

                                            <div>
                                                <label className="block mb-2 text-[#0F161E] text-[14px] leading-5 font-semibold">Size (Woofer inches)</label>
                                                <Controller
                                                    name="size"
                                                    control={control}
                                                    rules={{ required: 'Size is required' }}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            options={sizeOptions}
                                                            placeholder="Select Size"
                                                            value={sizeOptions.find(option => option.value === field.value) || null}
                                                            onChange={(option) => field.onChange(option?.value)}
                                                            classNames={{
                                                                control: () => 'px-0 py-1.5', // padding for the main control
                                                                option: () => 'px-0 py-1.5',  // padding for each option                                                                menu: () => 'mt-1',         // margin top for the dropdown menu
                                                                menuList: () => 'py-1'      // padding for the menu list container
                                                            }}
                                                        />
                                                    )}
                                                />
                                                {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>}
                                            </div>
                                        </div>

                                        <div className="flex items-start justify-start pt-4">

                                            <Controller
                                                name="assembled"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="checkbox"
                                                        className="mr-2 mt-1.5 scale-150"
                                                        checked={field.value}
                                                    />
                                                )}
                                            />
                                            <div className=''>
                                                <label className="block text-[#0F161E] text-[14px] leading-5 font-medium">Assembled</label>
                                                <p className='text-[12px] leading-4 font-normal text-[#5A5F66]'>Select if this is a Copy Speaker built locally using cabinets. This helps managing customer expectations and avoiding complaints.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='px-3 py-2 my-6 bg-white border rounded-2xl'>

                                        <div>
                                            <label className="block mb-2 text-[14px] leading-5 font-semibold text-[#0F161E]">Brand</label>
                                            <Controller
                                                name="brand"
                                                control={control}
                                                rules={{ required: 'Brand is required' }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder='Enter here'
                                                        type="text"
                                                        className="w-full p-2 border rounded border-[#D7D9DD]"
                                                    />
                                                )}
                                            />
                                            {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>}
                                        </div>

                                        <div className='py-3'>
                                            <label className="block mb-2 text-[14px] leading-5 font-semibold text-[#0F161E]">Model</label>
                                            <Controller
                                                name="model"
                                                control={control}
                                                rules={{ required: 'Model is required' }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder='Enter here'
                                                        type="text"
                                                        className="w-full p-2 border rounded border-[#D7D9DD]"
                                                    />
                                                )}
                                            />
                                            {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model.message}</p>}
                                        </div>

                                        <div className='py-3'>
                                            <label className="block mb-2 text-[14px] leading-5 font-semibold text-[#0F161E]">Power Watts (RMS)</label>
                                            <Controller
                                                name="powerWatts"
                                                control={control}
                                                rules={{ required: 'Power (Watts) is required', min: 0 }}
                                                render={({ field: { value, onChange, ...field } }) => (
                                                    <input
                                                        {...field}
                                                        placeholder='Enter here'
                                                        type="number"
                                                        value={value || ''}
                                                        onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
                                                        className="w-full p-2 border rounded border-[#D7D9DD]"
                                                    />
                                                )}
                                            />
                                            {errors.powerWatts && <p className="text-red-500 text-sm mt-1">{errors.powerWatts.message}</p>}
                                        </div>
                                    </div>

                                    <div className='boarder-1 px-3 py-2 rounded-md bg-white shadow-[#0F161E24]'>
                                        <label className="block mb-2">
                                            <h5 className="text-[18px] py-1 leading-5 font-semibold text-[#0F161E]">
                                                Equipment Image
                                            </h5>
                                            <p className="text-[12px] leading-4 font-normal text-[#5A5F66]">
                                                Upload a good-looking image of your equipment with a clear background.
                                            </p>
                                        </label>

                                        <Controller
                                            name="equipmentImage"
                                            control={control}
                                            rules={{ required: "Equipment Image is required" }}
                                            render={({ field: { value, onChange, ...field } }) => (
                                                
                                                <div className='w-[160px] p-3 shadow-xl rounded-md'>
                                                    {/* Hidden File Input */}
                                                    <input
                                                        {...field}
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => onChange(e.target.files?.[0])}
                                                        className="hidden"
                                                        id="upload-image"
                                                    />

                                                    <div className=''>
                                                        <label
                                                            htmlFor="upload-image"
                                                            className="cursor-pointer border-2 border-dashed border-gray-400 rounded-lg px-2 py-1 flex flex-col items-center justify-center text-center"
                                                        >
                                                            <Image
                                                                src="/Images/uploadImage.png" // Ensure this image exists in `public/`
                                                                width={500}
                                                                height={500}
                                                                alt="Upload"
                                                                className="w-16 h-16 mb-2"
                                                            />
                                                            <span className="text-sm font-medium text-[14px] leading-5 text-[#0F161E]">Upload image
                                                                <p className=' text-[11px] leading-4 font-normal text-[#5A5F66]'>Upload From Your Device</p>
                                                            </span>
                                                            {value && (
                                                                <p className="mt-2 text-blue-500 text-sm">{value.name}</p>
                                                            )}
                                                        </label>
                                                    </div>
                                                    {/* Custom Upload Button */}

                                                </div>
                                                
                                            )}
                                        />
                                        {errors.equipmentImage && (
                                            <p className="text-red-500 text-sm mt-1">{errors.equipmentImage.message}</p>
                                        )}
                                    </div>

                                </div>

                                <div className='px-5'>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#0B63E5] mt-4 text-[14px] leading-5 text-white py-4 rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CardItem;