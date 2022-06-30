import React, { useEffect, useState } from "react";
import { Image, Card, Button, Col, Row, Pagination } from "antd";

import "antd/dist/antd.min.css";
import "./../style.css";
const { Meta } = Card;

const ProcoductList = (props) => {
  const [visible, setVisible] = useState(false);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };
  useEffect(() => {
    console.log(props);
    props.productAction();
  }, [props.selectReducer]);
  const renderHtml = () => {
    return props.productReducer.products?.data.products.map((val) => {
      return (
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <div className="cart">
                <Image
                  preview={{
                    visible: false,
                  }}
                  width={"100%"}
                  height={"40vh"}
                  src={val.images[0]}
                  onClick={() => setVisible(true)}
                />
                <div
                  style={{
                    display: "none",
                  }}
                >
                  <Image.PreviewGroup
                    preview={{
                      visible,
                      onVisibleChange: (vis) => setVisible(vis),
                    }}
                  >
                    {val.images.map((value) => {
                      return <Image src={value} />;
                    })}
                    <Image src={val.images[0]} />
                    <Image src={val.images[1]} />
                    <Image src={val.images[2]} />
                  </Image.PreviewGroup>
                </div>
              </div>
            }
          >
            <Meta title={val.title} description="www.instagram.com" />
            <Button type="primary read">Read more</Button>
          </Card>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="container ">
        <Row gutter={[68, 48]}>{renderHtml()}</Row>
        {/* <Pagination defaultCurrent={2} total={10} />  ; */}
      </div>
      <Pagination
        className="pagination"
        defaultPageSize={3}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        defaultCurrent={1}
        total={props.productReducer.products?.data.products.length}
      />
    </>
  );
};

export default ProcoductList;
