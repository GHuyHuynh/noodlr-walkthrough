/**
 * Highlight component
 * Create a circle or rectangle highlight on the screen to highlight a specific area
 * Use for creating a spotlight effect on a specific area of the screen
 */

/** @jsxImportSource @emotion/react */
import React from "react"
import { css as emotionCss } from "@emotion/react";

type Position = {
  top: number;
  left: number;
}

/**
 * @param position -> The position of the element to highlight from the DOM
 * @param width -> The width of the highlight
 * @param height -> The height of the highlight
 * @param type -> The type of highlight to create (circle or rectangle)
 * @param translateTop -> The amount to translate the highlight from the top
 * @param translateLeft -> The amount to translate the highlight from the left
 */
type HighlightProps = {
  position: Position;
  width: number;
  height: number;
  type: 'circle' | 'rectangle';
  translateTop: number;
  translateLeft: number;
};

// Base CSS styles for the highlight
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