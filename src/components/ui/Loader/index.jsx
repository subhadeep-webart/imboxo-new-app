import React from "react";

const Loader = ({ size = "md" }) => {
    return <span className={`loading loading-dots loading-${size}`}></span>;
};

export default Loader;
