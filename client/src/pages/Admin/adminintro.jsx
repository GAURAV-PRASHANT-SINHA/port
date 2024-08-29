import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getdat, postdat } from "../../redux/rootSlice";

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portofolioData, loading1, error1 } = useSelector((state) => state.gaurav);
  const { intro } = portofolioData;

  const [introData, setIntroData] = useState({
    welcomeText: "admin@gmail.com",
    firstName: "12345",
    lastName: "thytgh",
    caption: "gvyujy",
    description: "vuhikvhk",
  });

  useEffect(() => {
    dispatch(getdat(10));
  }, [dispatch]);

  // const {portofolioData,loading1,error1}=useSelector((state)=>state.gaurav);
  // const {intro}=portofolioData;
  let _id= '';
  if (!loading1 && portofolioData && portofolioData.intro) {
  _id =intro._id;
  }

  // useEffect(() => {
  //   if (intro) {
  //     setIntroData({
  //       welcomeText: intro.welcomeText || "",
  //       firstName: intro.firstName || "",
  //       lastName: intro.lastName || "",
  //       caption: intro.caption || "",
  //       description: intro.description || "",
  //     });
  //   }
  // }, [intro]);

  const onFinish = (values) => {
    dispatch(postdat({ ...values, _id: _id}));
  };
  let x = _id;

  console.log(x);  

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input
            value={introData.welcomeText}
            onChange={(e) => setIntroData({ ...introData, welcomeText: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input
            value={introData.firstName}
            onChange={(e) => setIntroData({ ...introData, firstName: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input
            value={introData.lastName}
            onChange={(e) => setIntroData({ ...introData, lastName: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input
            value={introData.caption}
            onChange={(e) => setIntroData({ ...introData, caption: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea
            rows={4}
            value={introData.description}
            onChange={(e) => setIntroData({ ...introData, description: e.target.value })}
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

export default AdminIntro;
