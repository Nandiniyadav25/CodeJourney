import React from 'react'

const Card = (props) => {
  return (
   <div>
    <a href={props.elem.url} target="_blank">
            <div className="h-40 w-54 bg-white rounded">
              <img
                className="h-full w-full object-cover rounded "
                src={props.elem.download_url}
              />
            </div>
            <h2 className="font-bold text-lg text-indigo-400">{props.elem.author}</h2>
          </a>
   </div>
  )
}

export default Card