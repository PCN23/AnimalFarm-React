

export default function animals(animals) {
    return (

        {animals.map((animals, i) =><AnimalList {...animals})}
    );
}