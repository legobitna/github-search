import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchActions } from "../redux/actions/searchActions";
const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchInput == "") {
      dispatch(searchActions.clearDisplay());
      return;
    } else if (searchInput.length < 3) return;
    const searchUser = () => {
      dispatch(searchActions.searchUser(searchInput));
    };
    searchUser();
  }, [searchInput]);
  return (
    <Form className="mb-4">
      <Form.Row>
        <Col>
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Search.."
            value={searchInput}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
