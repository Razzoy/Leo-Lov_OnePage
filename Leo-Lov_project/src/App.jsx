import './App.css'
import { Nav } from './components/Nav/Nav'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Main } from './components/Main/Main'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Main>
        <Card />
      </Main>
    </>
  )
}

export default App
