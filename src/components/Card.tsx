import React from "react"
import { CardProps } from "../interfaces/cardProps"

const Card: React.FC<CardProps> = ({Title}) => {
  return (
    <div className="border-4 border-double border-blue-500 rounded-lg flex flex-col items-start space-y-2 p-2">
        <h1 className="font-bold text-xl">{Title}</h1>
        <div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem natus, accusantium repudiandae expedita, odio dolor quos labore sapiente perspiciatis quibusdam odit! Odio officia numquam perferendis soluta possimus dicta eveniet.</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eligendi asperiores blanditiis voluptates quibusdam suscipit nulla a cum. Veritatis quae fugiat, minus pariatur culpa hic accusamus ipsam impedit eius fuga?</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam, tempora aspernatur asperiores, excepturi recusandae corrupti omnis commodi assumenda, non perspiciatis quam facere voluptas impedit cumque nisi cupiditate dolores quia!</div>
        </div>
    </div>
  )
}

export default Card