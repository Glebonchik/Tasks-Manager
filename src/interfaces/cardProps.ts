export interface CardProps {
    id: string,
    title: string,
    tasks: {id: string, content: string, }[]
}