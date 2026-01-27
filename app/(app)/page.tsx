import StoriesEmbla from '@/components/dashboard/Stories'
import FeedList from '@/components/feed/FeedList'
import React from 'react'

const page = () => {
  return (

      <div className='space-y-8'>

      <StoriesEmbla />
      <FeedList />
      </div>
  )
}

export default page
