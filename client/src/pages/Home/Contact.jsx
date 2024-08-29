import React, { useEffect } from 'react'
import Sectiontitle from '../../components/Sectiontitle'
import { useDispatch, useSelector } from 'react-redux';
import { getcontact } from '../../redux/contactSlice';

const Contact = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getcontact(10));
  }, [dispatch]);

  const {portofolioData,loading1,error1}=useSelector((state)=>state.god);
  const {contact}=portofolioData;
  let name1='';
  let email="";
  let mobile="";
  let address="";
  
 if (!loading1 && portofolioData && portofolioData.contact) {
  name1 =contact.name;
   email = contact.email;
   mobile=contact.mobile;
    
    address=contact.address;
    
   // lastName = intro.lastName;
   
  //  console.log(description1);
}

  return (
    <div >

      <Sectiontitle title="Say Hello"/>
      <div className="flex justify-between ">
        <div>
      <h1 className='text-white pb-[5px]'>{'{' }</h1>
    
        <h1 className='pb-[5px]' >
            <span className="text-white">{"name"}</span>: <span className="text-white">{name1}</span>
        </h1>
        <h1 className='pb-[5px]' >
            <span className="text-white">{"email"}</span>: <span className="text-white">{email}</span>
        </h1>
        <h1 className='pb-[5px]' >
            <span className="text-white">{"mobile"}</span>: <span className="text-white">{mobile}</span>
        </h1>
        <h1 className='pb-[5px]' >
            <span className="text-white">{"address"}</span>: <span className="text-white">{address}</span>
        </h1>
      
      

       <h1 className='text-white pb-[5px]'>{'}'} </h1>
       </div>
       <div className='h-[200px] w-[300px]'>
       <dotlottie-player  src="https://lottie.host/f65ea343-b2e8-4aee-aec6-b7c4bb3aca3c/yn1unlMvTo.json" background="transparent"   speed="1" ></dotlottie-player>
       </div>
    </div>
    </div>
  )
}

export default Contact
