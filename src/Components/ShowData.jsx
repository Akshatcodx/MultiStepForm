import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";

const ShowData = ({ formData }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(load, 2000);
  }, []);
  const load = () => {
    setLoading(false);
  };
  return (
    <div>
      {loading ? (
        <SpinnerCircular size={200} />
      ) : (
        <div>
          <h1>Name: {formData.name}</h1>
          <h2>Age: {formData.age}</h2>
          <h2>Email: {formData.email}</h2>
          <h2>State: {formData.state}</h2>
          <h2>City: {formData.city}</h2>
        </div>
      )}
    </div>
  );
};

export default ShowData;
