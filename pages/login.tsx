import { NextPage } from 'next';
import React from 'react';

import 'styles/index.css';

const LoginPage: NextPage = () => (
    <div className="bg-gray-900 h-screen flex flex-wrap items-center">
        <div className="container mx-auto flex justify-center pt-8">
            <div className="w-full max-w-xs self-center">
                <h1 className="text-white text-4xl font-bold">Login</h1>

                <div className="flex justify-center bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <button
                        className="bg-plex hover:bg-plex-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign in with Plex
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LoginPage;
