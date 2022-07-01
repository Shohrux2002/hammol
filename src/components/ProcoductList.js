import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Card, Button, Col, Row, Pagination } from "antd";

import "./../style.css";
import "antd/dist/antd.min.css";
const { Meta } = Card;

const ProcoductList = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    props.pageAction(1);
  }, []);
  const onChange = (pageNumber) => {
    props.pageAction(pageNumber);
    props.productAction();
  };

  useEffect(() => {
    console.log(props);
    props.productAction();
  }, []);
  const renderHtml = () => {
    return props.productReducer.products?.data.products.map((val) => {
      return (
        <div key={val.id}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <div className="cart">
                <Image height={"40vh"} width={"100%"} src={val.images[0]} />
              </div>
            }
          >
            <Meta title={val.title} description="www.instagram.com" />

            <Link to="/product">
              <Button
                onClick={() => {
                  props.detailAction(val.id);
                }}
                type="primary read"
              >
                Read more
              </Button>
            </Link>
          </Card>
        </div>
      );
    });
  };

  return (
    <>
      <div className="grid">{renderHtml()}</div>

      <Pagination
        className="pagination"
        size="small"
        defaultPageSize={3}
        onChange={onChange}
        defaultCurrent={1}
        total={30}
      />
    </>
  );
};

export default ProcoductList;
