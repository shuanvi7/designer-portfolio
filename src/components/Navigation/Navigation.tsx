'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import cn from 'classnames'

interface INav {
  nav: INavItem[]
}

interface INavItem {
  text: string
  link: string
}

export function Navigation({ nav }: INav) {
  const pathname = usePathname()

  return (
    <nav className={styles.navigation}>
      {nav.map((item: INavItem, index) => (
        <Link className={cn(styles.link, styles.active)} key={index} href={item.link}>
          {item.text}
        </Link>
      ))}
    </nav>
  )
}
