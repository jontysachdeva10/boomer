import React from 'react';
import { Spacing } from '@boomer/foundation';

interface ColorProps {
    hexCode: string,
    height?: keyof typeof Spacing,
    width?: keyof typeof Spacing
}

const Color:React.FunctionComponent<ColorProps> = ({ hexCode, height = Spacing.sm, width = Spacing.sm }) => {
  const className = `bmr-width-${width} bmr-height-${height}`
  return (
    <div style={{
        backgroundColor: hexCode,
    }} className={className}></div>
  )
}

export default Color;