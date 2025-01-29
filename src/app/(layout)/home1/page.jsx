import React from 'react'
import Card, { HorizontalCard } from './_components/Card'
import { H1, H2, H3, H4, H5, P, Title } from './_components/CustomText'
import Button, { ButtonWtIcon, IconButton } from './_components/Buttons'
import { ArrowRight } from 'lucide-react'
import Count, { Counter2 } from './_components/Counter'
import { GridPatternDashed, GridPatternDemo, GridPatternLinearGradient } from './_components/Section'

const page = () => {
    return (
        <div className=''>
            <div className=' flex rounded-3xl overflow-hidden font-bold border w-fit'>
                <div className='bg-hack-100 h-20 text-white flex items-end px-6'>
                    #080073
                </div>
                <div className='bg-hack-300 h-20 text-white flex items-end px-6'>
                    #3029FE
                </div>
                <div className='bg-hack-400 h-20 flex items-end px-6'>
                    #BECBFF
                </div>
                <div className='bg-accent-100 h-20 flex items-end px-6'>
                    #FFD335
                </div>
                <div className='bg-accent-200 h-20 flex items-end px-6'>
                    #FFF0BB
                </div>
                <div className='bg-white h-20 flex items-end px-6'>
                    #FFFFFF
                </div>
            </div>
            <div className='flex gap-4 p-4'>
            <Counter2 />
            <Count bumber={1000} duration={200}/>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4'>
                <Card variant={'primary'}/>
                <Card variant={'secondary'}/>
                <Card variant={'soft'}/>
                <Card />
                <HorizontalCard isGradient={true} />
                <HorizontalCard isGradient={false} />
            </div>
            <GridPatternDemo/>
            <GridPatternLinearGradient/>
            <GridPatternDashed/>
            <div className='flex flex-col space-y-4 p-4'>
                <H1>Events</H1>
                <H2>Upcoming Events</H2>
                <H3>Event 1</H3>
                <H4>Event 2</H4>
                <H5>Event 3</H5>
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quod.</P>
            </div>
            <div className='col-span-2 p-4 my-4'>

                <Title content='Innovate with Purpose ' />
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2 p-4'>
                <Button variant='primary'>
                    Get Started
                </Button>
                <Button variant='secondary'>
                    Get Started
                </Button>
                <Button variant='outline'>
                    Get Started
                </Button>
                <Button variant='outline'>
                    Get Started <ArrowRight />
                </Button>

                <ButtonWtIcon icon={<ArrowRight />} iconPosition='right'>
                    View all
                </ButtonWtIcon>

                <ButtonWtIcon icon={<ArrowRight />} iconPosition='left'>
                    View all
                </ButtonWtIcon>

                <IconButton variant='primary'>
                    <ArrowRight />
                </IconButton>
                <IconButton variant='secondary'>
                    <ArrowRight />
                </IconButton>
                <IconButton variant='outline'>
                    <ArrowRight />
                </IconButton>
            </div>
        </div>
    )
}

export default page