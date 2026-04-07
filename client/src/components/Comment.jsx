import React from 'react'
import Image from "./Image";
function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <div className='mt-4'>
                <p>
                   The sun dipped below the horizon, painting the sky in shades of orange and purple.
              A small bird landed on the windowsill, chirping softly in the fading light.
              The city streets buzzed.
                </p>
        </div>
    </div>
  )
}

export default Comment