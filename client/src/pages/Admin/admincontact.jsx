import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getcontact, postcontact } from "../../redux/contactSlice";


const AdminContact = () => {
  const dispatch = useDispatch();
  const { portofolioData, loading1, error1 } = useSelector((state) => state.god);
  const {contact} = portofolioData;

  const [contactData, setContactData] = useState({
    name:"",
    email:"",
    mobile:"",
    age:"",
    address:"",
    gender:""
  });

  // Fetch the about data when the component mounts
  useEffect(() => {
    dispatch(getcontact(10));
  }, [dispatch]);

  // Update form values and aboutData when loading is finished and data is fetched
  useEffect(() => {
    if (!loading1 && contact) {
      setContactData({
    name: contact.name || "",
        gender: contact.gender || "",
        age: contact.age || "",
        address:contact.address || "",
        mobile:contact.mobile|| "",
        email:contact.email||""
      });
    }
  }, [loading1, contact]);

  const onFinish = (values) => {
    const _id = contact?._id ;
    console.log(_id);
    dispatch(postcontact({ ...values, _id }));
  };

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={contactData} // Initial values from aboutData state
      >
        <Form.Item name="name" label="name">
          <Input
            value={contactData.name}
            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input
            value={contactData.email}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <Input
            value={contactData.age}
            onChange={(e) => setContactData({ ...contactData, age: e.target.value })}
          />
        </Form.Item>
       
        <Form.Item name="gender" label="Gender">
          <Input
            value={contactData.gender}
            onChange={(e) => setContactData({ ...contactData, gender: e.target.value })}
          />
        </Form.Item>
        
        <Form.Item name="mobile" label="Mobile">
          <Input
            value={contactData.mobile}
            onChange={(e) => setContactData({ ...contactData, mobile: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="address" label="Address">
          <Input
            value={contactData.address}
            onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            SAVE
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminContact;
