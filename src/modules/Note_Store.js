export default {
    namespaced : true ,
    state : {
        listNotes : [] ,
        cant : 0
    },
    mutations : {
        addLocalStorage(state){
            const DataNote = JSON.parse(localStorage.getItem('DataNote'))
            if(DataNote === null){
                state.listNotes = []
            }else{
                state.listNotes = DataNote
            }

            const CantNote = JSON.parse(localStorage.getItem('CantNote'))
            if(CantNote === null){
                state.cant = 0
            }else{
                state.cant = CantNote
            }
        },
        addListArray(state , data){
            state.listNotes.push({
                Title : data[0] , 
                Note : data[1] ,
                Estado : false
            })
            localStorage.setItem( 'DataNote' , JSON.stringify(state.listNotes) )

            state.cant++
            localStorage.setItem( 'CantNote' , JSON.stringify(state.cant) )
        },
        deleteItem(state , index) {
            state.listNotes.splice(index , 1)
            localStorage.setItem( 'DataNote' , JSON.stringify(state.listNotes) )

            state.cant--
            localStorage.setItem( 'CantNote' , JSON.stringify(state.cant) )
        },
        cambioEstado(state , index){
            if(state.listNotes[index].Estado === true){
                state.listNotes[index].Estado = false
            }else{
                state.listNotes[index].Estado = true
            }
            localStorage.setItem( 'DataNote' , JSON.stringify(state.listNotes) )
        }
        
    }
}