import React, { useState, useEffect } from "react";
import Card from "../Components/Itemcard";

const Supplement = () => {
  const [search, setsearch] = useState("");
  const [cat, setcat] = useState([]);
  const [items, setitems] = useState([]);
  const host = "http://localhost:4000/api/data/info";

  const loadData = async () => {
    let response = await fetch(`${host}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setitems(response[0]);
    setcat(response[1]);
    //    console.log(items ,"ITEMS")
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {/* //CROUSAL AND SEARCH BAR */}
      <div>
        <section>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner " id="carousel">
              <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                <form className=" d-flex justify-content-center">
                  {" "}
                  {/* justify-content-center, copy this <form> from navbar for search box */}
                  <input
                    className="form-control me-2 w-75 bg-white text-dark"
                    type="search"
                    placeholder="Type in..."
                    aria-label="Search"
                  />
                  <button className="btn text-white bg-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="carousel-item active" style={{ height: "490px" }}>
                <img
                  src="https://source.unsplash.com/random/900x700/?burger"
                  className="d-block w-100  "
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" style={{ height: "490px" }}>
                <img
                  src="https://source.unsplash.com/random/900x700/?pastry"
                  className="d-block w-100 "
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" style={{ height: "490px" }}>
                <img
                  src="https://source.unsplash.com/random/900x700/?barbeque"
                  className="d-block w-100 "
                  style={{ filter: "brightness(30%)" }}
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
        <section className=" align-middle w-full">
          <div>
            <div className="d-flex justify-content-center w-full bg-black ">
              <div className="col-lg-6 col-md-6 col-sm-6 mx-2 mt-2">
                <input
                  type="text"
                  className="form-control search-slt"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* //Main Supplement AREA */}
      <div className="  h-full  bg-gradient-to-b from-black via-gray-800 to to-gray-700 p-8">
        <div>
          {cat != []
            ? cat.map((data) => {
                return (
                  <div className="row mb-3 ">
                    <div key={data._id} className="text-white">
                      {data.CategoryName}
                    </div>
                    <hr className="4px bg-white " />
                    <div className="flex flex-wrap  mt-10 text-white">
                      {console.log(items)}
                      {items != [] ? (
                        items
                          .filter(
                            (item) =>
                              item.CategoryName === data.CategoryName &&
                              item.name
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                          )
                          .map((filteredItems) => {
                            return (
                              <div
                                key={filteredItems._id}
                                className="text-white px-2 py-2"
                              >
                                <Card
                                  items={filteredItems}
                                  Options={filteredItems.options[0]}
                                ></Card>
                              </div>
                            );
                          })
                      ) : (
                        <div>No data found</div>
                      )}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Supplement;
