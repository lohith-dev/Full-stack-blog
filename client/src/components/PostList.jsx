import React from 'react'
import PostsListItem from './PostsListItem'

function PostList() {
  return (
    <div className='flex flex-col gap-12 mb-8'>
        <PostsListItem/>
        <PostsListItem/>
        <PostsListItem/>
        <PostsListItem/>
        <PostsListItem/>
        <PostsListItem/>
        <PostsListItem/>
    </div>
  )
}

export default PostList