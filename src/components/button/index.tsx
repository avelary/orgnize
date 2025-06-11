import * as S from './style'
import type { ButtonHTMLAttributes } from 'react'
import type { LinkProps, NavLinkProps } from 'react-router'

export enum ButtonVariations {
  DEFAULT = 'default',
  EXIT = "exit",
  ANCHOR = 'anchor',
}

type ButtonProps = {
  children: React.ReactNode
  variation?: ButtonVariations
} & (ButtonHTMLAttributes<HTMLButtonElement> | NavLinkProps & React.RefAttributes<HTMLAnchorElement>)

export const Button = ({ children, variation = ButtonVariations.DEFAULT, ...rest }: ButtonProps) => {
  if (variation === ButtonVariations.ANCHOR) {
    return <S.Anchor $variation={variation} {...rest as  LinkProps & React.RefAttributes<HTMLAnchorElement>}>{children}</S.Anchor>
  }

  return <S.Button $variation={variation} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</S.Button>
}
