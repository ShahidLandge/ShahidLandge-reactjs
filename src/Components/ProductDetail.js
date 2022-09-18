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

  return (
    <>
      {console.log(product)}
      <br />
      <br />
      {loading ? (
        <div className="loader"></div>
      ) : product ? (
        <>
          <table>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Developer Email</th>
            <th> Favourites </th>

            <tbody>
              <tr>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <img
                    src={product.avatar}
                    alt="pic not found"
                    width="150px"
                    height="100px"
                  />
                </td>
                <td> &#8377; {product.price}</td>
                <td>{product.developerEmail}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleFavourites(product)}
                  >
                    {" "}
                    {favbtn}{" "}
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        //  : (
        //   <>
        //     <h3>Loading Product....Please Wait</h3>
        //     <div className="loader"></div>
        //   </>
        // )

        <>
          <button
            className="btn btn-primary my-4"
            onClick={() => navigate("/create")}
          >
            Create a product
          </button>
        </>
      )}
    </>
  );
};
