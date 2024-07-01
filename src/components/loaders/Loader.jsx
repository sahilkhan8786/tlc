import React from 'react'

export default function Loader() {
    return (
        <div className='w-full h-screen bg-blue-400 flex items-center justify-center flex-col'>
            <span className='size-16 rounded-full border-blue-500 border-[4px] border-t-blue-950 animate-spin' />
            <div className='text-3xl animate-bounce'>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <h2 className='animate-pulse text-blue-950 font-bold'>The Learning Code</h2>

        </div>
    )
}
