import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export const Home = () => {
  const navigate = useNavigate();
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

        setProducts(result.products);
        setData(result.products);
        setLoading(false);
      });
  }, []);

  const clothingFilter = () => {
    const filter = data.filter((ele) => ele.category === "Clothing");

    setProducts(filter);
  };
  const electronicsFilter = () => {
    const filter = data.filter((ele) => ele.category === "Electronics");

    setProducts(filter);
  };
  const furnitureFilter = () => {
    const filter = data.filter((ele) => ele.category === "Furniture");

    setProducts(filter);
  };
  const accessoriesFilter = () => {
    const filter = data.filter((ele) => ele.category === "Accessories");

    setProducts(filter);
  };
  const hobbyFilter = () => {
    const filter = data.filter((ele) => ele.category === "Hobby");

    setProducts(filter);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 flex-wrap">
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => setProducts(data)}
          >
            All Products
          </button>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => clothingFilter()}
          >
            Clothing{" "}
          </button>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => electronicsFilter()}
          >
            Electronics{" "}
          </button>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => furnitureFilter()}
          >
            Furniture{" "}
          </button>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => accessoriesFilter()}
          >
            Accessories{" "}
          </button>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => hobbyFilter()}
          >
            Hobby{" "}
          </button>
        </div>

        {products.map((ele) => {
          return (
            <div className="col-md-3 my-3" key={ele._id}>
              <div className="card h-100 text-center p-4">
                <Link to={`details/${ele._id}`}>
                  {" "}
                  <img
                    src={ele.avatar}
                    alt="pic not found"
                    height="200px"
                    className="card-img-top"
                  />{" "}
                </Link>
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    <Link to={`details/${ele._id}`}> {ele.name} </Link>
                  </h5>
                  <p className="card-text lead fw-bold">&#8377;{ele.price}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`details/${ele._id}`)}
                  >
                    Check Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <h3>Loading Products....Please wait</h3>
        <div className="loader"></div>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container my-2 py-5">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};
