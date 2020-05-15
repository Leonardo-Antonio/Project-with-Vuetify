export default {
    namespaced : true ,
    state : {
        listTask : [] ,
        cant : 0
    },
    mutations :{
        addLocalStorage(state){
            const DataTask = JSON.parse(localStorage.getItem('Tasks'))
            if(DataTask === null){
                state.listTask = []
            }else{
                state.listTask = DataTask
            }

            const CantTasks = JSON.parse(localStorage.getItem('CantTasks'))
            if(CantTasks === null){
                state.cant = 0
            }else{
                state.cant = CantTasks
            }
        },
        addListArray(state , data){
            state.listTask.push({
                Task    : data ,
                Estado  : false 
            })
            localStorage.setItem('Tasks' , JSON.stringify(state.listTask))

            state.cant++ 
            localStorage.setItem('CantTasks' , JSON.stringify(state.cant))
        },
        deleteTask(state , index){
            state.listTask.splice(index , 1)
            localStorage.setItem('Tasks' , JSON.stringify(state.listTask))

            state.cant--
            localStorage.setItem('CantTasks' , JSON.stringify(state.cant))
        },
        cambioEstado(state , index) {
            if(state.listTask[index].Estado === false){
                state.listTask[index].Estado = true
            }else{
                state.listTask[index].Estado = false
            }
            localStorage.setItem('Tasks' , JSON.stringify(state.listTask))
        }
    }   
}