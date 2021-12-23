import React, { useState } from 'react';

import { login } from '../../services/api';

import {
    PageWrapper,
    LoginCard,
    InputsWrapper,
    ButtonsWrapper,
    InputSo,
    LoginButton
} from './style'

const Page = ({ goTo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = async () => {
        const response = await login({ email, password });

        if (response) {
            window.localStorage.setItem('_token', response?.token);
            window.localStorage.setItem('_user', response?.user);
            goTo('weather');
        }
    }

    return (
        <PageWrapper>
            <LoginCard>
                <InputsWrapper>
                    <InputSo
                        type="email"
                        placeholder="Type your email"
                        value={email}
                        onChange={(e) => { setEmail(e?.target?.value) }}
                        autoComplete='false'
                    />
                    <InputSo
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => { setPassword(e?.target?.value) }}
                        autoComplete='false'

                    />
                </InputsWrapper>
                <ButtonsWrapper>
                    <LoginButton
                        onClick={doLogin}
                    >
                        Login
                    </LoginButton>
                </ButtonsWrapper>
            </LoginCard>
        </PageWrapper>
    )
}

export default Page;