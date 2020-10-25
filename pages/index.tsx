import { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useQuery } from 'react-query';

import Card from 'components/UI/Card';
import Container from 'components/UI/Container';
import ContentCard from 'components/UI/ContentCard';
import Label from 'components/UI/Label';
import Layout from 'components/UI/Layout';
import Nav from 'components/UI/Nav';
import Spinner from 'components/UI/Spinner';

import Content from 'models/Content';
import { search } from 'utils/localClient';

const debounceSearch = AwesomeDebouncePromise(async (input: string) => {
    return await search(input);
}, 200);

const Home: NextPage = () => {
    // Has the user search something at least once
    const [searched, setSearched] = useState(false);

    const [input, setInput] = useState('');

    const searchResult = useQuery<Content[]>(['multi-search', input], (key, input) => debounceSearch(input));

    const contents = useRef<Content[]>([]);
    if (searchResult.data) {
        contents.current = searchResult.data;
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
                                    {searchResult.isLoading && <Spinner className="ml-3" />}
                                </div>
                                <div className="flex content-start flex-wrap justify-between">
                                    {contents.current.map((content) => (
                                        <ContentCard key={`content-${content.getId()}`} content={content} />
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
