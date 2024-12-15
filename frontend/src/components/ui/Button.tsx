import React from "react"

interface ButtonProps{
    title: string,
    onClick?: ()=>void,
    startIcon?: React.ReactNode,
    background?: Boolean,
    full?: Boolean
}

export const Button = ({title, onClick, startIcon, background, full}: ButtonProps) =>{
    return<span className= {`${background ? "bg-blue-600 text-white " : "bg-transparent text-black "}  border-2 border-blue-600 text-md font-semibold rounded-xl flex gap-2 px-6 py-2 cursor-pointer justify-center ${full? "w-full ": "w-fit " } max-w-full`} onClick={onClick}>
            {startIcon}
            {title}
        </span>

}