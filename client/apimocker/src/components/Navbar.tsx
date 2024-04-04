import './Navbar.scss'

interface PropType {
  toggleSideBar: () => void
  switchMode: (chekbox: any) => void
  sideBarState: boolean
}
const Navbar = (props: PropType) => {
  return (
    <nav>
      <div className={`container ${!props.sideBarState ? 'change' : ''}`} onClick={props.toggleSideBar}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div>
        <img height={25} src="/logo-no-background.svg" alt="api-mocker-logo" />
      </div>
      <div className='switch'>
        <input type="checkbox" onClick={props.switchMode} id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
      </div>
    </nav>
  )
}

export default Navbar
