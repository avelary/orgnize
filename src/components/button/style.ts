import { NavLink } from "react-router";
import styled, {css} from "styled-components";
import { ButtonVariations } from ".";

export const Anchor = styled(NavLink)<{ $variation: ButtonVariations }>`
color: #1988E9;  
font-weight: 600;
font-size: 1.6rem;
text-decoration: underline;
`

export const Button = styled.button<{ $variation: ButtonVariations }>`
  display: flex;
  padding: 1rem 5.2rem;
  gap: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #1988E9;
  color: #FFF;

  &:hover {
    opacity: 0.7;
  }

  ${(props) => props.$variation === ButtonVariations.EXIT && css`
    display: flex;
    background-color: transparent;
    color: #000000;
    padding: 0rem;
  `}
`