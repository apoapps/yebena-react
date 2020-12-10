import React from "react";

export default function MenuCard(props) {
  return (
    <div className="card col-sm-12 col-md-6 col-lg">
      <img src={props.imgURL} className="card-img-top" alt="menu" />

      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <div className="card-description">
          <div className="">Precio: ${props.price} </div>
          {props.isCombo ? (
            <div>
              <h4> Incluye:</h4>
              <ul className="list-group">
                
                {props.sides.map((side) => {
                  return <li key={side.id} className="list-group-item">{side}</li>;
                })}

                <ul className="list-group"></ul>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
