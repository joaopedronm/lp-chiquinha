'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Blog = () => {

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-4 py-4'>
        <div className="mb-12 text-center w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900 -mb-14">Em breve...</h1>
            <Image src='/assets/soon.png' alt='Web illustrations by Storyset' width={600} height={200} />
            <a href="https://storyset.com/work" className='-mt-24 text-sm'>Work illustrations by Storyset</a>
        </div>



      </div>
    </section>
  )
}

export default Blog