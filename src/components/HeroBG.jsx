import React from 'react'

const HeroBg = ({ children }) => {
    return (
        <div
            class="absolute antialiased realtive inset-0 h-full w-full bg-primary-900 bg-[radial-gradient(#271BC9_2.5px,transparent_1px)] [background-size:50px_50px]"
        >
            <div className=' absolute w-full flex justify-between'>
                <div className='grid grid-cols-3 w-[432px] h-72'>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>

                </div>
                <div className='grid grid-cols-3 w-[432px] h-72'>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>
                    <div className='w-36 h-36'></div>
                    <div className='w-36 h-36 bg-gradient-to-br from-primary-900/70 to-primary-700/80  transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100'></div>

                </div>
            </div>
            <div className='absolute top-0 left-0 right-0 pointer-events-none'>
                <svg width="1234" height="832" viewBox="0 0 1234 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_3)">
                        <path d="M900.5 159.5C792.5 453 706.787 628.489 560.983 628.489C415.18 628.489 405 481.068 292.5 159.5C185.706 -145.758 276.017 -150.432 662.517 -150.432C1049.02 -150.432 1064 -178.068 900.5 159.5Z" fill="#271BC9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_3" x="0.89563" y="-400.979" width="1248.08" height="1279.47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_3" />
                        </filter>
                    </defs>
                </svg>

            </div>
            <main className='absolute inset-0 w-full h-full z-10'>
            {children}
            </main>
           


        </div>
    )
}

export default HeroBg