import "./styles/MenuPage.css";

import MenuCard from "../Components/MenuCard.jsx";

export default function MenuPage(props) {
  const items = props.items;
  return (
    <div className="container main">
      <div className="row ">
          {items.map((item) => {
            return (
              <MenuCard
              key={item.id}
                title={item.title}
                isCombo={item.combo}
                sides={item.sides}
                price={item.price}
                imgURL={item.imgURL}
              />
            );
          })}
      </div>
    </div>
  );
}
