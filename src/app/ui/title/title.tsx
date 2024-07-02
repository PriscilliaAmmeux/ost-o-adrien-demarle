import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  Icon?: IconType; // Icon is still optional
  style: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ title, Icon, style }) => (
  <div className="flex items-center mb-4">
    {Icon && (
      <Icon className=" text-xl mr-2" style={{ color: "var(--white-color)" }} />
    )}
    <h1 className="text-xl font-bold uppercase " style={style}>
      {title}
    </h1>
  </div>
);

export default Title;
