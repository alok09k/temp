import React, { useState } from "react";
import "./Admin.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import cross_icon from "../../assets/cross_icon.png";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function Admin() {
  const { setShowAdmin,server } = useContext(AppContext);
  const url = server;

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    number: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("number", data.number);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/product/add`, formData);
    if (response.data.success) {
      setData({
        number: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col form-container" onSubmit={onSubmitHandler}>
       <div className="heading-container">
       <h1 className="form-heading">Add Product</h1>
        <img
          onClick={() => setShowAdmin(false)}
          src={cross_icon}
          alt="Close"
          required
        />
       </div>
        <div className="add-image-upload flex-col">
          <div className="close-admin">
            <p>Upload Image</p>
          </div>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            className="upload"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Phone Number</p>
          <input
            onChange={onChangeHandler}
            value={data.number}
            type="text"
            name="number"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            required
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows={6}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <input
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              type="text"
              placeholder="Study Material"
              required
            ></input>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              id=""
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default Admin;
