import React, { createContext, useContext, useState, useEffect } from 'react';

const TMDSessionContext = createContext();

function TMDSessionContextProvider({ children, loadComponet: LoadComponet }) {
  const [session, setSession] = useState(() => {
    const sessionId = localStorage.getItem('session_id');

    return sessionId
      ? { sessionId, isAuthenticated: true }
      : { sessionId: null, isAuthenticated: false };
  });

  useEffect(() => {
    const onStorageChange = () => {
      const sessionId = localStorage.getItem('session_id');

      setSession(
        sessionId
          ? { sessionId, isAuthenticated: true }
          : { sessionId: null, isAuthenticated: false }
      );
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return (
    <TMDSessionContext.Provider value={{ ...session, setSession }}>
      {children}
    </TMDSessionContext.Provider>
  );
}

const useTMDSessionContext = () => useContext(TMDSessionContext);

export { useTMDSessionContext };
export default TMDSessionContextProvider;
