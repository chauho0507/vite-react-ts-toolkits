import "./App.css"
import { privateRoutes } from "@routes/private"
import { publicRoutes } from "@routes/public"
import { useRoutes } from "react-router-dom"

function App() {
  const allRoutes = useRoutes([...publicRoutes, ...privateRoutes])
  return <div className="App">{allRoutes}</div>
}

export default App
