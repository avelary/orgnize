import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;

    label {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.95rem;
        letter-spacing: -5%;
    }

    input {
        padding: 1rem;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.95rem;
        letter-spacing: -5%;
        border: none;
        outline: none;
        border-radius: .4rem;
        height: 4.5rem;
        background-color: #E1E1E1;
    }

`


export const ErrorMessage = styled.p`
    color: #F53D5C;
    font-size: 1rem;
    font-weight: 500;
`