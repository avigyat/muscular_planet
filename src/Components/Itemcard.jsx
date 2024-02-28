import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatchCart,useCart } from './ContextReducer'

const Itemcard = (props) => {
  const navigate = useNavigate();
  let dispatch = useDispatchCart();
  let options = props.Options;
  let priceOptions = Object.keys(options);
  const priceRef = useRef();
  let flavours = props.flavours
  

  let items = props.items;
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  const [flavour, setflavour] = useState("unflavoured");
  let data = useCart();
  
  
  let handleview = ()=>{
    console.log("viewed")
    navigate('/details')
  }
  let handleShop = async()=>{
    
    if((localStorage.getItem('email') === null || localStorage.getItem('email') === 'null' || localStorage.getItem('email') === 'undefined' || localStorage.getItem('token') === undefined)) 
    {alert("Please log in first")
  navigate('/signin')
  }else{
    await dispatch({type:"ADD",id:props.items._id,CategoryName:props.items.CategoryName,img:props.items.img,
    name:props.items.name,price:finalPrice,qty:qty,size:size,img2:props.items.img2,flavour:flavour})
    console.log(data)}
  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);
  return (
    <div>
       <section>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner " id="carousel">
             
              <div className="carousel-item active" >
                <img
                  src={items.img}
                  className=" w-full  "
                  style={{  height: "300px", objectFit: "fill" }}
                  alt="..."
                />
              </div>
              
              <div className="carousel-item" >
                <img
                  src={items.img2}
                  className=" w-full"
                  style={{  height: "300px", objectFit: "fill" }}
                  alt="..."
                />
              </div>
           
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-slate-800 text-white">
     
       
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{items.name}</div>
          <p className=" text-base">{items.description}</p>
        </div>
        <select
          className="m-2 h-100 rounded bg-success"
          onChange={(e) => setqty(e.target.value)}
        >
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <select
          className="m-2 h-100 rounded bg-success"
          onChange={(e) => setsize(e.target.value)}
          ref={priceRef}
        >
          {priceOptions.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <select
          className="m-2 h-100 rounded bg-success"
          onChange={(e) => setflavour(e.target.value)}
          
        >
          {flavours.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <button onClick={handleview}
        className="m-2 h-100 rounded bg-success px-2"
        >
          View Details
        </button>
        <div>₹{finalPrice}/-</div>
        <hr className="4px bg-white " />
        <div className="container flex flex-col my-2">
          <button
            className="btn btn-success rounded center"
            onClick={handleShop}
          >
            Add to cart
          </button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{items.CategoryName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
