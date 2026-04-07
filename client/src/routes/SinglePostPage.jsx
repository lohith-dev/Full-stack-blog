import React from 'react'
import { Link } from 'react-router-dom';
import Image from "../components/Image";
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
function SinglePostPage() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-3/5  flex flex-col gap-8'>
             <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit, amet consecteur adipisicing elit. Ullam modi eum aut.
            </h1>
              <div className='flex items-center gap-2 text-gray-400 text-sm'>
                  <span >Written by</span>
                  <Link className='text-blue-800'>John doe</Link>
                  <span >on</span>
                  <Link className='text-blue-800'>Web Design</Link>
                  <span>2 Days ago</span>
              </div>
               <p className='text-gray-500 font-medium' >and below but what about sm and above or i am thinking wrong is it if we dont specifiy anything then it is all sizes or what?</p>
          </div>
          <div className='hidden lg:block w-2/5'>
            <Image src="postImg.jpeg" className="rounded-2xl object-cover "/> 
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='lg:text-lg flex flex-col gap-6 text-justify'>
            <p>
              The sun dipped below the horizon, painting the sky in shades of orange and purple.
              A small bird landed on the windowsill, chirping softly in the fading light.
              The city streets buzzed with life as people hurried home after a long day.
              Raindrops began to patter gently against the glass, filling the room with a calming rhythm.
              She opened the old journal, its yellowed pages filled with forgotten memories.
              A cool breeze drifted through the open door, carrying the scent of fresh rain.
              The mountain stood tall in the distance, its peak hidden behind thick clouds.
              Children laughed in the park, chasing each other across the green grass.
              The aroma of freshly baked bread filled the air, making everyone’s mouth water.
              Somewhere far away, a train’s whistle echoed through the quiet night.
            </p>
<p>
              The sun dipped below the horizon, painting the sky in shades of orange and purple.
              A small bird landed on the windowsill, chirping softly in the fading light.
              The city streets buzzed with life as people hurried home after a long day.
              Raindrops began to patter gently against the glass, filling the room with a calming rhythm.
              She opened the old journal, its yellowed pages filled with forgotten memories.
              A cool breeze drifted through the open door, carrying the scent of fresh rain.
              The mountain stood tall in the distance, its peak hidden behind thick clouds.
              Children laughed in the park, chasing each other across the green grass.
              The aroma of freshly baked bread filled the air, making everyone’s mouth water.
              Somewhere far away, a train’s whistle echoed through the quiet night.
            </p>
            <p>
              The sun dipped below the horizon, painting the sky in shades of orange and purple.
              A small bird landed on the windowsill, chirping softly in the fading light.
              The city streets buzzed with life as people hurried home after a long day.
              Raindrops began to patter gently against the glass, filling the room with a calming rhythm.
              She opened the old journal, its yellowed pages filled with forgotten memories.
              A cool breeze drifted through the open door, carrying the scent of fresh rain.
              The mountain stood tall in the distance, its peak hidden behind thick clouds.
              Children laughed in the park, chasing each other across the green grass.
              The aroma of freshly baked bread filled the air, making everyone’s mouth water.
              Somewhere far away, a train’s whistle echoed through the quiet night.
            </p>

               <p>
              The sun dipped below the horizon, painting the sky in shades of orange and purple.
              A small bird landed on the windowsill, chirping softly in the fading light.
              The city streets buzzed with life as people hurried home after a long day.
              Raindrops began to patter gently against the glass, filling the room with a calming rhythm.
              She opened the old journal, its yellowed pages filled with forgotten memories.
              A cool breeze drifted through the open door, carrying the scent of fresh rain.
              The mountain stood tall in the distance, its peak hidden behind thick clouds.
              Children laughed in the park, chasing each other across the green grass.
              The aroma of freshly baked bread filled the air, making everyone’s mouth water.
              Somewhere far away, a train’s whistle echoed through the quiet night.
            </p>
          </div>
          <div className='px-4 h-max sticky top-8'>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Author</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-8'>
              <Image
               src="userImg.jpeg"
               className="w-12 h-12 rounded-full object-cover" w="48" h="48"
               ></Image>
               <Link className='text-blue-800'>Joen Doe</Link>
                 </div>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex gap-2'>
                  <Link><Image src="facebook.svg"/></Link>
                  <Link><Image src="instagram.svg"/></Link>
                  </div>
               </div>
          
            <PostMenuActions/>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
              <Link className='underline'>All</Link>
                <Link className='underline' to="/">Web Desgin</Link>
                <Link className='underline' to="/">Devlopment</Link>
                <Link className='underline' to="/">Databases</Link>
                <Link className='underline' to="/">Search Engines</Link>
                <Link className='underline' to="/">Marketing</Link>
                <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
                <Search/>
            </div>
          </div>
        </div>
        <Comments/>
    </div>
  )
}

export default SinglePostPage