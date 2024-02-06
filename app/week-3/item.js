export default function Item({ name, quantity, category }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
