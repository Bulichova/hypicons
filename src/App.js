import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Pages</h1>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
