import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-secondary">
        <div className="w-50 border bg-dark text-white p-5 rounded border-0">
          <h3>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
