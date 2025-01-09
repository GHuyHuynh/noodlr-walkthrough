/** @jsxImportSource @emotion/react */
import React from "react"
import { css as emotionCss } from "@emotion/react";

type Position = {
  top: number;
  left: number;
}

type HightlightProps = {
  position: Position;
  width: number;
  height: number;
  type: 'circle' | 'rectangle';
};

const baseStyles = (position: HightlightProps['position'], width: number, height: number) => emotionCss`
  position: fixed;
  top: ${position.top + 10}px;
  left: ${position.left}px;
  width: ${width}px;
  height: ${height}px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
  z-index: -1;
  pointer-events: none;
`;

const circleStyles = (position: HightlightProps['position'], width: number, height: number) => emotionCss`
  ${baseStyles(position, width, height)};
  border-radius: 50%;
`;

const rectangleStyles = (position: HightlightProps['position'], width: number, height: number) => emotionCss`
  ${baseStyles(position, width, height)};
  border-radius: 16px;
`;

export function Hightlight({ position, width, height, type }: HightlightProps) {
  return (
    <div
      css={type === 'circle' ? circleStyles(position, width, height) : rectangleStyles(position, width, height)}
    />
  );
}