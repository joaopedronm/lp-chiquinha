import React from 'react'
import { motion } from 'framer-motion'
import { client } from '../lib/sanity'

async function getData() {
  const query = `
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "currentSlug": slug.current
    }
  `

  const data = await client.fetch(query)

  return data
}

const Portfolio = async () => {

  const data = await getData()
  console.log(data)

  return (
    <div
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <h2>Olá</h2>
      </div>
    </div>
  )
}

export default Portfolio