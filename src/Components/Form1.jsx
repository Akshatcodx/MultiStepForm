import React from "react";
import { useFormik } from "formik";
import "./Styles.css";
import * as Yup from "yup";
const Form1 = ({ next, formData }) => {
  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    useFormik({
      initialValues: formData,
      validationSchema: Yup.object({
        name: Yup.string().max(25).min(2).required("pls enter your name"),
        age: Yup.number().required("pls enter your age"),
      }),
      onSubmit: (values) => {
        next(values);
      },
    });

  console.log(values, "valie");
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Form1</h3>
        <div className="input">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : ""}
        </div>

        <div className="input">
          <label>Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
          {errors.age && touched.age ? <p>{errors.age}</p> : ""}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form1;
