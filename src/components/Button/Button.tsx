'use client'

import cn from 'classnames'
import styles from './Button.module.scss'
import { IButton } from '@/types/Button'

export function Button({ children, className, theme, ...props }: IButton) {
  return (
    <button
      type="button"
      className={ cn(
        styles.button,
        { [styles.iconLeft]: theme === 'iconLeft' },
        { [styles.iconRight]: theme === 'iconRight' },
        className,
      ) }
    >
      {children}
    </button>
  )
}
