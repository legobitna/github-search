import React from "react";
import moment from "moment";
const RepoItem = ({ language, pushed_at, fullname, id }) => {
  return (
    <div className="repo-item" key={id}>
      <h3>{fullname.split("/")[1]}</h3>
      <p>
        <span
          className={`dot-box ${language && language.toLowerCase()}`}
        ></span>
        {language} Updated{moment(pushed_at).fromNow()}
      </p>
    </div>
  );
};

export default RepoItem;
