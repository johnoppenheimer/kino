import { NextPage } from 'next';
import React from 'react';
import { useMutation } from 'react-query';

import { env } from 'lib/config';
import fetch from 'lib/fetch';

import Button from 'components/UI/Button';
import Container from 'components/UI/Container';

import 'styles/index.css';

const LoginPage: NextPage = () => {
    const [mutate, { isLoading }] = useMutation(() =>
        fetch('https://plex.tv/api/v2/pins.json?strong=true', {
            method: 'POST',
            headers: {
                'X-Plex-Product': env.projectName,
                'X-Plex-Platform': 'Web',
                'X-Plex-Device': `${env.projectName} (Web)`,
                'X-Plex-Client-Identifier': env.clientId,
            },
        }),
    );

    const login = async () => {
        try {
            const { code, id } = await mutate();
            if (code) {
                const websiteURL = encodeURIComponent(window.location.origin);
                window.location.href = `https://app.plex.tv/auth#?context[device][product]=${env.projectName}&context[device][environment]=bundled&context[device][layout]=desktop&context[device][platform]=Web&context[device][device]=${env.projectName}%20(Web)&clientID=${env.clientId}&forwardUrl=${websiteURL}%2Fredirect%3Fid%3D${id}&code=${code}`;
            }
        } catch (err) {
            // TODO: show error
        }
    };

    return (
        <Container className="flex flex-wrap items-center">
            <div className="container mx-auto flex justify-center pt-8">
                <div className="w-full max-w-xs self-center">
                    <h1 className="text-white text-4xl font-bold">Login</h1>

                    <div className="flex justify-center bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                        <Button color="plex" loading={isLoading} onClick={login}>
                            Login with Plex
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;
