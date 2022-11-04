const reducer=(state,action)=>{


  switch (action.type) {

    case "ADD_CART":
     const addCart=state.products.map((item)=>{
        if(action.payload===item.id){
          return {...item,amount:item.amount+1}
        }
        return item
     })

      return {...state,products:addCart,total:state.total,count:state.count}

  
    case "REMOVE_CART":
      const removeCart=state.products.map((item)=>{
        if(action.payload===item.id){
          return {...item,amount:item.amount-1}
        }
        return item
     })
      return {...state.products,count:state.count,products:removeCart.filter(({amount})=>amount!==0),total:state.total}

    case "REMOVE_PRODUCT":
      const tempCart=state.products.filter(({id})=>id!==action.payload)
      return {...state,products:tempCart,total:state.total,count:state.count}

    case "CLEAR_CART":
      return {...state,products:[]}
    case "CALC_TOTAL":
      const calcTotal=state.products.reduce((total,{amount,price})=>{
        return total+amount*price
      },0)
      const cartCount=state.products.reduce((total,{amount})=>{
        return total+amount
      },0)

    return {...state,total:calcTotal.toFixed(2),count:cartCount}
    default:
      throw new Error('no match found')
  }
}

export default reducer;