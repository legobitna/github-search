import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import UserList from "./components/UserList";
import { ClipLoader } from "react-spinners";
import SearchForm from "./components/SearchForm";
import { useSelector } from "react-redux";

const App = () => {
  const loading = useSelector((state) => state.loading);
  const errorMsg = useSelector((state) => state.error);

  return (
    <div className="text-center">
      <PublicNavbar />
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
    </div>
  );
};
export default App;
