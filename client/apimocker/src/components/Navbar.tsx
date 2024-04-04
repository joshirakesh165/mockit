import './Navbar.scss'

interface PropType {
  toggleSideBar: () => void
  switchMode: (chekbox: any) => void
  sideBarState: boolean
}
const Navbar = (props: PropType) => {
  return (
    <nav>
      <div>
        <div className='logo'>
          <h1>{`{`}</h1>
          <h2 style={{marginTop:'31px'}}>...api</h2>
          <h1 className='logo-text'>Mocker</h1>
          <h1>{`...}`}</h1>
        </div>
        {/* <div>
          <img src="/api-mocker-logo.svg" alt="" />
        </div> */}
        <div className={`container ${!props.sideBarState ? 'change' : ''}`} onClick={props.toggleSideBar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className='switch'>
        <input type="checkbox" onClick={props.switchMode} id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
      </div>
    </nav>
  )
}

export default Navbar
