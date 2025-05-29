import "./App.css"
import { Card2 } from "./components/myc2"
import { CardWithForm } from "./components/mycard1"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-dvh p-4 gap-8">
        <h1 className="text-3xl font-bold mb-4 hover:text-fuchsia-500 hover:scale-105 transition-all duration-200">
          Smell Panties
        </h1>
        <div className="grid grid-rows-2 grid-cols-1 gap-4">
          <CardWithForm />
          <Card2 />
        </div>
      </div>
    </>
  )
}

export default App
