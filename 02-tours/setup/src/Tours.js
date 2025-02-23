import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((item) => {
          return <Tour key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
