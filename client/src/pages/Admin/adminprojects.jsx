import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input,message } from "antd";
import './adminproject.css'
import axios from "axios";

import { getproject ,delproject,updateproject,postproject} from "../../redux/projectSlice";

function Projects() {

  const [introData, setIntroData] = useState({
    image: "",
    link: "",
    title: "",
  description: "",
  description2:"",
  description3:"",
  description4:"",
  description5:""
  });
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] =useState("");
  const onFinish = async (values) => {
    
      if (selectedItemForEdit) {

let _id=selectedItemForEdit._id;
         await dispatch(updateproject({...values ,  _id : _id}))
      }  
      else{
        await dispatch(postproject({ ...values}));
         
      }
setShowAddEditModal(false);
dispatch(getproject(10));  

   
    } 
  
const onDelete = async(project)=>{
  let _id = project._id;
  await dispatch(delproject({_id: _id}));
  dispatch(getproject(10));  
}




  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getproject(10));
  }, []);

let projects =[];
  const { portofolioData,loading1,err } = useSelector((state) => state.death);
  if (!loading1 && portofolioData&&!showAddEditModal) {
    console.log("it all comes to this ");
  projects= portofolioData.projects;
  }
 








 return (
    <div>
      <div className="yes1">
        <button className= " bat1 bg-primary px-5 py-2 text-white"   onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}>Add Projects</button>
       <div className="sup1 ">
        {projects.map((project) => (
          <div className="parent1 shadow border border-gray-400">
            <h1 className="text-primary text-xl font-bold">
              {project.title}
            </h1>
            <hr />
            <div className="sma">
            <img src={project.image} className='h-40 w-40' alt="" />
            <div className="handle">
            <h1>{project.description}</h1>
            <h1>{project.description2}</h1>
            <h1>{project.description3}</h1>
            <h1>{project.description4}</h1>
            <h1>{project.description5}</h1>
            </div>
            </div>
            <h1>Link : {project.link}</h1>
           
        
  <div class="child1">
    <button class="bg-red-500 text-white px-5 py-2"   onClick={() => {
                  onDelete(project);
                }}>Delete</button>
    <button class="bg-primary text-white px-5 py-2"   onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                
                }}>Edit</button>
  
</div>
          </div>
        ))}
        
      
</div>
</div>


<Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
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
           <Form.Item name="image" label="Image Link">
          <Input
            value={introData.image}
            onChange={(e) => setIntroData({ ...introData, image: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <Input
            value={introData.title}
            onChange={(e) => setIntroData({ ...introData, title: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="link" label="Link">
          <Input
            value={introData.link}
            onChange={(e) => setIntroData({ ...introData, link: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input
            value={introData.description}
            onChange={(e) => setIntroData({ ...introData, description: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="description2" label="Description 2">
          <Input
            value={introData.description2}
            onChange={(e) => setIntroData({ ...introData, description2: e.target.value })}
          />
        </Form.Item>
        
        <Form.Item name="description3" label="Description 3">
          <Input
            value={introData.description3}
            onChange={(e) => setIntroData({ ...introData, description3: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="description4" label="Description 4">
          <Input
            value={introData.description4}
            onChange={(e) => setIntroData({ ...introData, description4: e.target.value })}
          />
        </Form.Item>


        <Form.Item name="description5" label="Description 5">
          <Input
            value={introData.description5}
            onChange={(e) => setIntroData({ ...introData, description5: e.target.value })}
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

export default Projects;