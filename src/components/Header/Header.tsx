import { Logo } from '@/components/index'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={ styles.header }>
      <div className='container'>
        <Logo />
      </div>
    </header>
  )
}
