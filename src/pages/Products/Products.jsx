import React from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch"
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id)
  const {data} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  console.log(data)
  return (
    <div className="products">
      <div className="items">
        <img
          className="catImg"
          src="https://i.etsystatic.com/25058977/r/il/f60d19/2838331907/il_fullxfull.2838331907_amit.jpg"
          alt=""
        />
        <List catId={catId}/>
      </div>
    </div>
  );
};

export default Products;
