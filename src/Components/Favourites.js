import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../Redux/actions/ProductAction";

export const Favourites = () => {
  const state = useSelector((state) => state.ProductReducer);
  // console.log(state.length);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    console.log("item is ");
    console.log(item);
    dispatch(deleteItem(item));
  };
  const ShowProducts = () => {
    return (
      <>
        {state.map((ele) => {
          return (
            <>
              <div className="col-md-3 my-3">
                <div className="card h-100 text-center p-4" key={ele._id}>
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
                      onClick={() => handleDelete(ele)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            {state.length !== 0 ? (
              <ShowProducts />
            ) : (
              <h1 className="my-5"> No favourites available </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
