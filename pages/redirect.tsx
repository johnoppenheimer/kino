import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';

import 'styles/index.css';

import { env } from 'utils/config';
import plexClient from 'utils/plexClient';

import Container from 'components/UI/Container';
import Layout from 'components/UI/Layout';
import Nav from 'components/UI/Nav';
import Spinner from 'components/UI/Spinner';

interface IRedirectPageProps {
    id: string;
}

const RedirectPage: NextPage<IRedirectPageProps> = ({ id }) => {
    const { data: authData } = useQuery('authUser', () => plexClient(`api/v2/pins/${id}.json`));

    const { data: response, isLoading, error } = useQuery(
        () => ['fetchUser', { authToken: authData.authToken }],
        variables =>
            plexClient('users/account.json', {
                headers: {
                    'X-Plex-Token': variables.authToken,
                },
            }),
    );

    return (
        <Container>
            <Nav />
            <Layout>
                {isLoading && <Spinner />}
                {response && <pre className="text-white">{JSON.stringify(response.user, null, 2)}</pre>}
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
