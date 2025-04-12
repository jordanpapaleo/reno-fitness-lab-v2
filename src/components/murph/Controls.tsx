import React from 'react'

import Button from '../Button'

export default function Controls({
  label,
  max,
  field,
  iterations,
  onComplete,
  updateProgress,
  disabled,
}: {
  label: string
  max: number
  field: string
  iterations: number[]
  onComplete: (name: string, isComplete: boolean) => void
  updateProgress: (field: string, value: number) => void
  disabled: boolean
}) {
  const [value, setValue] = React.useState(0)
  const [complete, setComplete] = React.useState(false)

  React.useEffect(() => {
    if (value >= max) {
      setComplete(true)
      onComplete(field, true)
    }
  }, [value])
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <strong className="text-xl">
          {label} {complete && 'DONE'}
        </strong>
        <strong>
          {value} out of {max}
        </strong>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {iterations.map((i: number) => {
          return (
            <Button
              key={i}
              outline
              disabled={disabled || complete}
              onClick={() => {
                setValue(value + i)
                updateProgress(field, i)
              }}
            >
              +{i}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
