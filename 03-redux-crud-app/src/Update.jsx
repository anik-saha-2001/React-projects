import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "./redux/reducers/UserReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  //   console.log(existingUser);
  const { name, email } = existingUser[0];
  const [uname, setUName] = useState(name);
  const [uemail, setUEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-secondary">
      <div className="w-50 border bg-dark text-white p-5 rounded border-0">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => setUName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={uemail}
              onChange={(e) => setUEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
