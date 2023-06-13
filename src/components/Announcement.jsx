import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:600;
`

const Announcement = () => {
  return (
    <Container>Announcement</Container>
  )
}

export default Announcement