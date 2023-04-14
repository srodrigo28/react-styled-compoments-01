import styled from "styled-components"

function App() {
  return (
    <Container>
      <Titulo>React Styled Compomentes</Titulo>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
    </Container>
  )
}

export default App

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #1c1c1c;
`;

export const Titulo = styled.h1`
  font-size: 30px;
  color: #fff;
`;

export const Item = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: blue;
  color: #fff;

  :hover{
    background-color: green;
    border: 5px solid #fff;
    border-radius: 50%;
    font-size: 30px;

    transition: 3s;

  }
`;