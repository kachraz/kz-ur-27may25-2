import "./App.css"
import { Card2 } from "./components/myc2"
import { CardWithForm } from "./components/mycard1"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1 className="text-3xl font-bold mb-8 hover:text-fuchsia-500 hover:scale-105 transition-all duration-200">
          Smell Panties
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-6 max-w-full">
          <CardWithForm />
          <Card2 />
        </div>
      </div>
    </>
  )
}

export default App
