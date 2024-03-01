import React, { useEffect, useState } from 'react'



const Orderhistory = () => {
    const [orderData, setorderData] = useState({})
    
    const email = localStorage.getItem('email')

    const fetchMyOrder = async () => {
        console.log("fetchorder email: ",localStorage.getItem('email'))
        await fetch("http://localhost:4000/orderHistory/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email
            })
        }).then(async (res) => {
            let response = await res.json()
            console.log("fetch orderdata:",response)
            setorderData(response)

        })

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

  return (
    <div>
        
        <div className='conatainer'>
                <div className='row'>

                    {console.log(orderData,"order data here")}
                    {orderData.length !==0 ? Array(orderData).map(data => {
                        console.log('returned data',data)
                        return (
                            /* `data.orderData` is checking if the `orderData` property exists in the
                            `data` object. If it exists, it means that there is order data available
                            for that particular `data` object. */
                            
                            data.order_data
                            ?

                                data.order_data.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            console.log("array data here",arrayData)
                                            let img = arrayData.img
                                            return (
                                                <div  >
                                                    {arrayData.img ? <div className='m-auto mt-5'>

                                                    <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" >
                                                                <img src={img} className="card-img-top" alt="..." style={{  height: "250px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title inline text-center px-2 bg-red-300 rounded">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' >
                                                                        <span className='px-2 h-100 rounded bg-success'>QTY:{arrayData.qty}</span>
                                                                        <span className='px-2 m-2 h-100 rounded bg-success'>Size:{arrayData.size}</span>
                                                                        <span className='px-2 h-100 rounded bg-success'>{arrayData.flavour}</span>
                                                                        <hr/>
                                                                        <span className='px-2 h-100 rounded bg-success'>Date:{arrayData.orderDate}</span>
                                                                        <hr/>
                                                                        <div className='px-2 d-inline  h-100 w-20 fs-5 bg-red-300 rounded' >
                                                                            ₹{arrayData.price}/-
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>  
                                                        {console.log("img",arrayData.img)}
                                                        
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) :"fff"
                        )
                    }) :
                    <div><h1 className="w-100 text-center m-5">Oops! You don't have any Orders!</h1></div>
                    }
                </div>


            </div>

    </div>
  )
}

export default Orderhistory