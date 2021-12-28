import React from "react";
import UserList from "../components/UserList";
import { ClipLoader } from "react-spinners";
import SearchForm from "../components/SearchForm";
import { Container, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
const Home = () => {
  const loading = useSelector((state) => state.loading);
  const errorMsg = useSelector((state) => state.error);
  return (
    <Container>
      <h1>Github Search</h1>
      <SearchForm />
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
        <UserList />
      )}
    </Container>
  );
};

export default Home;
