import Link from 'next/link'
import styles from './Logo.module.scss'

interface ILogo {
  text: string
}

export function Logo({ text }: ILogo) {
  return (
    <Link className={styles.logo} href="/">
      {text}
    </Link>
  )
}
