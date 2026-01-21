import ChatOnline from '@/components/dashboard/ChatOnline'
import CirclesCard from '@/components/dashboard/CircleCard'
import RecentActivities from '@/components/dashboard/RecentActivities'
import StoriesEmbla from '@/components/dashboard/Stories'
import FeedList from '@/components/feed/FeedList'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:p-8 p-4 h-screen'>

      <div className='col-span-2 space-y-4 overflow-y-auto hide-scrollbar'>

      <StoriesEmbla />
      <FeedList />
      </div>
      <div className='col-span-1 hidden lg:block space-y-8 overflow-y-auto hide-scrollbar mb-20'>
        <RecentActivities />
        <ChatOnline />
        <CirclesCard />
      </div>
    </div>
  )
}

export default page
