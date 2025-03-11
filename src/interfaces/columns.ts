
interface Task{
    id: string,
    content: string
}

interface Column{
    id: string,
    title: string,
    tasks: Task[]
}

export interface BoardState{
    columns: Column[]
}