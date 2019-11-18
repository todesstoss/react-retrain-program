import React, { createContext, useContext } from 'react';
import { useFetch } from '../../hooks';

const TDBconfigurationContext = createContext();

function TDBconfigurationContextProvider({
  children,
  loadComponet: LoadComponet,
}) {
  const { loading, data } = useFetch('configuration');

  return (
    <TDBconfigurationContext.Provider value={data}>
      {loading ? 'Loading...' : children}
    </TDBconfigurationContext.Provider>
  );
}

const useTMDContext = () => useContext(TDBconfigurationContext);

export { useTMDContext };
export default TDBconfigurationContextProvider;
