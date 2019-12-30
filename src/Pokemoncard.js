import React, { useEffect, useState } from "react";

function Pokemoncard(props) {
  const [pokeinfo, setpokeinfo] = useState(null);

  useEffect(() => {
    async function getData() {
      await fetch(props.url)
        .then(response => response.json())
        .then(response => setpokeinfo(response.sprites.front_default));
    }
    getData();
  }, []);

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card text-center justify-content-center">
        <div className="card-header">
          <h5 className="card-title text-nowrap">{props.name}</h5>
        </div>
        <div className="card-body">
          {pokeinfo != null ? (
            <img src={pokeinfo} alt="" />
          ) : (
            <p className=" spinner-border ">
              <span className="sr-only">Loading</span>
            </p>
          )}
          <div className="row justify-content-center">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => props.setinfo([true, props.url])}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemoncard;
