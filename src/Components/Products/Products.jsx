import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Products.css";
import Card from "../Card/Card";
import product from '../../assets/product.png'
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function Products() {
  const [list, setList] = useState([]);
  const {server} = useContext(AppContext);

  const fetchList = async () => {
    const response = await axios.get(`${server}/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${server}/product/remove`, {
        id: foodId,
      });
      if (response.data.success) {
        setList(list.filter((item) => item._id !== foodId));
        toast.success("Food removed successfully");
      } else {
        toast.error("Error removing food ");
      }
    } catch (error) {
      toast.error("Error removing food ");
    }
  };

  useEffect(() => {
    fetchList();
  }, []); // Empty dependency array to run once on mount

  return (
    <div id="product">
      { !list.length == 0 ? 
        (<div className="product">
        <h1 className="product-heading">PRODUCTS</h1>
        <div className="card-list">
          {list.map((item, index) => (
            <Card key={index} item={item} removeFood={removeFood} url={server} />
          ))}
        </div>
      </div>) :  
      (
        <div className="product">
          <h1 className="product-heading">PRODUCTS</h1>
          <img src={product} alt="" className="alt-image" />
        </div>
      )
      }
    </div>
    
  );
}

export default Products;
