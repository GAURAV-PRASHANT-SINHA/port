import React from 'react'

const Sectiontitle = ({title}) => {
  return (
    <div className='flex  items-center  gap-10 py-10'>
     <h1 className="text-2xl text-tertiary ">{title}</h1>
      <div className="w-60 h-[1px] bg-tertiary "></div> 
    </div>
  )
}

export default Sectiontitle
