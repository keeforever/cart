import {createContext,useContext,useReducer,useEffect} from 'react';
import products from "./data"
import reducer from './reducer'
const AppContext=createContext()

const defaultState={
  total:0,
  count:0,
  products:products
}

const AppProvider= ({children}) => {
const [state,dispatch]=useReducer(reducer,defaultState)

  // add cart
  const addCart=(id)=>{
    dispatch({type:'ADD_CART',payload:id})
    dispatch({type:'CALC_TOTAL'})

  }
  // remove cart
  const removeCart=(id)=>{
    dispatch({type:'REMOVE_CART',payload:id})
    dispatch({type:'CALC_TOTAL'})

    
  }
  // remove product
  const removeProduct=(id)=>{
    dispatch({type:'REMOVE_PRODUCT',payload:id})
    dispatch({type:'CALC_TOTAL'})

  }
  // clear cart
  const clearCart=()=>{
    dispatch({type:'CLEAR_CART'})
    dispatch({type:'CALC_TOTAL'})

    
  }
  useEffect(() => {
    dispatch({type:'CALC_TOTAL'})

  }, [])
  return (
    <AppContext.Provider
    value={
      {
        addCart,
        removeCart,
        removeProduct,
        clearCart,
        state
      }
    }
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {useGlobalContext}
export default AppProvider;

