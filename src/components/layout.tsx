import styled from "styled-components"
interface Props{
  children?: JSX.Element
}
const Outer = styled.div`
  padding-top: 4em;
`
const Main = styled.main`
  max-width: 50em;
  min-height: 80vh;
  padding: 1em;
  margin: 0 auto;
  border-radius: 1.2em;
  box-shadow: 0 0 2em #00000010;
`
export default ({children}: Props) => {
  return(
    <Outer>
      <Main>
        {children}
      </Main>
    </Outer>
  )
}
