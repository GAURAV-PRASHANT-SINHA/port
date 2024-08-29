import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./adminintro";
import AdminAbout from "./adminabout";
import Experiences from "./adminexperiences";
import Projects from "./adminprojects";
import AdminContact from "./admincontact";

import { useDispatch, useSelector } from "react-redux";
import { logoutAction, resetSuccAction } from "../../redux/userSlice";

const { TabPane } = Tabs;
function Admin() {
  const handleLogout = () => {
    dispatch(logoutAction(25)); // Dispatch the logout action, you can pass an argument if needed
  };


  const dispatch = useDispatch();
  // useEffect(()=>{dispatch(resetSuccAction(12))},[])
  const { error, loading, userInfo } = useSelector(
    (state) => state.use.userAuth
  );

  useEffect(() => {
    console.log("jugjkjbjklijhuouipgkk");
    if (!userInfo?.userFound) {
console.log("jugjkjgkk");
      window.location.href = "/login";
    }
  }, [userInfo]);
//   const { portfolioData } = useSelector((state) => state.root);

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       window.location.href = "/admin-login";
//     }
//   }, []);

  return (
    <div>
      <Header />
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center">
        <button
       onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
       
        <div className="px-5 pb-10 pt-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro/>
            </TabPane>
            <TabPane tab="About" key="2">
        <AdminAbout/>
            </TabPane>
            <TabPane tab="Experiences" key="3">
            <Experiences/>
            </TabPane>
            <TabPane tab="Projects" key="4">
              <Projects/>
            </TabPane>
           
            <TabPane tab="Contact" key="6" >
              <AdminContact/>
            </TabPane>
        
          </Tabs>
        </div>
      
    </div>
    
       )}

export default Admin;