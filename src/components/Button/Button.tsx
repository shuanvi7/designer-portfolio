'use client'

import cn from 'classnames'
import styles from './Button.module.scss'
import Image from 'next/image'

import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'icon-left' | 'icon-right'
}

export function Button({ children, className, theme, type = 'button', ...props }: IButton) {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        { [styles['icon-left']]: theme === 'icon-left' },
        { [styles['icon-right']]: theme === 'icon-right' },
        className
      )}
      {...props}
    >
      {theme === 'icon-left' && (
        <Image width={24} height={24} src="/images/icons/phone-solid.svg" alt="" />
      )}
      {children}
    </button>
  )
}
