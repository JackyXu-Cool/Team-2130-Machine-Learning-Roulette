import { useState, useCallback } from 'react';

export const useHttpClient = () => {
  const [error, setError] = useState();

  const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      const response = await fetch(`${url}`, {
        method: method,
        headers: headers,
        body: body
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return {
    error: error,
    sendRequest: sendRequest,
    errorHandler: errorHandler
  };
};
