import React, { createContext, useContext, useReducer } from 'react'

const cartStateContext = createContext()
const cartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id, CategoryName: action.CategoryName, img: action.img,
                name: action.name, price: action.price, qty: action.qty, size: action.size, orderDate:new Date().toDateString()
            }]
            break;
        case "Remove":
            let newArr =[...state]
            newArr.splice(action.index,1)
            return newArr;
            
        case "DROP":
            let empArray =[]
            return empArray
        default:
            console.log("error in reducer")
            break;
    }
}
export const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, []);
    return (
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);