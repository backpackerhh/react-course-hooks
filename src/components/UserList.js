import React from "react";

import useResources from "../utils/useResources";

const UserList = () => {
  const resources = useResources("users");

  const renderList = () => {
    return (
      <ul>
        {resources.map(record => {
          return <li key={record.id}>{record.name}</li>;
        })}
      </ul>
    );
  };

  return <div className="ui">{renderList()}</div>;
};

export default UserList;
