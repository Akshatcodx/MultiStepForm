import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form2 = ({ next, prev, formData }) => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: formData,
      validationSchema: Yup.object({
        email: Yup.string().email().required("pls enter your email"),
        password: Yup.string()
          .required("pls enter your password")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
      }),
      onSubmit: (values) => {
        next(values, false);
      },
    });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Form2</h3>

        <div className="input">
          <label>Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : ""}
        </div>

        <div className="input">
          <label>Password</label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password ? <p>{errors.password}</p> : ""}
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
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
