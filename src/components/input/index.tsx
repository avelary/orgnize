import type { InputHTMLAttributes } from "react"
import * as S from "./style"
import type { FieldValues, Path, UseFormRegister } from "react-hook-form"

type InputProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input<T extends FieldValues>({
  label,
  name,
  register,
  errorMessage,
  ...rest
}: InputProps<T>) {
  return (
    <S.Container>
      <label htmlFor={rest.id}>{label}</label>
      <input id={rest.id} {...register(name)} {...rest} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}
