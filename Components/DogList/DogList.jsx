

export default function ShoppingList({ dogsList }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      <div className="dogs-imgs">
      {dogsList.map((dog) => (
        <img src={dog} alt="" className="img"/>
      ))}
      </div>
    </div>
  );
}
