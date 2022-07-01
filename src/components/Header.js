import React, { useEffect, useState } from "react";

import { Input, Space, Select } from "antd";
const { Option } = Select;
const { Search } = Input;
const Header = (props) => {
  const [inputValue, setValue] = useState({
    select: "all",
    search: "",
  });
  const selectOption = (value) => {
    props.selectAction(value, inputValue.search);
    props.productAction();

    setValue({ select: value, search: inputValue.search });
    console.log(inputValue);
    // console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    setValue({ select: inputValue.select, search: value });
    props.selectAction(inputValue.select, value);
    props.productAction();
  };

  useEffect(() => {
    props.selectAction("all", "");
    props.productAction();
    props.categoryAction();
  }, []);

  const renderCategory = () => {
    // if (!props.c) return;
    return props.categoryReducer.category?.data.map((val) => {
      return (
        <Option key={val.id} value={val}>
          {val}
        </Option>
      );
    });
  };

  return (
    <header className="header container">
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />

        {/* <img src={search} alt="search" /> */}
      </Space>

      <Select
        style={{ cursor: "pointer" }}
        className="select"
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        onChange={selectOption}
        defaultValue="all"
      >
        <Option value="all">All</Option>
        {renderCategory()}
      </Select>
    </header>
  );
};

export default Header;
