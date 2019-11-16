import axios from 'axios';
import Head from 'next/head';
import React, { useRef, useState } from 'react';

import Card from 'components/UI/Card';
import Container from 'components/UI/Container';
import Label from 'components/UI/Label';
import Layout from 'components/UI/Layout';
import MovieCard from 'components/UI/MovieCard';
import Nav from 'components/UI/Nav';
import Spinner from 'components/UI/Spinner';

import useDebounce from 'hooks/useDebounce';

import 'styles/index.css';

const Home = () => {
    // Has the user search something at least once
    const [searched, setSearched] = useState(false);

    const [input, setInput] = useState('');
    const search = useDebounce(['multisearch', { value: input }], ({ value }) =>
        axios('/api/search', { params: { search: value } }),
    );

    const contents = useRef([]);
    if (search.data) {
        contents.current = search.data.data.filter(content => ['movie', 'tv'].indexOf(content.media_type) !== -1);
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!searched) {
            setSearched(true);
        }
        setInput(event.target.value);
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
                                onChange={onInputChange}
                            />
                        </Card>
                    </div>
                    <div className="mb-6">
                        {searched && (
                            <>
                                <div className="flex items-baseline">
                                    <Label.Title>Results</Label.Title>
                                    {search.isLoading && <Spinner className="ml-3" />}
                                </div>
                                <div className="flex content-start flex-wrap">
                                    {contents.current.map(content => (
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
