import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    flex-direction: column;    
    width: 20em;
    padding: 3em 1em;
    border-radius: 0.3em;
    background-color: rgba(0, 0, 0, 0.6);
    margin: auto;
    margin-bottom: 2em;

`
export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
`

export const Submit = styled.div``

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    margin:0;
`

export const Input = styled.input`
    background-color: #333;
    border: 0;
    height: 2em;
    border-radius: 0.2em;
    margin-top: 2em;
    padding: 1em 1em;
`
export const Button = styled.button`
    padding: 0.5em 3em;
    background-color: #e50914;
    margin-top: 1em;
    border: none;
    border-radius: 0.2em;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`

export const Text = styled.p`
    color: white;
    font-size: 14px;
    margin-bottom: 2px;
    
`

export const TextSmall = styled.p`
    color: white;
    font-size: 12px;
    line-height: 1;
    
`

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
        font-weight: 900;
    }
`