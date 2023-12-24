import Link from "next/link"
import { ILogo } from "@/types/Logo"
import styles from './Logo.module.scss'

export function Logo({ text }: ILogo) {
  return <Link className={ styles.logo } href="/">{text}</Link>
}
