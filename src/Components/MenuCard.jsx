import React from "react";

export default function MenuCard(props) {
  return (
    <div className="card">
      <img src={props.imgURL} className="card-img-top" alt="menu" />

      <div className="card-body">
        <div className="card-title">{props.title}</div>
        <div className="card-description">
          <div className="">Precio: ${props.price} </div>
          {props.isCombo ? (
            <div >
              <h1> Incluye:</h1>
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
