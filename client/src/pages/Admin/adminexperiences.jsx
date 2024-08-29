import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input,message } from "antd";
import './adminexperience.css'
// import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { delxp, getexperience, postexperience, updateexp } from "../../redux/experienceSlice";

function Experiences() {

  const [introData, setIntroData] = useState({
    period: "",
    title: "",
    company: "",
  description: "",
  description2:""
  });
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] =useState("");
  const { portofolioData,loading1,err } = useSelector((state) => state.sinha);
  const onFinish = async (values) => {
    
      if (selectedItemForEdit) {

let _id=selectedItemForEdit._id;
console.log("girsy");
         await dispatch(updateexp({...values ,  _id : _id}))
         console.log("girsy2");
         if(!loading1)
         {
          console.log("seond");
          await message.success("done");
         
          console.log("seond2");
         }
      }  
      else{
        await dispatch(postexperience({ ...values}));
         
      }
      setShowAddEditModal(false);
      dispatch(getexperience(10));
;  

   
    } 
  
const onDelete = async(experience)=>{
  let _id = experience._id;
  await dispatch(delxp({_id: _id}));
  dispatch(getexperience(10));  
}




  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getexperience(10));
  }, []);

let experiences =[];
  
  if (!loading1 && portofolioData&&!showAddEditModal) {
    console.log("it all comes to this ");
  experiences= portofolioData.experiences;
  }
 


  return (<div>
    <div className="yes">
      <button className= " bat bg-primary px-5 py-2 text-white"   onClick={() => {
          setSelectedItemForEdit(null);
          setShowAddEditModal(true);
        }}>Add Experience</button>
     <div className="sup ">
      {experiences.map((experience) => (
        <div className="parent shadow border border-gray-400">
          <h1 className="text-primary text-xl font-bold">
            {experience.period}
          </h1>
          <hr />
          <h1>Company : {experience.company}</h1>
          <h1>Role : {experience.title}</h1>
          <h1>{experience.description}</h1>
          <h1>{experience.description2}</h1>
      
<div class="child">
  <button class="bg-red-500 text-white px-5 py-2"   onClick={() => {
                onDelete(experience);
              }}>Delete</button>
  <button class="bg-primary text-white px-5 py-2"   onClick={() => {
                setSelectedItemForEdit(experience);
                setShowAddEditModal(true);
              
              }}>Edit</button>

</div>
        </div>
      ))}
      
    
</div>
</div>


<Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}

        footer={null}
         onCancel={() => {
          setShowAddEditModal(false);
          // setSelectedItemForEdit(null);
        }}
      
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit || {}}
        >
         <Form.Item name="period" label="Period">
        <Input
          value={introData.period}
          onChange={(e) => setIntroData({ ...introData, period: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="title" label="Title">
        <Input
          value={introData.title}
          onChange={(e) => setIntroData({ ...introData, title: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="company" label="Company">
        <Input
          value={introData.company}
          onChange={(e) => setIntroData({ ...introData, company: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input
          value={introData.description}
          onChange={(e) => setIntroData({ ...introData, description: e.target.value })}
        />
      </Form.Item>
      
      <Form.Item name="description2" label="Description">
        <Input
          value={introData.description2}
          onChange={(e) => setIntroData({ ...introData, description2: e.target.value })}
        />
      </Form.Item>
      

          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setShowAddEditModal(false);
                
              }}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    
    </div>

);





 
}

export default Experiences;