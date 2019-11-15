import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';

import Card from 'components/UI/Card';
import Container from 'components/UI/Container';
import Label from 'components/UI/Label';
import Layout from 'components/UI/Layout';
import MovieCard from 'components/UI/MovieCard';
import Nav from 'components/UI/Nav';

import 'styles/index.css';

const Home = () => {
    const [input, setInput] = useState('');
    const [contents, setContents] = useState([]);

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);

        // TODO: Create local axios instance + use react-query
        axios('/api/search', { params: { search: value } })
            .then(response => {
                setContents(response.data.filter(content => ['movie', 'tv'].indexOf(content.media_type) !== -1));
            })
            .catch(error => {
                // TODO: show error
            });
    };

    return (
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
                                value={input}
                                onChange={search}
                            />
                        </Card>
                    </div>
                    <div className="mb-6">
                        {contents.length > 0 && (
                            <>
                                <Label.Title>Results</Label.Title>
                                <div className="flex content-start flex-wrap">
                                    {contents.map(content => (
                                        <MovieCard
                                            key={content.id}
                                            url="#"
                                            title={content.title || content.original_name}
                                            imageUrl={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </Layout>
            </Container>
        </div>
    );
};

export default Home;
