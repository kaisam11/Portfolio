import React, { useState, useEffect } from 'react';
import Home from './pages/home'
import Loading from './pages/loading'
import Cursor from './components/cursor'
import Menu from './components/menu'
import { useGlobalStateContext, useGlobalDispatchContext } from './globalContext/globalContext'

function App() {
  const { cursorStyle } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const [toggleMenu, setToggleMenu] = useState(false)

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    document.body.style.overflow = "hidden"

    setTimeout(() => {
      setLoading(false)
    }, 4500)   

  }, [])


  return (
    <div className="App">
      <Loading loading={loading} />
      {!loading && <>
        <Home onCursor={onCursor} setToggleMenu={setToggleMenu} />
        <Cursor onCursor={onCursor} />
      </>}
      <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
