import { useFrappeAuth, useSWRConfig } from 'frappe-react-sdk';
import { createContext } from 'react';

const UserContext = createContext({
  currentUser: '',
  isLoading: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateCurrentUser: () => {},
});

const UserProvider = ({ children }) => {
  const { mutate } = useSWRConfig();
  const { login, logout, currentUser, updateCurrentUser, isLoading } = useFrappeAuth();

  const handleLogout = async () => {
    localStorage.removeItem
    return logout()
      .then(() => {
        // Clear cache on logout
        return mutate(() => true, undefined, false);
      })
      .then(() => {
        // Reload the page so that the boot info is fetched again
        const URL = import.meta.env.VITE_BASE_NAME ? `${import.meta.env.VITE_BASE_NAME}` : '';
        window.location.replace(`${URL}/inga`);
        // window.location.reload()
      });
  };

  const handleLogin = async (username, password) => {
    return login(username, password)
      .then(() => {
        // Reload the page so that the boot info is fetched again
        const URL = import.meta.env.VITE_BASE_NAME ? `/${import.meta.env.VITE_BASE_NAME}` : '';
        window.location.replace(`${URL}/dash`);
      });
  };

  return (
    <UserContext.Provider value={{ isLoading, updateCurrentUser, login: handleLogin, logout: handleLogout, currentUser: currentUser ?? "" }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
