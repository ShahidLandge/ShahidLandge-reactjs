import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/details">Details </Link>
      {/* <Link to="/create"> Create </Link> */}
      <Link to="/favourites"> Favourites </Link>
    </nav>
  );
};
