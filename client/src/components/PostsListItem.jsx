import React from 'react'
import Image from "./Image";
import { Link } from 'react-router-dom';
function PostsListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
       <div className='md:hidden xl:block xl:w-1/3'>
         <Image src="postImg.jpeg" className="rounded-2xl object-cover "/>
       </div>
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link className='text-4xl font-semibold'>
            Lorem ipsum dolor sit, amet consecteur adipisicing elit. Ullam modi eum aut.
            </Link>
         <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span >Written by</span>
            <Link className='text-blue-800'>John doe</Link>
            <span >on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 Days ago</span>
        </div>
          <p>and below but what about sm and above or i am thinking wrong is it if we dont specifiy anything then it is all sizes or what?</p>
          <Link className='underline text-blue-800 text-sm'>Read more</Link>
        </div>
    </div>
  )
}

export default PostsListItem