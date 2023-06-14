import {Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
`
const Title=styled.div`
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right=styled.div`
    flex:1;
    padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>NODE.</Logo>
              <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eius earum saepe natus ratione, iusto architecto rerum consequatur omnis impedit.</Desc>
              <SocialContainer>
                  <SocialIcon color="55ACEE">
                      <Twitter/>
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="0A66C2">
                      <LinkedIn/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
              <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{marginRight:"10px"}}/> 221B, Baker Street, London</ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/> +91 223 2554 221</ContactItem>
              <ContactItem><MailOutline style={{marginRight:"10px"}} /> prateekrath28@gmail.com</ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
          </Right>
    </Container>
  )
}

export default Footer