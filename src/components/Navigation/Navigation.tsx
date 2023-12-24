import Link from 'next/link'
import { INav, INavItem } from '@/types/Navigation'
import styles from './Navigation.module.scss'

export function Navigation({ nav }: INav) {
  return (
    <nav className={ styles.navigation }>
      {nav.map((item: INavItem, index) => (
        <Link className={ styles.link } key={ index } href={ item.link }>
          {item.text}
        </Link>
      ))}
    </nav>
  )
}
