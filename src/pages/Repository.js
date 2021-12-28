import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../redux/api";
import RepoItem from "../components/RepoItem";
import { NavItem } from "react-bootstrap";
const Repository = () => {
  let { user } = useParams();
  let [repoList, setRepoList] = useState([]);
  let [error, setError] = useState("");
  useEffect(async () => {
    let res = await api.get(`/users/${encodeURIComponent(user)}/repos`);
    if (res.status == 200) {
      console.log("rrrr", res);
      setRepoList(res.data);
    } else {
      setError(res.data.message);
    }
  }, []);

  return (
    <div>
      {repoList &&
        repoList.map((item) => {
          return (
            <RepoItem
              language={item.language}
              pushed_at={item.pushed_at}
              fullname={item.full_name}
              id={item.id}
            />
          );
        })}
    </div>
  );
};

export default Repository;
