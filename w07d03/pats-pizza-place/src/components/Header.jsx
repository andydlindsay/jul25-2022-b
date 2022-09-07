const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
};

export default Header;
