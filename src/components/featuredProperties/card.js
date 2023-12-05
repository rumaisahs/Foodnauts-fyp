<div class="card" style={{ width: "18rem"}}>
              <img
                src={CarouselImg1}
                class="rounded-5 card-img-top"
                alt="..."
              />
              <div
                class="card-body position-absolute bg-light rounded-4 bg-opacity-75 shadow w-100"
                style={{
                  top: "80%",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <h5 class="card-title fs-5">Cafe Praha</h5>
                <p className="fpAddress mb-2 card-text">
                  <i className="bi bi-geo-alt-fill pe-1" />
                  Tipu Sultan, Karachi
                </p>
                <p className="fpAmbience d-inline pe-1 card-text">Fine-Dine</p>
                <p className="fpAmbience d-inline pe-1 card-text">.</p>
                <p className="fpCuisine d-inline card-text">Cafe</p>
                <p className="fpPrice d-inline card-text">$$$</p>
                <div className="fpRating mt-2">
                  <p className=" d-inline pe-1">
                    {" "}
                    <i className="bi bi-star-fill" />{defaultData[-2]?.rating}
                  </p>
                  <span>Reviews (81)</span>
                </div>
              </div>
            </div>