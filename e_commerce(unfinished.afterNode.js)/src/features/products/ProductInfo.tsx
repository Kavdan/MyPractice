import React, { useEffect, useState } from "react";
import whiteBagIcon from "../../assets/toBagWhite.svg";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBag } from "../bag/bagSlice";
import { ProductInfoImages } from "./ProductInfoImages";
import { getProduct } from "./currentProductSlice";

export const ProductInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const [currImage, setCurrImage] : any = useState();

  useEffect(() => {
    setCurrImage(null);
    dispatch(getProduct(param.id))
  }, [param.id])
  
  const product = useSelector((state:any) => state.currentProduct);
  const bag = useSelector((state:any) => state.bag)
  const [addedInBag, setAddedInBag] = useState(false);

  const addInBag = () => {
    if (addedInBag) return;
    setAddedInBag(true);
    dispatch(
      addProductToBag({
        ...product,
        count: 1,
      })
    );
  };

  return (
    <div className="productInfo">
      <div className="back" onClick={() => navigate(-1)}>
        {" < back"}
      </div>
      <div className="productMainInfo">
        <ProductInfoImages
          currImage={currImage}
          setCurrImage={setCurrImage}
          product={product}
        />
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="brand">{product.brand}</p>
          <div></div>
          <p className="price">$ {product.price}</p>
          <p className="brief">{product.description}</p>
          <div className="buttonBlock">
            <button
              onClick={addInBag}
              disabled={addedInBag}
              className={addedInBag ? "added" : ""}
            >
              <img src={whiteBagIcon} alt="" />
              <span>{addedInBag ? "Added In Bag" : "Add In Bag"}</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="description">
        <h1>Description</h1>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};
