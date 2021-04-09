import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding: 1rem 0;

  h2 {
    margin: unset;
    color: ${({
      theme: {
        colors: { darkBlack },
      },
    }) => darkBlack};
  }
`
