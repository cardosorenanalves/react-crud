import styled from "styled-components"

export const Container = styled.div`
height: 5rem;
border-bottom: 1px solid var(--gray-800);
`;

export const DivHeader = styled.div`
max-width: 1120px;
    height: 5rem;
    margin-left: 5%;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Nav = styled.nav`
  margin-left: 5rem; 
      height: 5rem; 
   
`;

export const ActiveLink = styled.a`
            font-size: 18px;
            display: inline-block;
            position: relative;
            padding: 0 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: var(--gray-300);

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            &:hover{
                color: var(--white);
            }

            &.active{
                color: var(--white);
                font-weight: bold;
            }

`;

export const Logo = styled.img`
width: 55px;
height: 55px;
`;