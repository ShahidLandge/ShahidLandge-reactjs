import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem, deleteItem } from "../Redux/actions/ProductAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [favbtn, setFavBtn] = useState("Add to Favourites");
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params)
  const [product, setProduct] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://upayments-studycase-api.herokuapp.com/api/products/${params.id}`,
      {
        method: "GET",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbmRnZXNoYWhpZDk5QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaWRMYW5kZ2UiLCJpYXQiOjE2NjM0MDc3NTAsImV4cCI6MTY2MzgzOTc1MH0.wSxJt96Ur2i-jOIBiiyI2oUijOHU_UOXR_cjYIbVAJw",
          Host: "upayments-studycase-api.herokuapp.com"
        })
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        // console.log(data.product);
        setProduct(data.product);
      });
  }, [params.id]);

  const dispatch = useDispatch();
  const handleFavourites = (product) => {
    // console.log(product);
    if (favbtn === "Add to Favourites") {
      dispatch(addItem(product));
      setFavBtn("Remove from Favourites");
    } else {
      dispatch(deleteItem(product));
      setFavBtn("Add to Favourites");
    }
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-3 my-3">
          <div
            className="card h-100 text-center p-4"
            style={{ width: "25rem" }}
            key={product._id}
          >
            <img
              src={product.avatar}
              alt="pic not found"
              height="200px"
              className="card-img-top"
            />
            <div className="card-body mb-10">
              <h5 className="card-title mb-0">{product.name}</h5>
              <p className="card-text lead fw-bold">&#8377;{product.price}</p>
              <p className="card-text">{product.description}</p>
              <p className="card-text fw-bold">
                Developer - {product.developerEmail}
              </p>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleFavourites(product)}
              >
                {favbtn}
              </button>
            </div>
          </div>
        </div>
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
      {console.log(product)}
      <div>
        <div className="container my-5 py-5">
          <div className=" row d-flex justify-content-center">
            {loading ? (
              <Loading />
            ) : product ? (
              <ShowProducts />
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  style={{ width: "15rem" }}
                  onClick={() => navigate("/create")}
                >
                  Create a product
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
