import React from "react";
import { useGlobalContext } from "./Context";

const Loading = () => {
  const { showDash, showNavbar } = useGlobalContext();
  return (
    <section
      className={`${
        showDash || showNavbar ? `d-none` : ``
      } user-details center`}
    >
      <h1>Loading...</h1>
    </section>
  );
};

export default Loading;
