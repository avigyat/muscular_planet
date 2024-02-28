import React from 'react'

const Details = () => {
  return (
    <div>
              <div>
        <section>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner " id="carousel">
             
              <div className="carousel-item active" style={{ height: "490px" }}>
                <img
                  src="./images/first.jpg"
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

      </div>
    </div>
  )
}

export default Details