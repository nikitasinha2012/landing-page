import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoDate = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text:
        " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui facilisis at fringilla quam.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text:
        " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text:
        " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <p className="primary-heading">How It Works</p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoDate.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
