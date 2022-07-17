import { posters } from './posters'
import Poster from './components/Poster'
import StarWarsLogo from './components/StarWarsLogo'

function App() {
  return (
    <section className="relative w-screen min-h-screen 
                      bg-black text-yellow-500 
                      bg-space bg-repeat bg-[length:50vmin] bg-center
                      animate-spaceAnimation duration-[120ms]
                      flex flex-col flex-wrap items-start justify-start">
      <header className="p-4 block w-full">
        <StarWarsLogo />
      </header>
      <main className="flex flex-wrap m-auto w-full">
        <section className="posterContainer">
          {posters.map(poster => <Poster key={poster.title} data={poster} />)}
          {/* <Poster key={posters[0].title} data={posters[0]} /> */}
        </section>
      </main>
    </section>
  )
}

export default App
