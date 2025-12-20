import React from 'react'
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
        <h2 className="rounded-full h-10 w-10 text-xl font-bold bg-white text-black flex justify-center items-center">{props.id+1}</h2>
        <div>
          <p className="text-white mb-4 tracking-tighter "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            commodi iste tempore tempora!</p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white rounded-full px-5 py-1 font-medium">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=" text-white rounded-full px-2 py-2 font-medium"><MoveRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent