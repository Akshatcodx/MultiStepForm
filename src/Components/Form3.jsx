import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Form3 = ({ formData, next, prev }) => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: Yup.object({
        state: Yup.string().max(25).min(2).required("pls enter your state"),
        city: Yup.string().required("pls enter your city"),
      }),
      onSubmit: () => {
        next(values, true);
      },
    });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Form3</h3>
        <div className="input">
          <label>State</label>
          <input
            type="text"
            name="state"
            id="state"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.state}
          />
        </div>

        <div className="input">
          <label>City</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          />
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              prev();
            }}
          >
            Previous
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
