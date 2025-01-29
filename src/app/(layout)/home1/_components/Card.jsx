import clsx from 'clsx'
import { LightbulbIcon } from 'lucide-react'
import React from 'react'

const Card = ({ imgUri, title, subtitle, rotation, variant }) => {
    const variantClass =
        variant === 'primary' ? 'bg-hack-100 text-white' :
            variant === 'secondary' ? 'bg-accent-100 text-hack-100' :
                variant === 'soft' ? 'bg-hack-400 text-hack-100' : 'bg-gray-200 text-hack-100'
    return (
        <div className={`rounded-3xl relative h-fit aspect-[5/6] overflow-hidden rotate-${rotation} group `}>
            <img
                className=' object-cover w-full'
                src={imgUri || 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg'} alt="" />
            <div className={clsx('flex flex-col p-6 rounded-b-3xl group-hover: absolute bottom-0 ', variantClass)}>
                <h3 className='font-semibold text-2xl mb-2 group-hover:text-[26px] group-hover:my-4 transition-all duration-500'>{title || 'Title goes here'}</h3>
                <p className='font-medium text-sm'>{subtitle || 'Lorem ipsum, dolor sit amet consectetur adipisicing eli ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
        </div>
    )
}

export const HorizontalCard = ({ imgUri, title, subtitle, rotation, isGradient }) => {
    return (
        <div className={` relative rounded-3xl aspect-[16/10] h-fit overflow-hidden bg-hack-100 rotate-${rotation} ${isGradient && 'bg-gradient-to-r from-hack-100 to-hack-300 group '} `}>

            <img
                className='rounded-full aspect-square object-cover w-28 h-28 absolute top-4 right-4 group-hover:w-28 group-hover:h-32 transition-all :'
                src={imgUri || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" />


            <div className='flex flex-col p-4 absolute bottom-0 left-0'>
                <div className='p-2 w-fit bg-accent-200/40 rounded-full aspect-square mb-2'>
                    <LightbulbIcon className='text-accent-100' />
                </div>
                <h3 className='font-bold text-2xl my-2 text-white'>{title || 'Title goes here'}</h3>
                <p className='font-medium text-sm text-white'>{subtitle || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
        </div>
    )
}
export default Card