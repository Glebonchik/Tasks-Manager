export default interface ColumsState{
    columns:{
        [key: string]:{
            id: string,
            title: string,
            taskIds: string[]
        }
    },
    tasks:{
        [key: string]:{id: string, content: string}
    }
}