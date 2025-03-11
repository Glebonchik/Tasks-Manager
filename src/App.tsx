import { Provider } from "react-redux"
import { store } from "./state/store"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Board from "./components/Board"

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </Provider>
  )
}

export default App