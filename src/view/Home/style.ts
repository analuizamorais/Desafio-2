import styled from 'styled-components';

export const Container = styled.div `
    width: 80%;
    margin: auto;

    section { 
        height: 100vh;
        width: 100%;
        background-color: black;
        display: flex;

        .product-content {
            display: grid;
            text-align: center;
            height: 300px;
            background-color: #fff;
            border-radius: 12px;
            padding: 12px;
            margin: 6px;
            width: 100px;
            height: auto;
        }
    }
`