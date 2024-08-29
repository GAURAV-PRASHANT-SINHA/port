import React, { useEffect } from 'react'
import Sectiontitle from '../../components/Sectiontitle'
import { useDispatch, useSelector } from 'react-redux';
import { getabout } from '../../redux/aboutSlice';
const About = () => {

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getabout(10));
  }, [dispatch]);


  const {portofolioData,loading1,error1}=useSelector((state)=>state.prashant);
  const {about}=portofolioData;
  let lottieURL = '';
  let description1='gjyhjty';
 let description2='';
 let skills=[];





 if (!loading1 && portofolioData && portofolioData.about) {
  lottieURL =about.lottieURL;
   description1 = about.description1;
   // lastName = intro.lastName;
   description2 = about.description2;
   skills = about.skills;
  //  console.log(description1);
}


  // const skills =["javascript","React","Node","Express","MongoDB","Firebase"]
  return (
    <div className="flex flex-col w-full justify-center   ">
      <Sectiontitle title ="About"/>
      <div className="flex sm:flex-col">
         <div className="flex flex-col  gap-10 w-1/2 sm:w-full">
         <p className="text-white">{description1}</p>
         {console.log(description1)}
         <p className="text-white">{description2}</p>
         </div>
        <div className="h-[60vh] w-1/2 sm:w-full"><dotlottie-player src="https://lottie.host/9253564d-f7b6-4aef-8049-5ac2d8f7c1d7/9OC1RhHDjE.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
        </div>
        </div>
   <div className="py-5">
    <h1 className="text-tertiary text-2xl">
        The technology that i mostly work on are </h1>
      <div className="flex flex-wrap gap-10 mt-5 sm:grid sm:place-items-center">
        {skills.map((skill,index)=>(
         <div className='border border-tertiary py-3 px-10'>
           <h1 className='text-tertiary'>{skill}</h1>
         </div>
      ))}
            </div>
        </div>
  
    </div> 
  
    
  
  )
}

export default About
