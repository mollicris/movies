import { useState ,createContext, useEffect, useContext } from 'react'
import {auth,provider} from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      
      console.log("Usuario logueado:", result.user);
      console.log("Usuario logueado:", result.user.displayName);
      
    } catch (error) {
      console.error("Error al iniciar sesion :", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Usuario deslogueado");
    } catch (error) {
      console.error("Error al cerrar sesion:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("Usuario logueado:", user.displayName);
        } else {
        setUser(null);
        console.log("No hay usuario logueado");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)