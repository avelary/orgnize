import styled from "styled-components"

export const Container = styled.div`
  width: 20.4rem;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1.6rem;
  gap: 1.6rem;
  border-radius: 1.6rem;
  border: 0.1rem solid #a7a7a7;
  cursor: grab;
`

export const Title = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -5%;
  color: #000000;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: block;
`

export const Description = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -5%;
  color: #1988e9;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: block;
`
