import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid #DADADA;
  padding: 0rem 15.2rem;

  div {
    width: 5.7rem;
  }
`
export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8rem 15.2rem;
`
export const Footer = styled.footer`
  width: 100%;
  height: 18.8rem;
  display: flex;
  justify-content: center;
  background-color: #1988E9;
`
