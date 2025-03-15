import { useState } from "react";
import { useAppSelector } from "../hooks/stateHooks"
import Card from "./Card"
import { useDispatch } from "react-redux";
import { appendCard } from "../state/card/cardStore";

const Board = () => {
    const [formStatus, setFormStatus] = useState(false);
    const [newCardName, setNewCardName] = useState("");
    const dispatch = useDispatch();
    const columns = useAppSelector((state) => state.tasks.columns);

    const handleAppendCard = () =>{
              if (newCardName.trim() !== ""){
                dispatch(appendCard({title: newCardName}));
                setNewCardName("");
                setFormStatus(false);
            }
    }

  return (
    <div className="flex flex-wrap space-x-4 p-4">
      {columns.map((column) => (
        <Card
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
      <div className="flex items-center justify-center">
        <button onClick={() => setFormStatus(true)} className="text-3xl border-1 rounded-lg cursor-pointer ">+</button>
      </div>
      {formStatus && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAppendCard();
                }}
              >
                <input
                  type="text"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  placeholder="Введите оглавление карточки"
                  className="border-2 border-gray-300 p-2 mb-2 w-full"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-[0.75em] rounded border-1 p-1 bg-green-200"
                  >
                    Добавить
                  </button>
                  <button
                    type="button"
                    className="text-[0.75em] rounded border-1 p-1 ml-2 bg-gray-200"
                    onClick={() => setFormStatus(false)}
                  >
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          )}
    </div>
  )
}

export default Board