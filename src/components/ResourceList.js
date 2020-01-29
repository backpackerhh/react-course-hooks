import React from "react";

import useResources from "../utils/useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = () => {
    return (
      <ul>
        {resources.map(record => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    );
  };

  return <div className="ui">{renderList()}</div>;
};

export default ResourceList;
