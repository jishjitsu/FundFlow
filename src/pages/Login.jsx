import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/F__4_-removebg-preview.png';

function Login({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('investor');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (isRegistering && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const endpoint = isRegistering
                ? 'http://localhost:5000/api/register'
                : 'http://localhost:5000/api/login';

            // For login, name and role are not required, so only send email and password

            const response = await axios.post(endpoint, { name, email, password, role });
            const { token, userId } = response.data;

            // Save token and userId to localStorage/sessionStorage if "remember me" is checked
            if (token) {
                if (rememberMe) {
                    localStorage.setItem('token', token);
                } else {
                    sessionStorage.setItem('token', token);
                }

                // Optionally save the userId in storage
                if (userId) {
                    localStorage.setItem('userId', userId); // If you need to use the userId
                }

                // Pass token to parent component (onLogin function)
                onLogin(token);
                resetForm();
            }

            // Show success message for registration
            if (isRegistering) {
                setSuccessMessage('Registration successful! You can now log in.');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Authentication failed. Please check your credentials.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setRole('investor');
    };

    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-1/4 bg-black rounded-lg border-2 border-black/35 hover:shadow-black/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={logo}
                                alt="FundFlow Logo"
                                className="w-[90px] h-[90px]"
                            />
                        </div>

                        <h2 className="text-2xl font-Levnam font-semibold text-[#d9d6ba] mb-2">
                            {isRegistering ? 'Create an Account' : 'Welcome Back'}
                        </h2>
                        <p className="font-Levnam font-medium text-[#11a14a] opacity-75 mb-6">
                            {isRegistering
                                ? 'Please fill in your details to register.'
                                : 'Please sign in to your account'}
                        </p>

                        {error && <div className="mb-4 text-red-600">{error}</div>}
                        {successMessage && <div className="mb-4 text-green-600">{successMessage}</div>}

                        <form onSubmit={handleSubmit}>
                            {isRegistering && (
                                <div className="font-Levnam font-medium mb-4">
                                    <label htmlFor="name" className="block text-[#11a14a] text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                        required
                                    />
                                </div>
                            )}

                            <div className="font-Levnam font-medium mb-4">
                                <label htmlFor="email" className="block text-[#11a14a] text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-[#11a14a] text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

                            {isRegistering && (
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-[#11a14a] text-sm font-bold mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                        required
                                    />
                                </div>
                            )}

                            {isRegistering && (
                                <div className="font-Levnam font-medium mb-4">
                                    <label htmlFor="role" className="block text-[#11a14a] text-sm font-bold mb-2">
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                        required
                                    >
                                        <option value="investor">Investor</option>
                                        <option value="startup">Startup</option>
                                    </select>
                                </div>
                            )}

                            <div className="mb-4 font-Levnam font-medium text-[#11a14a]">
                                <label htmlFor="rememberMe" className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                        className="mr-2"
                                    />
                                    Remember Me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#11a14a] font-Levnam font-medium text-black font-bold py-2 rounded-md hover:bg-[#d9d6ba] transition duration-300"
                            >
                                {isRegistering ? 'Register' : 'Login'}
                            </button>
                        </form>

                        <p className="font-Levnam font-medium text-[#11a14a] mt-4 text-center">
                            {isRegistering ? (
                                <span>
                                    Already have an account?{' '}
                                    <button
                                        onClick={() => setIsRegistering(false)}
                                        className="text-[#d9d6ba] hover:underline"
                                    >
                                        Login
                                    </button>
                                </span>
                            ) : (
                                <span>
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => setIsRegistering(true)}
                                        className="text-[#d9d6ba] hover:underline"
                                    >
                                        Register
                                    </button>
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
