import React from 'react'
import GlobalStyle from './styles/global'
import SignIn from './components/SignIn/SignIn'

const App = () => {
    return (
        <>
            <GlobalStyle/>
              <SignIn title='Nome do App'/>
        </>
    )
}

export default App
