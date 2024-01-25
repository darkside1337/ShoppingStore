import { useState, useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*                              custom fetch hook                             */
/* --------------- https://fakestoreapi.com/products?limit=20 --------------- */
/* -------------------------------------------------------------------------- */

const useFetchData = () => {
  /* ---------------------------------- state --------------------------------- */
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  /* ----------------------------- fetching params ---------------------------- */
  const limit = "20";
  const url = `https://fakestoreapi.com/products?limit=${limit}`;
  /* -------------------------------- fetching -------------------------------- */

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error while fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
