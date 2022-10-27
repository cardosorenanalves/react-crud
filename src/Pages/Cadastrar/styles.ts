import styled from "styled-components";

 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 `;

 export const Content = styled.div`
 width: 450px;
 max-width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding: 1rem;
 `;

export const DivTitle = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
`;

 export const Title = styled.text`
 margin-top: 20%;
 font-size: 40px;
 `;

 export const SubTitle = styled.text`
 margin-top: 20px;
 margin-bottom: 30px;
 font-size: 23px;
 color: #D6DBD2;
 `;

export const Label = styled.text`
font-weight: bold;
margin-bottom: 5px;
`;

export const InputDiv = styled.text`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 width: 100%;
 
`;

 export const Input = styled.input`
 margin-bottom: 25px;
 border-radius: 5px;
 width: 100%;
 padding: 0.5rem;
 `;

 export const Button = styled.div`
 cursor: pointer;
 width: 100%;
 height: 40px;
 border-radius: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: bold;
 background-color: #004A8A;

 &:hover{
    filter: brightness( 75% );
 }
 
 `;
