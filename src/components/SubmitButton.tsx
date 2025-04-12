'use client'

import { type ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'

type Props = ComponentProps<typeof Button> & {
  pendingText?: string
}

export default function SubmitButton({
  children,
  pendingText,
  ...props
}: Props) {
  const { pending, action } = useFormStatus()

  const isPending = pending && action === props.formAction

  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </Button>
  )
}
