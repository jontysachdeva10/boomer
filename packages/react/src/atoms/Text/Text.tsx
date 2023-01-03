import React from "react";
import { FontSizes } from "@boomer/foundation";

interface TextProps {
  size?: keyof typeof FontSizes,
  content: string
}

const Text: React.FC<TextProps> = ({ size = FontSizes.base, content }) => {
  const className = `bmr-text bmr-text-${size}`;
  return <p className={className}>{content}</p>;
};

export default Text;
