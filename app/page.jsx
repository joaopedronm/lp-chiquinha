'use client'

import React from 'react'
import { AiOutlineFileDone } from "react-icons/ai"
import { Button } from '@/components/ui/button'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'

const Home = () => {

  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between pt-4 xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Bem-vindos a minha página!</span>
            <h1 className='h2 mb-6'>
              Meu nome é <br /> <span className='text-accent'>Chiquinha do Pixica</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-primary/80 text-lg leading-8'>
              Vereadora eleita e primeira secretária da Câmara Municipal de Itarema-CE, trabalho com dedicação para trazer melhorias e desenvolvimento para nossa cidade.
            </p>

            {/* button and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
                onClick={() => {}}
              >
                <span>Conheça meus projetos</span>
                <AiOutlineFileDone className='text-xl' />
              </Button>

              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300' />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home