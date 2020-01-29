import React, { useState, useEffect } from "react";

import jsonPlaceholder from "../apis/jsonPlaceholder";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await jsonPlaceholder.get(`/${resource}`);

      setResources(response.data);
    })();
  }, [resource]);

  /*

  Another alternative:

  useEffect(() => {
    fetchData();
  }, [resource]);

  const fetchData = async () => {
    const response = await jsonPlaceholder.get(`/${resource}`);

    setResources(response.data);
  };

  */

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
