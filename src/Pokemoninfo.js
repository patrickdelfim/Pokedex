import React, { useEffect, useState } from "react";

function Pokemoninfo(props) {
  const [pokemoninfo, setpokemoninfo] = useState({
    sprites: {},
    types: [],
    stats: []
  });

  useEffect(() => {
    async function getData() {
      await fetch(props.url)
        .then(response => response.json())
        .then(response => {
          setpokemoninfo(response);
        });
    }
    getData();
  }, []);
  const typecolor = {
    normal: "A8A77A",
    fire: "EE8130",
    water: "6390F0",
    electric: "F7D02C",
    grass: "7AC74C",
    ice: "96D9D6",
    fighting: "C22E28",
    poison: "A33EA1",
    ground: "E2BF65",
    flying: "A98FF3",
    psychic: "F95587",
    bug: "A6B91A",
    rock: "B6A136",
    ghost: "735797",
    dragon: "6F35FC",
    dark: "705746",
    steel: "B7B7CE",
    fairy: "D685AD"
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
              <button
                className=" page-link "
                onClick={() => props.setinfo([false, props.url])}
                href="#"
              >
                &laquo; voltar
              </button>
            </div>
            <div className="col-7">
              <h5>{pokemoninfo.id}</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src={pokemoninfo.sprites.front_default}
                className="card-img-top rounded mx-auto mt-2"
                alt="#"
              />
              {pokemoninfo.types !== null
                ? pokemoninfo.types.map((element, index) => {
                    return (
                      <span
                        key={index}
                        className="badge badge-primary badge-pill mr-1"
                        style={{
                          backgroundColor: `#${typecolor[element.type.name]}`,
                          color: "#white"
                        }}
                      >
                        {element.type.name}
                      </span>
                    );
                  })
                : ""}
            </div>
            <div className="col-md-9">
              <h4 className="mx-auto">{pokemoninfo.name}</h4>

              {pokemoninfo.stats !== null
                ? pokemoninfo.stats.map((element, index) => {
                    return (
                      <div key={index} className="row align-items-center">
                        <div className="col-12 col-md-3 ">
                          {element.stat.name}:{" "}
                        </div>

                        <div className="col-12 col-md-9">
                          <div key={index} className="progress">
                            <div
                              key={index}
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: element.base_stat + "%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <small>{element.base_stat}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <hr />
        <div className="card-body">
          <h5 className="card-title text-center">Profile:</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="float-right">Height:</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="float-left">{pokemoninfo.height * 10}cm</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="float-right">weight:</h6>
                </div>
                <div className="col-md-6">
                  <h6 className="float-left">{pokemoninfo.weight / 10}kg</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemoninfo;
