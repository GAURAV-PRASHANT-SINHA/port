import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getdat } from '../../redux/rootSlice.js';
const Intro = () => {
  // const [state, setState] = useState(false);

  // const updateStateAndReload = () => {
  //   setState(!state);
  //   window.location.reload();
  // };
 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getdat(10));
  }, [dispatch]);
  const {portofolioData,loading1,error1}=useSelector((state)=>state.gaurav);
   const {intro}=portofolioData;
   let welcomeText = '';
   let firstName='';
  let description='';
  let caption='';
  
   if (!loading1 && portofolioData && portofolioData.intro) {
     welcomeText =intro.welcomeText;
      firstName = intro.firstName;
      // lastName = intro.lastName;
      caption = intro.caption;
      description = intro.description;
   }
  // const data1 = JSON.parse(intro);
  // const {intro}= portofolioData;
  

  return (

    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
      {loading1?(<h2>Loadng</h2>):(   <div className="posts-list">
      
        {loading1 ? (
          <h2>Loading...</h2>
        ) : error1 ? (
          <h2 style={{ color: "red" }}>{error1}</h2>
        ) : (
         <h2>{welcomeText}</h2>

          // intro.map((post) => {
          //   return (

          //     <div className="post-details">
          //       <h3>{post.welcomeText}</h3>
          //       <p>{post.welcomeText}</p>
          //     </div>
          //   );
          // })
        )}
         
      </div>  )}
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">{firstName}</h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">{caption}</h1>
     <p className="text-white w-2/3">{description}</p> 
     <button className="border-2 text-white border-tertiary px-10 py-3 ">Get Started</button>
    </div>
  )
}

export default Intro