import React, { createContext, useContext } from 'react';
import { useFetch } from '../../hooks';

const TMDConfigurationContext = createContext();

function TMDConfigurationContextProvider({
  children,
  loadComponet: LoadComponet,
}) {
  const { loading, data } = useFetch('configuration');

  return (
    <TMDConfigurationContext.Provider value={data}>
      {loading ? 'Loading...' : children}
    </TMDConfigurationContext.Provider>
  );
}

const useTMDContext = () => useContext(TMDConfigurationContext);

export { useTMDContext };
export default TMDConfigurationContextProvider;
