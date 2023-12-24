import { ButtonHTMLAttributes } from "react"

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'iconLeft' | 'iconRight'
}
