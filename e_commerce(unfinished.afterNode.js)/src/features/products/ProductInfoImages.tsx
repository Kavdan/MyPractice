import React from "react";

export const ProductInfoImages = ({
  currImage,
  setCurrImage,
  product,
}: any) => {

  return (
    <div className="images">
      <div className="verticalImages">
        {product.images?.map((url: any, i : any) => {
          return <img key={i} src={url} alt="" onClick={() => setCurrImage(url)} />;
        })}
      </div>
      <div className="currentImage">
        <img src={currImage || product.thumbnail} alt="" />
      </div>
    </div>
  );
};
