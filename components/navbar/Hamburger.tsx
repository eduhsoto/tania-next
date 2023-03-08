import { NavHamburger } from '@/styles/styled-components/navbar/Hamburger'

export const Hamburger = ({
  handleClick,
  clicked,
  clickedLink
}: HamburgerProps): JSX.Element => {
  return (
    <NavHamburger>
      <div
        onClick={handleClick}
        className={`nav__hamburger ${clicked ? 'active' : ''} ${clickedLink ? 'hiddenHam' : ''}`}
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
  clickedLink: boolean
}
