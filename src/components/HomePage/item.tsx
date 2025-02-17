import React from "react";

export default function Counter({ id, value, onIncrement, onDecrement }) {
    return (
        <div className='flex gap-2'>
            <span className='bg-[#F2F3F4] rounded-full w-8 h-8 flex items-center justify-center text-[24px] cursor-pointer text-[#999EA6] '
                onClick={() => onDecrement(id)}
            >
                -
            </span>
            <span className='text-[20px] text-[#999EA6]'>
                {value}
            </span>
            <span className='bg-[#F2F3F4] -pt-0.5 rounded-full w-8 h-8 flex items-center justify-center text-[24px] cursor-pointer text-[#999EA6]'
                onClick={() => onIncrement(id)}
            >
                +
            </span>

        </div>
    );
}
