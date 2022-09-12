import CoffeeListItem from "./CoffeeListItem";

const CoffeeList = (props) => {
  console.log(props);

  const mappedCoffees = props.coffees.map((coffee) => {
    return (
      <CoffeeListItem key={coffee.id} {...coffee} />
    );
  });

  return (
    <div>
      <h2>Coffee List Component</h2>
      { mappedCoffees }
    </div>
  );
};

export default CoffeeList;
