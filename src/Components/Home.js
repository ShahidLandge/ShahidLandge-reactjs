import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export const Home = () => {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(products);
  const [loading, setLoading] = useState(false);
  const url = "https://upayments-studycase-api.herokuapp.com/api/products";
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbmRnZXNoYWhpZDk5QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaWRMYW5kZ2UiLCJpYXQiOjE2NjM0MDc3NTAsImV4cCI6MTY2MzgzOTc1MH0.wSxJt96Ur2i-jOIBiiyI2oUijOHU_UOXR_cjYIbVAJw",
        Host: "upayments-studycase-api.herokuapp.com"
      })
    })
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setLoading(false);
        // console.log(result.products);
        setProducts(result.products);
        setData(result.products);
        // console.log(data)
        setLoading(false);
      });
  }, []);

  const clothingFilter = () => {
    const filter = data.filter((ele) => ele.category === "Clothing");
    // console.log(filter);
    setProducts(filter);
  };
  const electronicsFilter = () => {
    const filter = data.filter((ele) => ele.category === "Electronics");
    // console.log(filter);
    setProducts(filter);
  };
  const furnitureFilter = () => {
    const filter = data.filter((ele) => ele.category === "Furniture");
    // console.log(filter);
    setProducts(filter);
  };
  const accessoriesFilter = () => {
    const filter = data.filter((ele) => ele.category === "Accessories");
    // console.log(filter);
    setProducts(filter);
  };
  const hobbyFilter = () => {
    const filter = data.filter((ele) => ele.category === "Hobby");
    // console.log(filter);
    setProducts(filter);
  };

  return (
    <>
      <br />
      <br />
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => setProducts(data)}
      >
        All Products
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => clothingFilter()}
      >
        Clothing{" "}
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => electronicsFilter()}
      >
        Electronics{" "}
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => furnitureFilter()}
      >
        Furniture{" "}
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => accessoriesFilter()}
      >
        Accessories{" "}
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => hobbyFilter()}
      >
        Hobby{" "}
      </button>
      <br />
      <br />
      {!loading ? (
        <table>
          <th>Category</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Developer Email</th>
          {products.map((ele) => {
            return (
              <tbody key={ele._id}>
                <tr>
                  <td>{ele.category}</td>
                  <td>
                    <Link to={`details/${ele._id}`}> {ele.name} </Link>{" "}
                  </td>
                  <td>{ele.description}</td>
                  <td>
                    {/* <button onClick={() => navigate(`details/${ele._id}`)}> */}
                    <Link to={`details/${ele._id}`}>
                      <img
                        src={ele.avatar}
                        alt="pic not found"
                        width="150px"
                        height="100px"
                      />
                    </Link>
                    {/* </button> */}
                  </td>
                  <td> &#8377; {ele.price}</td>
                  <td>{ele.developerEmail}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <>
          <h3>Loading Products....Please wait</h3>
          <div className="loader"></div>
        </>
      )}
    </>
  );
};
