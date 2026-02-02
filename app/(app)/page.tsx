import StoriesEmbla from '@/components/dashboard/Stories'
import CreatePostTrigger from '@/features/createPost/components/CreatePostTrigger'
import PostActions from '@/features/createPost/components/PostAction'
import FeedList from '@/features/feed/FeedList'
import React from 'react'

const page = () => {
  return (

      <div className='space-y-8'>

      <StoriesEmbla />
      
      {/* Create Post Section */}
      <div className='cursor-text rounded-2xl space-y-8 border border-white/10 bg-black/40 p-6'>
      <CreatePostTrigger />
      <hr  className='h-0.1 w-[95%] mx-auto bg-gray-700'/>
      <PostActions />
      </div>
      <FeedList />
      </div>
  )
}

export default page
