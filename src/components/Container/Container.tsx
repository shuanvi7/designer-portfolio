import cn from 'classnames'
import { IBaseTypes } from '@/types/BaseTypes'
import styles from './Container.module.scss'

export function Container({ children, className }: IBaseTypes) {
  return <div className={ cn(styles.container, className) }>{children}</div>
}
