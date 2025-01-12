/** @jsxImportSource @emotion/react */
import React from "react"
import { css as emotionCss } from "@emotion/react";

type Position = {
  top: number;
  left: number;
}

type HighlightProps = {
  position: Position;
  width: number;
  height: number;
  type: 'circle' | 'rectangle';
  translateTop: number;
  translateLeft: number;
};

const baseStyles = (
  position: HighlightProps['position'],
  width: number,
  height: number,
  translateTop: number,
  translateLeft: number
) => 
  emotionCss`
  position: fixed;
  top: ${position.top + translateTop}px;
  left: ${position.left + translateLeft}px;
  width: ${width}px;
  height: ${height}px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
  z-index: -1;
  pointer-events: none;
`;

const circleStyles = (
  position: HighlightProps['position'],
  width: number,
  height: number,
  translateTop: number,
  translateLeft: number
) => emotionCss`
  ${baseStyles(position, width, height, translateTop, translateLeft)};
  border-radius: 50%;
`;

const rectangleStyles = (
  position: HighlightProps['position'],
  width: number,
  height: number,
  translateTop: number,
  translateLeft: number
) => emotionCss`
  ${baseStyles(position, width, height, translateTop, translateLeft)};
  border-radius: 8px;
`;

export function Highlight({ position, width, height, type, translateTop, translateLeft }: HighlightProps) {
  return (
    <div
      css={type === 'circle' ? 
        circleStyles(position, width, height, translateTop, translateLeft) : 
        rectangleStyles(position, width, height, translateTop, translateLeft)}
    />
  );
}