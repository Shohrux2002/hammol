import React from "react";
import search from "../icons/search.svg";
import { useEffect, useState } from "react";
import { Input, Space, Select } from "antd";
const { Option } = Select;
const { Search } = Input;
const Header = (props) => {
  const [inputValue, setValue] = useState({
    select: "all",
    search: "",
  });
  const selectOption = (value) => {
    setValue({ select: value, search: inputValue.search });
    // console.log(`selected ${value}`);
  };
  const onSearch = (value) =>
    setValue({ select: inputValue.select, search: value });
  useEffect(() => {
    props.selectAction(inputValue);
  }, [inputValue]);
  useEffect(() => {
    props.categoryAction();
  }, []);
  const renderCategory = () => {
    // if (!props.c) return;
    return props.categoryReducer.category?.data.map((val) => {
      return <Option value={val}>{val}</Option>;
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
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        onChange={selectOption}
        defaultValue="All"
      >
        <Option value="All">All</Option>
        {renderCategory()}
      </Select>
    </header>
  );
};

export default Header;
