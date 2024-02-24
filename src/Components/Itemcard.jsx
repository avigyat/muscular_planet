import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from './ContextReducer';

const Itemcard = (props) => {
  let dispatch = useDispatchCart();
  let options = props.Options;
  let priceOptions = Object.keys(options);
  const priceRef = useRef();

  let items = props.items;
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  let data = useCart();
  let handleShop = async () => {
    await dispatch({
      type: "ADD",
      id: props.items._id,
      CategoryName: props.items.CategoryName,
      img: props.items.img,
      name: props.items.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-slate-800 text-white">
        <img
          className="w-full"
          src={items.img}
          style={{ height: "200px", objectFit: "fill" }}
          alt="..."
        />
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
