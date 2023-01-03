import React from "react";
import { Spacing } from "@boomer/foundation";

interface MarginProps {
  space?: string,
  children: any,
  top?: boolean,
  right?: boolean,
  bottom?: boolean,
  left?: boolean
}

const Margin: React.FC<MarginProps> = ({space = 'none', children, left, right, top, bottom}) => {
  let className = ``;

  if(!left && !right && !top && !bottom) className = `bmr-margin-${space}`;

  if(left) className = `${className} bmr-margin-left-${space}`
  if(top) className = `${className} bmr-margin-top-${space}`
  if(bottom) className = `${className} bmr-margin-bottom-${space}`
  if(right) className = `${className} bmr-margin-right-${space}`

  return <div className={className}>{children}</div>;
};

export default Margin;
