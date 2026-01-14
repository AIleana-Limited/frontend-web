import React from 'react'
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='w-full mt-8 p-2'>
    <div className='max-w-7xl bg-white rounded-4xl gap-10 md:p-16 p-8 mx-auto flex lg:flex-row flex-col justify-between items-center'>
       <div data-hero-left className="space-y-6 w-full">
            {/* Badge */}
            <div className="inline-flex max-w-md rounded-full border border-[#C7A55C] bg-[#F5E4AF] px-4 py-2 text-xs font-medium text-black/70">
              The Future Of Social Commerce
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-[42px] font-medium leading-[1.05] text-[#1D1F21] md:text-[64px]">
                Where Social <br />
                Interaction <br />
                Becomes Income
              </h1>

              <p className="md:max-w-xl w-full text-sm leading-relaxed text-[#1D1F21] md:text-base">
                Aileana is the first social network where every post, chat, and
                live session can generate income. Powered by AIVA AI, your
                social activity becomes your revenue stream.
              </p>
            </div>

            {/* Email */}
            <div className="grid grid-cols-3 w-full items-center gap-3">
              <Input
                placeholder="Enter your email"
                className="h-12 rounded-full  col-span-2 max-w-lg border-black/10 bg-white/60 px-5"
              />
              <button className="h-12 max-lg:w-20 rounded-full  bg-primary
               text-white inline-flex gap-1 items-center justify-center">
                <span className='lg:block hidden'>Get early access</span><ArrowRight />
              </button>
            </div>
          </div>

      <div className='w-full'>
    
      </div>
    </div>
    </section>
  )
}

export default Hero
