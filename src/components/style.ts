import styled from 'styled-components';

export const Nav = styled.nav`
    width: 80%;
    margin: auto;
    background-color: black;
    h1 { 
        color: white;
        text-align: center;
    }
    a  { 
        color: white;
        text-decoration: none;
        margin-left: 10%;
    }
    img {
        border-radius: 10px;
        margin: 5px;
    }
`
export const FooterStyle = styled.footer`
    width: 80%;
    margin: auto;
    background-color: black;
    h6 { 
        color: white;
        text-align: center;
    }
    a  { 
        color: white;
        text-decoration: none;
        margin-left: 10%;
    }
    img {
        border-radius: 10px;
        margin: 5px;
    }
`
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    margin-left: 5%;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const Content = styled.div`
    background-color: black;
`

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: whitesmoke;
    color: black;
    border-radius: 0 .35rem .25rem 0;
    margin-top: 1rem;
    margin-left: 30%;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const FormContainer = styled.div`
    display: block;
    flex-direction: column;
    max-height: 40%;
    margin-left: 25%;
    max-width: 70vw;
    background-color: whitesmoke;
    padding: 15px;
    border-radius: 10%;
    margin-left: auto;
    margin-right: auto;
`
