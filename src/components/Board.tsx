import { useAppSelector } from "../hooks/stateHooks"
import Card from "./Card"

const Board = () => {
    const columns = useAppSelector((state) => state.tasks.columns);

  return (
    <div className="flex space-x-4 p-4">
      {columns.map((column) => (
        <Card
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
    </div>
  )
}

export default Board