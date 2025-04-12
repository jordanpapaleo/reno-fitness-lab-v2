'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { format } from 'date-fns'
import { validate } from 'email-validator'
import { get } from 'lodash'
import React from 'react'

import Controls from './Controls'
import { TOTAL_PROGRESS, Todo, formatMilliseconds } from './helpers'
import Button from '../Button'
import Checkbox from '../form/Checkbox'
import Input from '../form/Input'

const maxValues = {
  [Todo.firstMile]: 200,
  [Todo.pullups]: 100,
  [Todo.pushups]: 200,
  [Todo.squats]: 300,
  [Todo.lastMile]: 200,
}

export default function Tracker() {
  const supabase = createClientComponentClient()
  const [completion, setCompletion] = React.useState(0)
  const [complete, setComplete] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [started, setStarted] = React.useState(false)
  const [timer, setTimer] = React.useState(0)
  const [user, setUser] = React.useState(null)
  const [validEmail, setValidEmail] = React.useState(false)

  const [todo, setTodo] = React.useState([
    Todo.firstMile,
    Todo.pullups,
    Todo.pushups,
    Todo.squats,
    Todo.lastMile,
  ])

  const [progress, setProgress] = React.useState<{
    [key in Todo]: number
  }>({
    [Todo.firstMile]: 0, // 200
    [Todo.pullups]: 0, // 0 - 100
    [Todo.pushups]: 0, // 0 - 200
    [Todo.squats]: 0, // 0 - 300
    [Todo.lastMile]: 0, // 200
  })

  React.useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        console.log()
        setTimer((t) => t + 1000)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [started])

  React.useEffect(() => {
    const score = Object.values(progress).reduce((curr, next) => {
      return curr + next
    }, 0)
    setCompletion(score)
  }, [progress])

  const startMurph = () => {
    setStarted(true)
  }

  const finishMurph = async () => {
    setStarted(false)
    setComplete(true)

    const { data, error } = await supabase
      .from('murph')
      .update({ complete: true })
      // @ts-expect-error
      .eq('id', user.id)
      .select()
  }

  const handleCompleteStage = (name: string, isComplete: boolean) => {
    setTodo(todo.filter((t) => t !== name))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validEmail || !name) {
      return false
    } else {
      const { data, error } = await supabase
        .from('murph')
        .insert([{ name, email }])
        .select()

      console.log(data)

      // @ts-expect-error
      setUser(data[0])
    }
  }

  const updateProgress = async (field: string, value: number) => {
    // @ts-expect-error
    let nextValue = progress[field] + value
    nextValue = nextValue > 0 ? nextValue : 0
    // @ts-expect-error
    nextValue = nextValue > maxValues[field] ? maxValues[field] : nextValue

    setProgress({
      ...progress,
      [field]: nextValue,
    })

    const { data, error } = await supabase
      .from('murph')
      .update({ [field]: nextValue, total_time: formatMilliseconds(timer) })
      // @ts-expect-error
      .eq('id', user.id)
      .select()
  }

  const validateEmail = (emailString: string) => {
    setValidEmail(validate(emailString))
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {user ? (
        <>
          <strong className="text-xl">
            Competing as {get(user, 'name', '')}
          </strong>

          <div className="grid grid-cols-2 gap-4 text-lg">
            <span>Duration: {formatMilliseconds(timer)}</span>
            <span>
              Completion: {Math.round((completion / TOTAL_PROGRESS) * 100)}%
            </span>
          </div>
          {complete === false && (
            <>
              <Button onClick={startMurph} disabled={started}>
                Start
              </Button>

              <Checkbox
                disabled={timer === 0}
                label="Run first 1 mile"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleCompleteStage(Todo.firstMile, true)
                    updateProgress(Todo.firstMile, 200)
                  } else {
                    setTodo([...todo, Todo.firstMile])
                    updateProgress(Todo.firstMile, -200)
                  }
                }}
              />

              <Controls
                field={Todo.pullups}
                iterations={[1, 2, 3, 5, 10]}
                label="Pullups"
                disabled={timer === 0}
                max={maxValues[Todo.pullups]}
                onComplete={handleCompleteStage}
                updateProgress={updateProgress}
              />
              <Controls
                field={Todo.pushups}
                iterations={[3, 5, 10, 15, 20]}
                label="Pushups"
                disabled={timer === 0}
                max={maxValues[Todo.pushups]}
                onComplete={handleCompleteStage}
                updateProgress={updateProgress}
              />
              <Controls
                field={Todo.squats}
                iterations={[10, 15, 20, 25, 30]}
                label="Squats"
                disabled={timer === 0}
                max={maxValues[Todo.squats]}
                onComplete={handleCompleteStage}
                updateProgress={updateProgress}
              />

              <Checkbox
                disabled={timer === 0}
                label="Run last 1 mile"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleCompleteStage(Todo.lastMile, true)
                    updateProgress(Todo.lastMile, 200)
                  } else {
                    setTodo([...todo, Todo.lastMile])
                    updateProgress(Todo.lastMile, -200)
                  }
                }}
              />

              <Button onClick={finishMurph} disabled={todo.length > 0}>
                Finish
              </Button>
            </>
          )}
        </>
      ) : (
        <form className="grid grid-cols-1 gap-4" onSubmit={handleRegister}>
          <Input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            placeholder="Email"
            required
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
          />
          <small>Email is only used for a unique id</small>
          <Button type="submit" disabled={!name || validEmail === false}>
            Compete
          </Button>
        </form>
      )}
    </div>
  )
}
