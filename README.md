## Criando Projeto
npm create vite@latest

cd react-styled-01
npm install
npm install -D styled-components
npm install -D @types/styled-components

## App Function
    import styled from 'styled-components';

    function App() {
        return(
            <Container>
                <Item>A</Item>
                <Item>B</Item>
                <Item>C</Item>
            </Container>
        )
    }
export default App

## Classes ou compoments styles

## Criando nosso primeiro container ou div
    export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

## Criando nossa segunda div
export const Item = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
`