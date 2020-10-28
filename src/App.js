import axios from "axios"
import { useQuery } from "react-query"
import "./App.css"

function App() {
  const { isLoading, error, data } = useQuery("users", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  )

  if (isLoading) return "Loading..."
  if (error) return "An error has occurred: " + error.message

  console.log(data)

  return (
    <div className="App">
      <h1>React Query</h1>
      {data.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  )
}

export default App
