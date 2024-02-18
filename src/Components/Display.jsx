import React, { useState } from "react";
import "./Styles.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import ShowData from "./ShowData";

const Display = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: null,
    email: "",
    password: "",
    state: "",
    city: "",
  });
  const makeRequest = (data) => {
    console.log("form submitted", data);
  };

  const handleNext = (newData, final = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(formData);
    }
    setPage((prev) => prev + 1);
  };
  const handlePrev = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev - 1);
  };
  const display = () => {
    switch (page) {
      case 1:
        return <Form1 next={handleNext} formData={formData} />;
      case 2:
        return (
          <Form2 next={handleNext} prev={handlePrev} formData={formData} />
        );
      case 3:
        return (
          <Form3 next={handleNext} prev={handlePrev} formData={formData} />
        );
      default:
        return <ShowData formData={formData} />;
    }
  };
  return (
    <div className="display">
      <div className="title">
        <h3>MultiStepForm</h3>
      </div>

      {page <= 3 ? (
        <div className="counter">
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <span
                key={index}
                id="count"
                className={page === index + 1 ? "colored" : "ncolored"}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="form">{display()}</div>
    </div>

    // </div>
  );
};

export default Display;
