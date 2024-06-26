import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h1 className="text-xl font-bold " style={{ color: "var(--blue-color)" }}>
    {title}
  </h1>
);

export default Title;
