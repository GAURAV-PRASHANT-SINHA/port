import React, { useEffect } from 'react'
import Sectiontitle from '../../components/Sectiontitle'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproject } from '../../redux/projectSlice';


const Projects = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getproject(10));
  }, [dispatch]);
 
  let projects =[];
  const { portofolioData,loading1,err } = useSelector((state) => state.death);
  if (!loading1 && portofolioData) {
    console.log("it all comes to this ");
  projects= portofolioData.projects;
  }
 

    const [selectedItemIndex,setselectedItemIndex]= useState(0);
  return (
    <div>
    <Sectiontitle title ="Projects"/>
    <div className="flex gap-10 ">
   <div className='flex flex-col gap-10 border-l-2  border-[#135e4c82] w-2/3'>
  {projects.map((project,index)=>(
      <div className='cursor-pointer' onClick={()=>{setselectedItemIndex(index)}}>
        <h1 className={`text-base p-5   ${selectedItemIndex===index?'text-tertiary border-l-4 -ml-[3px]  border-[#135e4c82] bg-[#1a7f5a5f]  ':'text-white border-white'}`}>
            {project.title}
        </h1>
      </div>     
  ))}
   </div>
{projects.length > 0 &&<div className="flex justify-center items-center">
   
   <img src={projects[selectedItemIndex].image} className='h-60 w-60' alt="" />

   <div className='flex flex-col gap-5 pl-5'>
       <h1 className="text-secondary text-xl">
        {projects[selectedItemIndex].title}
       </h1>
        <h1 className="text-tertiary text-xl">
        {projects[selectedItemIndex].company}
        </h1>
        <h1 className='text-white'>
        {projects[selectedItemIndex].description}
        </h1>

        <h1 className='text-white'>
        {projects[selectedItemIndex].description2}
        </h1>

        <h1 className='text-white'>
        {projects[selectedItemIndex].description3}
        </h1>

        <h1 className='text-white'>
        {projects[selectedItemIndex].description4}
        </h1>

        <h1 className='text-white'>
        {projects[selectedItemIndex].description5}
        </h1>
        
    </div>
</div>}
    </div>
</div>
  )
}

export default Projects
