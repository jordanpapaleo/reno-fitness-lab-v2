export type Option = {
  label: string
  value: string
}

export type Submit = React.SyntheticEvent<HTMLFormElement>
export type Change = React.ChangeEvent<HTMLInputElement>
export type KeyPress = React.KeyboardEvent<HTMLInputElement>
export type TextareaChange = React.ChangeEvent<HTMLTextAreaElement>
export type SelectChange = React.ChangeEvent<HTMLSelectElement>
export type FocusChange = React.FocusEvent<HTMLInputElement>
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type ServerAction = (formData: FormData) => Promise<never>
