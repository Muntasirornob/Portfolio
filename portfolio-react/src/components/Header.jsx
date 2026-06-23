import { Link } from 'react-router'
import '../styles/components/Header.css'

export function Header({
  brandText = 'Muntasir',
  activePage = '',
}) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="site-brand" to="/" aria-label="Go to home">
          {brandText}<span className="brand-dot">.</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link to="/about" aria-current={activePage === 'about' ? 'page' : undefined}>
            About
          </Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/achievements" aria-current={activePage === 'achievements' ? 'page' : undefined}>
            Achievements
          </Link>
          <Link to="/contact" aria-current={activePage === 'contact' ? 'page' : undefined}>
            Contact
          </Link>
          
        </nav>

        <Link className="button button--primary site-header-cta" to="/contact">
          Hire me
        </Link>
      </div>
    </header>
  )
}