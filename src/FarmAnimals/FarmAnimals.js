export default function FarmAnimal({ name, type, says }) {
  return (
    <div className="farm-animal">
      <img src= {`/images/${name}.svg`}/>
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>

    </div>

  );

}