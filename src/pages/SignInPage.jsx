import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"

function SignInPage() {
  const navigate = useNavigate()
  const { signIn, dummyUser } = useAuth()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

 
    if (error) {
      setError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

 
    if (!formData.username.trim() || !formData.password) {
      setError("Please enter both username and password")
      return
    }

    setIsSubmitting(true)


    setTimeout(() => {
      const success = signIn(formData.username, formData.password)

      if (success) {
        navigate("/")
      } else {
        setError("Invalid username or password")
      }

      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-gray-600 mt-2">Welcome back to TechGadgets</p>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full py-3" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="text-center text-sm text-gray-600 mb-4">
            <p>For demo purposes, use these credentials:</p>
            <p className="font-semibold mt-1">Username: {dummyUser.username}</p>
            <p className="font-semibold">Password: {dummyUser.password}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
