import { useState, useEffect } from "react";

import jsonPlaceholder from "../apis/jsonPlaceholder";

const useResources = resource => {
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

  return resources;
};

export default useResources;
