import Card from "./components/Card"

const App = () => {
  return (
    <div className="flex space-between space-x-3 space">
      <Card Title={"In process"}/>
      <Card Title={"Done"}/>
      <Card Title={"Not done"}/>
    </div>
  )
}

export default App