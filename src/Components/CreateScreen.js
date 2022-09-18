import { useEffect, useState } from "react";

export const Create = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbmRnZXNoYWhpZDk5QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaWRMYW5kZ2UiLCJpYXQiOjE2NjM0MDc3NTAsImV4cCI6MTY2MzgzOTc1MH0.wSxJt96Ur2i-jOIBiiyI2oUijOHU_UOXR_cjYIbVAJw",
        Host: "upayments-studycase-api.herokuapp.com"
      }),
      body: JSON.stringify({
        name: "Laptop",
        price: 25000,
        category: "Electronics",
        description: "Lenovo Model E41-15 AMD A6",
        avatar:
          "https://5.imimg.com/data5/AY/DP/MY-11673038/lenovo-laptop-500x500.png",
        developerEmail: "landgeshahid99@gmail.com"
      })
    };
    fetch(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.product);
      });
  }, []);
  return (
    <>
      <br />
      <br />
      {product.name ? (
        <table>
          <th>Category</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Developer Email</th>
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
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <h1>Loading....</h1>
          <div className="loader"></div>
        </>
      )}
    </>
  );
};
