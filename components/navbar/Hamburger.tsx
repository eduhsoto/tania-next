import { NavHamburger } from '@/styles/styled-components/navbar/Hamburger'

export const Hamburger = ({
  handleClick,
  clicked,
}: HamburgerProps): JSX.Element => {
  return (
    <NavHamburger>
      <div
        onClick={handleClick}
        className={`nav__hamburger ${clicked ? 'active' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </NavHamburger>
  )
}

export default Hamburger

interface HamburgerProps {
  handleClick: React.MouseEventHandler<HTMLDivElement>
  clicked: boolean
}
