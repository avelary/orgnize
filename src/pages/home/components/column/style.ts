import styled, { css } from "styled-components"
import { CardState } from "../../../../context";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 100%;
    letter-spacing: -5%;
  }
`

export const StatusBall = styled.div<{ state: CardState }>`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 5rem;

  ${({ state }) => {
    switch (state) {
      case CardState.BACKLOG:
        return css`
          background-color: #e9e62e;
        `
      case CardState.IN_PROGRESS:
        return css`
          background-color: #ec931f;
        `
      case CardState.READY:
        return css`
          background-color: #3ce018;
        `
      case CardState.IN_TEST:
        return css`
          background-color: #9f03e1;
        `
      case CardState.APROVED:
        return css`
          background-color: #1988e9;
        `
    }
  }}
`

export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`