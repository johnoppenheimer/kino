import Head from 'next/head';
import React from 'react';

import Container from 'components/UI/Container';
import Layout from 'components/UI/Layout';
import Nav from 'components/UI/Nav';

import 'styles/index.css';

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Container>
            <Layout>
                <h1 className="text-white text-4xl text-bold">Search a movie or a show</h1>
                <div className="block bg-gray-800 shadow-lg rounded p-6">
                    <input
                        className="bg-gray-700 appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Citizen Kane"
                    />
                </div>
            </Layout>
        </Container>
    </div>
);

export default Home;
