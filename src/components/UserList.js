import React from "react";
import { Media } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);
  return (
    <ul className="list-unstyled">
      {users.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <Media as="li" className="issue mb-5">
      <img src={item.avatar_url} alt="User Avatar" className="avatar mr-3" />
      <Media.Body className="text-left">
        <h4>
          <span className="mr-2">#{item.login}</span>
        </h4>
        <div className="content-body">
          <span className="text-grey mr-2">Type:{item.type}</span>

          <span className="text-grey">Score:{item.score}</span>
        </div>
      </Media.Body>
    </Media>
  );
};

export default UserList;
