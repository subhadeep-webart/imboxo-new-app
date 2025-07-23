import React from "react";

const Loader = () => {
    return <span className="inline-flex items-center gap-[0.25em]">
        <span className="bg-white rounded-full animate-bounce w-2 h-2 aspect-square"></span>
        <span className="bg-white rounded-full animate-bounce w-2 h-2 aspect-square [animation-delay:0.2s]"></span>
        <span className="bg-white rounded-full animate-bounce w-2 h-2 aspect-square [animation-delay:0.4s]"></span>
    </span>

};

export default Loader;
