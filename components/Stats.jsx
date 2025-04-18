'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
  {
    num: 2,
    text: "Years of experience"
  },
  {
    num: 15,
    text: "Tools and frameworks"
  },
  {
    num: 48,
    text: "Clients served"
  },
  {
    num: 657,
    text: "Coffee cups (and counting)"
  },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-12'>
      <div className="container mx-auto">
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((item, index) => {
            return (
              <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                <CountUp
                  end={item.num}
                  duration={3} 
                  delay={1}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p
                  className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats