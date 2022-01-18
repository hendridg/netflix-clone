import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    padding: 165px 45px;    
    border-bottom: 8px solid #222;    
`

export const Title = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;

    @media (max-width:600px) {
        font-size: 2rem;
    }
`

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    color: white;
    margin-top: 0px;
    text-align: center;
    font-weight: normal;

    @media (max-width:600px) {
        font-size: 1rem;
    }
`