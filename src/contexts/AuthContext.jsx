import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  const dummyUser = {
    username: "user123",
    password: "password123",
    email: "user@example.com",
  }


  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setCurrentUser(JSON.parse(user))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])


  const signIn = (username, password) => {

    if (username === dummyUser.username && password === dummyUser.password) {
      const user = {
        username: dummyUser.username,
        email: dummyUser.email,
      }

      setCurrentUser(user)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(user))
      return true
    }
    return false
  }


  const signUp = (userData) => {

    const user = {
      username: userData.username,
      email: userData.email,
    }

    setCurrentUser(user)
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(user))
    return true
  }


  const signOut = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
    navigate("/")
  }

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    signIn,
    signUp,
    signOut,
    dummyUser,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
