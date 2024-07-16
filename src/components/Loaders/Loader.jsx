import React from 'react'

export default function Loader() {
    return (
        <div className='w-full h-screen bg-green-300 flex items-center justify-center flex-col z-40 relative'>
            <span className='size-16 rounded-full border-green-500 border-[4px] border-t-green-950 animate-spin' />
            <div className='text-3xl animate-bounce'>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <h2 className='animate-pulse text-green-950 font-bold'>The Learning Code</h2>

        </div>
    )
}
