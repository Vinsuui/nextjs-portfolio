import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#00A8CC]" : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#00A8CC] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#00A8CC] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
