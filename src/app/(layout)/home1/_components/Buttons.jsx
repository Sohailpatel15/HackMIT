// import { cn } from "@/lib/utils"
import clsx from "clsx"

const Button = ({ children, className, variant }) => {
    const variantClass =
        variant === 'primary' ? 'bg-accent-100 text-hack-100' :
            variant === 'secondary' ? 'bg-hack-100 text-white' :
                'bg-transparent border border-hack-100 text-hack-100'
    return (
        <button className={clsx('flex w-fit py-2 px-6 rounded-full hover:scale-105 transition-all duration-500 gap-3', className, variantClass)}>{children}</button>
    )
}

export default Button


export const ButtonWtIcon = ({children, className, icon, iconClassName, iconPosition}) => {
    return (
        <button className='flex w-fit py-2 px-6 rounded-full items-center transition-all duration-500 bg-hack-100 text-white pointer-events-auto group'>
            {
                iconPosition === 'left' && <span className={clsx(' w-0 overflow-hidden bg-hack-100  text-white rounded-md  group-hover:w-6 group-hover:mr-2 transition-all duration-500', iconClassName)}>{icon}</span>
            }
            {children}
            {
                iconPosition === 'right' && <span className={clsx(' w-0 overflow-hidden bg-hack-100  text-white rounded-md  group-hover:w-6 group-hover:ml-2 transition-all duration-500', iconClassName)}>{icon}</span>
            }
        </button>
    )
}


export const IconButton = ({children, className, variant}) => {
    const variantClass =
        variant === 'primary' ? 'bg-accent-100 text-hack-100' :
            variant === 'secondary' ? 'bg-hack-100 text-white' :
                'bg-transparent border border-hack-100 text-hack-100'
    return (
        <button className={clsx('flex p-2 aspect-square w-fit rounded-full hover:scale-105 transition-all duration-500 gap-3', className, variantClass)}>{children}</button>
    )
}