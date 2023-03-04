import React from 'react';

const Filters = () => {
    return (
        <div>
             <section className="container mt-4">
        <div className="row">
          <div className="col-10">
            <h5 className="filter">Filters</h5>
            <div>
              <select
                class="form-select"
                aria-label="Default select example"
              ></select>
              <input type="range" class="form-range" id="customRange1" />
              <div className="d-flex justify-content-between">
                <p>$50</p>
                <p>$1200</p>
              </div>
              <hr />
            </div>

            <h5 className="filter">Rating</h5>
            <select
              class="form-select"
              aria-label="Default select example"
            ></select>
            <div className="d-flex justify-content-between">
              <p>0+</p>
              <p>1+</p>
              <p>2+</p>
              <p>3+</p>
              <p>4+</p>
              <p>5+</p>
            </div>
            <hr />

            <h5 className="filter">Airlines</h5>
            {/* <select
              class="form-select"
              aria-label="Default select example"
            ></select> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                us bangla 
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
               novo air
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
              Qatar airlines
              </label>
            </div>
            <hr />

            <h5 className="filter">Amenities</h5>
            <select
              class="form-select"
              aria-label="Default select example"
            ></select>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
          </div>

      
        </div>
      </section>
        </div>
    );
};

export default Filters;