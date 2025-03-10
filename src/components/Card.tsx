import { CardProps } from "../interfaces/cardProps"

const Card = ({Title}: CardProps) => {
  return (
    <div className="border-4 border-double border-blue-500 rounded-lg flex flex-col">
        <h1 className="font-bold text-xl">{Title}</h1>
        <div>
            <div>Элемент 1</div>
            <div>Элемент 2</div>
            <div>Элемент 3</div>
        </div>
    </div>
  )
}

export default Card