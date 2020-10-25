import { NextPage } from 'next';
import React from 'react';
import { useMutation } from 'react-query';

import plexClient from 'utils/plexClient';

import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import Container from 'components/UI/Container';
import Label from 'components/UI/Label';

const LoginPage: NextPage = () => {
    const [mutate, { isLoading }] = useMutation(() =>
        plexClient.post('api/v2/pins.json', null, {
            params: {
                strong: true,
            },
        }),
    );

    const login = async () => {
        try {
            const response = await mutate();
            const { code, id } = response.data;
            if (code) {
                const websiteURL = encodeURIComponent(window.location.origin);
                window.location.href = `https://app.plex.tv/auth#?context[device][product]=${process.env.PROJECT_NAME}&context[device][environment]=bundled&context[device][layout]=desktop&context[device][platform]=Web&context[device][device]=${process.env.PROJECT_NAME}%20(Web)&clientID=${process.env.CLIENT_IDENTIFIER}&forwardUrl=${websiteURL}%2Fredirect%3Fid%3D${id}&code=${code}`;
            }
        } catch (err) {
            // TODO: show error
        }
    };

    return (
        <Container className="flex flex-wrap items-center">
            <div className="container mx-auto flex justify-center pt-8">
                <div className="w-full max-w-xs self-center">
                    <Label.Title>Login</Label.Title>
                    <Card className="flex justify-center">
                        <Button color="plex" loading={isLoading} onClick={login}>
                            Login with Plex
                        </Button>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;
