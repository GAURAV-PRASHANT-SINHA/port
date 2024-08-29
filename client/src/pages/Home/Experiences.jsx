import React, { useEffect } from 'react'
import { useState } from "react";
import Sectiontitle from '../../components/Sectiontitle'
// import { experiences } from '../../resources/experiences.js'
import { getexperience } from '../../redux/experienceSlice.js';
import { useDispatch, useSelector } from 'react-redux';
const Experiences = () => {

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getexperience(10));
  }, [dispatch]);
 
  let experiences =[];
  const { portofolioData,loading1,err } = useSelector((state) => state.sinha);
  if (!loading1 && portofolioData) {
    console.log("it all comes to this ");
  experiences= portofolioData.experiences;
  }
 

 const [selectedItemIndex,setselectedItemIndex]= useState(0);
  return (
    <div>
        <Sectiontitle title ="Experiences"/>
        <div className="flex gap-10 ">
       <div className='flex flex-col gap-10 border-l-2  border-[#135e4c82] w-2/3'>
      { experiences.map((experience,index)=>(
          <div className='cursor-pointer' onClick={()=>{setselectedItemIndex(index)}}>
            <h1 className={`text-xl pl-10 p-5  ${selectedItemIndex===index?'text-tertiary border-l-4 -ml-[3px]  border-[#135e4c82] bg-[#1a7f5a5f]  ':'text-white border-white'}`}>
                {experience.period}
            </h1>
          </div>     
      ))}
       </div>
       {experiences.length > 0 && <div className='flex flex-col gap-5'>
           <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
           </h1>
            <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
            </h1>
            <p className='text-white'>
            {experiences[selectedItemIndex].description}
            </p>
            <p className='text-white'>
            {experiences[selectedItemIndex].description2}
            </p>

        </div>}
        </div>
    </div>
  )
}

export default Experiences
