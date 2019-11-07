import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import 'styles/index.css';

import fetch from 'lib/fetch';

import Container from 'components/UI/Container';
import Layout from 'components/UI/Layout';
import Nav from 'components/UI/Nav';
import Spinner from 'components/UI/Spinner';

interface IRedirectPageProps {
    id: string;
}

const RedirectPage: NextPage<IRedirectPageProps> = ({ id }) => {
    const { data: authData } = useQuery('authUser', () =>
        fetch(`https://plex.tv/api/v2/pins/${id}.json`, {
            headers: {
                'X-Plex-Product': process.env.PROJECT_NAME,
                'X-Plex-Platform': 'Web',
                'X-Plex-Device': `${process.env.PROJECT_NAME} (Web)`,
                'X-Plex-Client-Identifier': process.env.CLIENT_IDENTIFIER,
            },
        }),
    );

    const { data: user, isLoading, error } = useQuery(
        () => ['fetchUser', { authToken: authData.authToken }],
        variables =>
            fetch(' https://plex.tv/users/account.json', {
                headers: {
                    'X-Plex-Token': variables.authToken,
                    'X-Plex-Product': process.env.PROJECT_NAME,
                    'X-Plex-Platform': 'Web',
                    'X-Plex-Device': `${process.env.PROJECT_NAME} (Web)`,
                    'X-Plex-Client-Identifier': process.env.CLIENT_IDENTIFIER,
                },
            }),
    );

    return (
        <Container>
            <Nav />
            <Layout>
                {isLoading && <Spinner />}
                {user && <pre className="text-white">{JSON.stringify(user, null, 2)}</pre>}
            </Layout>
        </Container>
    );
};

RedirectPage.getInitialProps = async ({ query }) => {
    const { id } = query;

    if (typeof id === 'string') {
        return Promise.resolve({ id });
    }
    return Promise.reject();
};

export default RedirectPage;
