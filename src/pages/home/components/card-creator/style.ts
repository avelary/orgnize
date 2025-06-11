import styled from "styled-components"

export const Container = styled.div`
  width: 20.4rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: .1rem solid #A7A7A7;
  border-radius: 1.6rem;

  img {
    width: 2rem;
  }
`


export const EditContainer = styled.div`
  width: 20.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.6rem;
  gap: 1rem;
  border-radius: 1.6rem;
  border: .1rem solid #A7A7A7;
`

export const Input = styled.input`
  width: 100%;
  padding: .8rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: .1rem solid #A7A7A7;
  border-radius: .8rem;
  outline: #1988E9;
`