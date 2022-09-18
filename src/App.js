import { Route, Routes } from "react-router-dom";
import { Create } from "./Components/CreateScreen";
import { Favourites } from "./Components/Favourites";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { ProductDetails } from "./Components/ProductDetail";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/details/" element={<ProductDetails />} />
        <Route exact path="/details/:id" element={<ProductDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}
