'use client'
import MessageIcon from '@/src/shared/messageIconSvg/messageIcon';
import React, { useState } from 'react'

const page = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isSignUp){
        console.log('Sign up:', username, email);
    }else{
        console.log('Sign in:', username, email);
    }

    setUsername('');
    setEmail('');
    };

    return (

        <div className="container mx-auto pt-[30vh] max-w-md">
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MessageIcon/>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleToggle}
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </span>
            </p>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
            {isSignUp ? 'Sign up' : 'Sign in'}
          </button>
        </form>
      </div>

    )
}

export default page