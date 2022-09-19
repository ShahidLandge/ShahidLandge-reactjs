import { useEffect, useState } from "react";

export const Create = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.product);
        setLoading(false);
      });
  }, []);

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-5 my-3 d-flex justify-content-center">
          <div
            className="card h-100 text-center p-4"
            style={{ width: "20rem" }}
            key={product._id}
          >
            <img
              src={product.avatar}
              alt="pic not found"
              height="200px"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">{product.name}</h5>
              <p className="card-text lead fw-bold">&#8377;{product.price}</p>
              <p className="card-text">{product.description}</p>
              <p className="card-text fw-bold">
                Developer - {product.developerEmail}
              </p>
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
        <div className="container my-2 py-3">
          <div className=" row d-flex justify-content-center">
            {loading ? (
              <Loading />
            ) : (
              product.name && (
                <>
                  <h1>Product added successfully</h1>
                  <ShowProducts />
                </>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
