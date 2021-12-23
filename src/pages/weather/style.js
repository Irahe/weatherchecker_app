import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;


export const WeatherSummary = styled.div`
    width: 30vw;
    font-size: 28px;
    font-color: green;

`;
export const WeatherTemp = styled.div`
    font-size: 72px;
    font-color: pink;

`;