import styled from 'styled-components';


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 24vw;
    border-radius: 35px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
    background-color: lightblue;

`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    height:75%;
`;
export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    height:25%;

`;

export const InputSo = styled.input`
    border-radius: 16px;
    width: 80%;
    height: 32px;
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const LoginButton = styled.button`
    background-color: lightpink;
    border-radius: 5px;
    min-height: 40px;
    min-width: 32px;
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :active{
        box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
    }

`;