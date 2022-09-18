import { useDispatch, useSelector } from "react-redux";
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

  return (
    <>
      <br />
      <br />
      {state.length !== 0 ? (
        <table>
          <th>Category</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Developer Email</th>
          <th>Delete Favourites </th>
          {state.map((ele) => {
            return (
              <tbody key={ele._id}>
                <tr>
                  <td>{ele.category}</td>
                  <td>{ele.name}</td>
                  <td>{ele.description}</td>
                  <td>
                    <img
                      src={ele.avatar}
                      alt="pic not found"
                      width="150px"
                      height="100px"
                    />
                  </td>
                  <td> &#8377; {ele.price}</td>
                  <td>{ele.developerEmail}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(ele)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <h1 className="my-5">No favourites available </h1>
      )}
    </>
  );
};
