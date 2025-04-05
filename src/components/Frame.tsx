import clsx from 'clsx'
import { JSX } from 'react'

/**
 * Props for the Frame component.
 *
 * @typedef {Object} Props
 * @property {string} [classNameTop] - Optional additional class names for the top frame.
 * @property {string} [classNameBottom] - Optional additional class names for the bottom frame.
 */
type Props = {
  classNameTop?: string
  classNameBottom?: string
}

/**
 * Frame component that displays two bordered frames with customizable class names.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The rendered Frame component.
 */
export default function Frame(props: Props): JSX.Element {
  const {
    classNameTop = 'border-seconday',
    classNameBottom = 'border-primary',
  } = props
  return (
    <>
      <div
        className={clsx(
          `absolute top-12 bottom-12 left-12 right-12 border-t-8 border-l-8 border-r-8 ${classNameTop}`,
        )}
      />
      <div
        className={clsx(
          `absolute top-[70%] bottom-12 left-12 right-12 border-b-8 border-l-8 border-r-8 ${classNameBottom}`,
        )}
      />
    </>
  )
}
