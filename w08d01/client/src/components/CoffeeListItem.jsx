// * name
// * brand
// * price
// * size
// * roast
// * originCountry
// * id

import './CoffeeListItem.scss';

const CoffeeListItem = (props) => {
  console.log(props);

  return (
    <div className="coffee">
      <h2>This coffee is great!!!</h2>
      <h2>Coffee: {props.name}</h2>
      <p>Origin Country: {props.originCountry}</p>
      <p>Brand: {props.brand}</p>
      <p>Roast: {props.roast}</p>
      <p>Price: ${props.price}</p>
      <p>Size: {props.size}</p>
    </div>
  );
};

export default CoffeeListItem;
