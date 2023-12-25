import { Logo, Container } from '@/components/index'
import styles from './Header.module.scss'
import { data } from '@/data/headerData'
import { Navigation } from '@/components/Navigation/Navigation'
import { Button } from '@/components/Button/Button'

export function Header() {
  return (
    <header className={ styles.header }>
      <Container>
        <div className={ styles.wrapper }>
          <Logo text={ data.logo } />
          <div className={ styles.actions }>
            <Navigation nav={ data.nav } />
            <Button>Book a Call</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
