export default {
    namespaced : true , 
    state : {
        listActivity : [],
        cant : 0
    },
    mutations : {
        addLocalStorage(state){
            const DataAct = JSON.parse(localStorage.getItem('DataAct'))
            if(DataAct === null){
                state.listActivity = []
            }else{
                state.listActivity = DataAct
            }

            const CantAct = JSON.parse(localStorage.getItem('CantAct'))
            if(CantAct === null){
                state.cant = 0
            }else{
                state.cant = CantAct
            }
        },
        addListArray(state , data ) {
            state.listActivity.push({
                Activity : data ,
                Estado : false 
            })
            localStorage.setItem('DataAct' , JSON.stringify(state.listActivity))

            state.cant++
            localStorage.setItem('CantAct' , JSON.stringify(state.cant))
        },
        deleteActivity(state , index ){
            state.listActivity.splice(index ,1)
            localStorage.setItem('DataAct' , JSON.stringify(state.listActivity))

            state.cant--
            localStorage.setItem('CantAct' , JSON.stringify(state.cant))
        },
        cambioEstado(state , index){
            if(state.listActivity[index].Estado === false){
                state.listActivity[index].Estado = true
            }else{
                state.listActivity[index].Estado = false
            }

            localStorage.setItem('DataAct' , JSON.stringify(state.listActivity))
        }
    }
}