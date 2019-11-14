import Head from 'next/head';
import React from 'react';

import Card from 'components/UI/Card';
import Container from 'components/UI/Container';
import Label from 'components/UI/Label';
import Layout from 'components/UI/Layout';
import MovieCard from 'components/UI/MovieCard';
import Nav from 'components/UI/Nav';

import 'styles/index.css';

const FakeList = () => {
    const list = [];

    for (let i = 0; i < 12; i++) {
        list.push(
            <MovieCard
                url="#"
                title="Star Wars: The Rise of Skywalker"
                imageUrl="https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
            />,
        );
    }

    return <>{list}</>;
};

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <Nav />
            <Layout>
                <div className="mb-6">
                    <Label.Title>Search a movie or a show</Label.Title>
                    <Card>
                        <input
                            className="bg-gray-700 appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Citizen Kane"
                        />
                    </Card>
                </div>
                <div className="mb-6">
                    <Label.Title>Latest</Label.Title>
                    <div className="flex content-start flex-wrap">
                        <FakeList />
                    </div>
                </div>
            </Layout>
        </Container>
    </div>
);

export default Home;
