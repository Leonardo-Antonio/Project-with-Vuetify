export default {
    namespaced : true ,
    state : {
        listMarket : [] , 
        cant : 0
    },
    mutations : {
        addLocalStorage(state){
            const DataMarket = JSON.parse(localStorage.getItem('DataMarket') )
            if(DataMarket === null){
                state.listMarket = []
            }else{
                state.listMarket = DataMarket
            }

            const CantProduct = JSON.parse(localStorage.getItem('CantProduct') )
            if(CantProduct === null){
                state.cant = 0
            }else{
                state.cant = CantProduct
            }
        },
        addListArray(state , data){
            state.listMarket.push({
                Product : data ,
                Estado  : false
            })
            localStorage.setItem('DataMarket' , JSON.stringify(state.listMarket))

            state.cant++
            localStorage.setItem('CantProduct' , JSON.stringify(state.cant))
        },
        deleteProduct(state , index){
            state.listMarket.splice(index , 1)
            localStorage.setItem('DataMarket' , JSON.stringify(state.listMarket))

            state.cant--
            localStorage.setItem('CantProduct' , JSON.stringify(state.cant))
        },
        cambioEstado(state , index){
            if(state.listMarket[index].Estado === false){
                state.listMarket[index].Estado = true
            }else{
                state.listMarket[index].Estado = false
            }
            localStorage.setItem('DataMarket' , JSON.stringify(state.listMarket))
        }
    }
}