import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiAzuredevops, SiTailwindcss, SiTerraform} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import { FaAws, FaBlender, FaGoogle, FaJenkins, FaMicrosoft, FaNodeJs, FaUnity } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaAndroid } from 'react-icons/fa'


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaMicrosoft className='text-6xl text-white-500'/> 
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAndroid className='text-6xl text-black-500'/>
                </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-6xl text-black-500'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGoogle className='text-6xl text-black-500'/>
                </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTerraform className='text-6xl text-green-500'/>
                </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJenkins className='text-6xl text-pink-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAzuredevops className='text-6xl text-red-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-500'/>
                </div>
    </div>
    </div>
  )
}

export default Technologies;