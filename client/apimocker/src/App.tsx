import { useEffect, useState } from 'react';
import './App.scss'
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import HowToUse from './components/HowToUse';
import Document from './components/Documentations/Document';
import generateDataForUI from './utils/APIUtil';

function App() {
  const [sideBarState, setSideBarState] = useState(true)

  const toggleSideBar = () => {
    setSideBarState(sideBarState => sideBarState = !sideBarState)
  }


  const switchMode = (chekbox: any) => {
    if (chekbox.currentTarget.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  let initialData: any[] = []
  const [apiInfo, setAPIInfo] = useState(initialData)

  useEffect(() => {
    let apiInfo = generateDataForUI();
    setAPIInfo(apiInfo);
  }, [])



  return (
    <>
      <Navbar switchMode={switchMode} sideBarState={sideBarState} toggleSideBar={toggleSideBar} />
      <section className='content-wrapper'>
        <SideBar sideBarState={sideBarState} toggleSideBar={toggleSideBar} apiInfo={apiInfo}></SideBar>
        <section id="content" className={!sideBarState ? 'hide' : 'show'}>
          <main>
            <HowToUse />
            <Document apiInfo={apiInfo} />
          </main>
        </section>

      </section>

    </>
  )
}

export default App
