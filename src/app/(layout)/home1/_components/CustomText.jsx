import React from 'react'


const H1 = ({children, className})=>{
    return(
        <h1 className={`text-5xl font-bold text-hack-100 ${className}`}>{children}</h1>
    )
}

const H2 = ({children, className})=>{
    return(
        <h2 className={`text-4xl font-bold text-hack-100 ${className}`}>{children}</h2>
    )
}

const H3 = ({children, className})=>{
    return(
        <h3 className={`text-3xl font-semibold text-hack-100 ${className}`}>{children}</h3>
    )
}

const H4 = ({children, className})=>{
    return(
        <h4 className={`text-2xl font-semibold text-hack-100 ${className}`}>{children}</h4>
    )
}

const H5 = ({children, className})=>{
    return(
        <h5 className={`text-xl font-semibold text-hack-100 ${className}`}>{children}</h5>
    )
}

const P = ({children, className})=>{
        return(
        <p className={`text-base font-normal text-hack-100 ${className}`}>{children}</p>
    )
}


const Title = ({content, className})=>{
    const arr = content.split(' ')
    return(
        <h1 className={`text-5xl font-bold ${className}`}>
            <span className='text-hack-100 merriweather italic'>{arr[0]} </span>
            <span className='text-accent-100'>{arr[1]} </span>
            <span className='text-hack-100 highlight'>{arr[2]} </span>
            {
                arr.map((_, index)=>{
                    if(index>2){
                        return(
                            <span key={index} className='text-hack-100 '>{_}</span>
                        )
                    }
                })
            }
        </h1>
    )
}
export {H1, H2, H3, H4, H5, P, Title}