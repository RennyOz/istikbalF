
import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'

const Container=styled.div`

`

const Wrapper=styled.div`
padding: 50px;
display: flex;
`

const ImgContainer=styled.div`
flex: 1;
`

const Image=styled.img`
 width: 100%;
 height: 90vh;
 object-fit: cover;
`

const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
`

const Title=styled.h1`
font-weight: 200;
`

const Desc=styled.p`
margin:20px 0px;
`

const Price=styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`

const AddContainer=styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`

const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 4px;
`

const Button=styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`



const Product = () => {
  return (
     <Container>
       <Announcement/>
       <Navbar/>
       <Wrapper>
         <ImgContainer>
           <Image src="https://extramobilya.com/wp-content/uploads/2018/12/ankara-chester-koltuk-takimi-3.jpg" />
         </ImgContainer>
         <InfoContainer>
           <Title>Item Number One</Title>
           <Desc>
             Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
            </Desc>
           <Price>3000$</Price>
           <FilterContainer>
             <Filter>
               <FilterTitle>Color</FilterTitle>
               <FilterColor color = "black"/>
               <FilterColor color = "Gray"/>
               <FilterColor color = "Green"/>
             </Filter>
           </FilterContainer>
           <AddContainer>
             <AmountContainer>
              <Remove></Remove>
              <Amount>1</Amount>
              <Add></Add>
             </AmountContainer>
             <Button>Add to cart</Button>
           </AddContainer>
         </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
     </Container>
  )
}

export default Product