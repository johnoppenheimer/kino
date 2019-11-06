import Head from 'next/head';
import React from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container>
            <h1>Hello world</h1>
        </Container>
    </div>
);

export default Home;
