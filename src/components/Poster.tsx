import clsx from 'clsx'
import * as React from 'react'

import { Theme } from '@/types/uiTypes'

/**
 * Props for the Poster component.
 *
 * @typedef {Object} PropT
 * @property {string} path - The path to the background image.
 * @property {Theme} [theme] - Optional theme for the component.
 * @property {React.ReactNode} [children] - Optional children to be rendered inside the component.
 * @property {string} [className] - Optional additional class names.
 * @property {React.CSSProperties} [style] - Optional inline styles.
 */
export type PropT = {
  path: string
  theme?: Theme
}

/**
 * Poster component that displays a full-page background image with optional children.
 * Background image can be positioned by passing a className
 * ex: className="bg-[50%_0%]" will position the image 50% from the left and 0% from the top.
 * path is to a folder within the public directory.
 * ex: path="assets/someimage.jpeg"
 *
 * @param {PropT} props - The props for the component.
 * @returns {JSX.Element} The rendered Poster component.
 */
export default function Poster(props: PropT): React.JSX.Element {
  const { children, className = '', path, style = {}, theme } = props

  return (
    <div
      data-theme={theme}
      className={clsx(
        'full-page-image-component h-svh bg-no-repeat bg-cover relative',
        className,
      )}
      style={{
        backgroundImage: `url(/${path})`,
        ...style,
      }}
    >
      <div className="absolute inset-0 bg-secondary-foreground/30" />
      {children}
    </div>
  )
}
