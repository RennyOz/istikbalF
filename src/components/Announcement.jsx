import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: black;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`


const Announcement = () => {
  return (
      <Container>
          COVID-19: OUR STORE IS OPEN MONDAY TO FRIDAY FROM 9:30 AM TO 6 PM. TEL.(555) 555 5555
      </Container>
  )
}

export default Announcement