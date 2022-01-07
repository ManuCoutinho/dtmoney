import styled from "styled-components";
import { lighten, transparentize } from "polished";

export const Container = styled.header`
   background-image: linear-gradient(to right top, #d16dc8, #7595fe, #00c5d4, #d16dc8, #00c5d4);      
`;

const blue = '#5429CC';

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: 2em;    
    padding: 0.5rem;   
      img {        
        margin-right: 0.5rem;        
      }
  }

  button {
    font-size: 1rem;
    color: var(--white);
    background: ${lighten(0.1, blue)};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.2s;

      &:hover {
        background: ${transparentize(0.4, blue)};        
        transition: 0.2s;
    }
  }
`;
