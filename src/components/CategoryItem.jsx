import  styled  from "styled-components"


const Container = styled.div`
flex: 1;
margin: 15px;
height: 50vh;
position: relative;
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
cursor: pointer;
`



const Info = styled.div`
position: absolute;
top: 30%;
left: 0;
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
cursor: pointer;
`


const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
border: none;
padding: 10px;
font-weight: 600;
background-color: white;
cursor: pointer;
`



const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Click me!</Button>
        </Info>
    </Container>

    
  )
}

export default CategoryItem