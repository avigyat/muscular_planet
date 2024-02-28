import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart, useDispatchCart } from './ContextReducer';

const Cart = () => {
    const navigate = useNavigate();
    let orderdata = useCart();
    let useremail = localStorage.getItem('email')
    let dispatch = useDispatchCart();
    console.log("data from reducers", orderdata.length)


    const host = "http://localhost:4000/";
    const handleCheckout =async(e)=>{
        e.preventDefault();//synthetic event
        
        const response = await fetch(`${host}history/orderData`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
      
            headers: {
              "Content-Type": "application/json"
      
            }, body: JSON.stringify({ email:useremail,data:orderdata})
          });
          console.log(orderdata)
          const json = await response.json()
          const status =  response.status
          console.log("Response", response)
          if(status === 200){
            dispatch({type:"DROP"})
          }
          console.log(json);
    }

    if (orderdata.length === 0) {
        return (
            <div>
                <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                                                    <Link to={'/'}
                                                        className="font-medium text-indigo-600 hover:text-indigo-500 ">
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </Link>
                                                </h2>
                                                <div className="ml-3 flex h-7 items-center">
                                                    Nothing in your cart
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={'/'}
                                    className="font-medium text-indigo-600 hover:text-indigo-500 ">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
    let totalPrice = orderdata.reduce((total, food) => total + food.price, 0)
    return (
        <div>
            <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">

                                            </div>
                                        </div>



                                        {orderdata.map((food, index) => (


                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        <li className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={food.img} />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <p>{food.name}</p>
                                                                        </h3>
                                                                        <p className="ml-4">{food.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">{food.qty}</p>

                                                                    <div className="flex">
                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => { dispatch({ type: "Remove", index: index }) }}>
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>{totalPrice}/-</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <button onClick={handleCheckout}
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <Link to={'/'}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 ">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart