import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UseeContext from '../Globalcontext/UseConstext'
import Navbar from './Navbar'
import Footer from './Footer'

const Signin = () => {
  const nav = useNavigate()
  const [gmail, setGmail] = useState("")
  const [passwords, setPasswords] = useState("")
  const { user, setLogins } = useContext(UseeContext)

  const handlesubmit = (e) => {
    e.preventDefault()
    let userData = user.find((item) => item.email === gmail)
    if (userData && userData.password === passwords) {
      setLogins(userData)
      nav('/');
    } else {
      setLogins(null)
      alert("Invalid credentials. Please try again.")
    }
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-sm mx-auto mt-10">
        <div className="w-full backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold pb-5">Sign In</h2>
          <form onSubmit={handlesubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                onChange={(e) => setGmail(e.target.value)}
                id="email"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="andrew@mail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Your password
              </label>
              <input
                type="password"
                onChange={(e) => setPasswords(e.target.value)}
                id="password"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="*********"
                required
              />
            </div>
            <div>
              <p className="text-red-500 pb-5"></p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              >
                Sign In
              </button>
              <div className="flex items-center text-sm">
                <p>Don't have an account?</p>
                <Link to="/signup">
                  <button className="underline cursor-pointer ml-1">Sign Up</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signin
