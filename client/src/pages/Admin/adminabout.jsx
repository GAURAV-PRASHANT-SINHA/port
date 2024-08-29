import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getabout, postabout } from "../../redux/aboutSlice";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portofolioData, loading1, error1 } = useSelector((state) => state.prashant);
  const { about } = portofolioData;

  const [aboutData, setAboutData] = useState({
    lottieURL: "",
    description1: "",
    description2: "",
    skills: "",
  });

  // Fetch the about data when the component mounts
  useEffect(() => {
    dispatch(getabout(10));
  }, [dispatch]);

  // Update form values and aboutData when loading is finished and data is fetched
  useEffect(() => {
    if (!loading1 && about) {
      setAboutData({
        lottieURL: about.lottieURL || "",
        description1: about.description1 || "",
        description2: about.description2 || "",
        skills: about.skills || "",
      });
    }
  }, [loading1, about]);

  const onFinish = (values) => {
    const _id = about?._id ;
    dispatch(postabout({ ...values, _id }));
  };

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={aboutData} // Initial values from aboutData state
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <Input
            value={aboutData.lottieURL}
            onChange={(e) => setAboutData({ ...aboutData, lottieURL: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="description1" label="Description 1">
          <Input
            value={aboutData.description1}
            onChange={(e) => setAboutData({ ...aboutData, description1: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="description2" label="Description 2">
          <Input
            value={aboutData.description2}
            onChange={(e) => setAboutData({ ...aboutData, description2: e.target.value })}
          />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <Input
            value={aboutData.skills}
            onChange={(e) => setAboutData({ ...aboutData, skills: e.target.value })}
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

export default AdminAbout;
