import { Image } from "antd";
import React, { useState } from "react";
import "../style.css";
const ProductDetail = (props) => {
  const [visible, setVisible] = useState(false);
  console.log(props);
  const imageRender = () => {
    return props.datailReducer?.product?.data.images.map((val) => {
      return <Image src={val} />;
    });
  };

  return (
    <div className="flex">
      <>
        <Image
          preview={{ visible: false }}
          width={"50%"}
          height={"70vh"}
          src={props.datailReducer?.product?.data.images[0]}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            {imageRender()}
          </Image.PreviewGroup>
        </div>
      </>

      <div>
        <h2>Brand:{props.datailReducer?.product?.data.brand}</h2>
        <h2>Title:{props.datailReducer?.product?.data.title}</h2>
        <h2>Discription:{props.datailReducer?.product?.data.description}</h2>
        <h2>
          Discount Percentage:
          {props.datailReducer?.product?.data.discountPercentage}
        </h2>
        <h2>Price:{props.datailReducer?.product?.data.price}</h2>
        <h2>Rating:{props.datailReducer?.product?.data.rating}</h2>
        <h2>Stock:{props.datailReducer?.product?.data.stock}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
