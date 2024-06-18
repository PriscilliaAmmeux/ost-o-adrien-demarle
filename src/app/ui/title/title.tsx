import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  Icon?: IconType; // Icon is still optional
}

const Title: React.FC<TitleProps> = ({ title, Icon }) => (
  <div className="flex items-center mb-4">
    {Icon && <Icon className=" text-xl mr-2" />}
    <h1 className="text-xl font-bold">{title}</h1>
  </div>
);

export default Title;
