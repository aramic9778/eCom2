import React from 'react'
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { mobile, tablet } from '../responsive';


const Container = styled.div`
    display:flex;
    
    color: white;
    background-color: black;
    ${mobile({ flexDirection: "column" })}
    ${tablet({ marginBottom: "60px", flexDirection: "column" })}
    
`

const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({ display: "none" })}
    ${tablet({ display: "none" })}
    
`

const Right = styled.div`
    flex: 1;
    flex-direction: column;
    display:flex;
    justify-content: center;
    align-items: center;
    ${mobile({ marginBottom: "20px" })}
`
const SocContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`
const Icon = styled.div`
    margin: 20px;
    cursor: pointer;
    
    
`
const Title = styled.div`
    font-family: 'Luckiest Guy';
    font-weight: 100;
    font-size: 39px;
    margin-bottom: 30px;
    ${mobile({ fontSize: "25px", alignItems: "center", marginBottom: "15px" })}
    ${tablet({ fontSize: "35px", textAlign: "center", marginBottom: "15px" })}
    
`

const Logo = styled.h1`
    font-family: 'Luckiest Guy';
    font-weight: 100;
    font-size: 40px;
    ${mobile({ fontSize: "35px", alignItems: "center" })}
`

const Log = styled.div`
    display:flex;
    flex-direction: row;
    margin: 15px;
`

const Logo2 = styled.h1`
    color: red;
    font-family: 'Luckiest Guy';
    font-weight: 100;
    font-size: 40px;
    margin-left: 1px;
    margin-right: 5px;
    ${mobile({ fontSize: "35px" })}
`

const Contact = styled.div`
    font-size: 25px;
    margin-bottom: 8px;
    
`
const Desc = styled.p`
    font-size: 20px;
    ${mobile({ marginLeft: "15px", marginRight: "15px", textAlign: "center" })}
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Log>
                    <Logo>
                        crazy
                    </Logo>
                    <Logo2>
                        .
                    </Logo2>
                    <Logo>
                        fingers
                    </Logo>
                </Log>
                <Desc>
                    This is my first ECommerce Portfolio Project. I created it by using HTML, CSS, JavaScript with the React Framework. In this footer you can find links to my social media
                    accounts and other contact information. Thank you for being here and seeing my project.
                </Desc>
            </Left>
            <Center>
                <Title>
                    Social Media Links
                </Title>
                <SocContainer style={{ marginTop: "35px" }}>
                    <a style={{ color: "white" }} target="_blank" rel="noreferrer" href="https://www.instagram.com/50dram/">
                        <Icon>
                            <InstagramIcon fontSize="large" />
                        </Icon>
                    </a>
                    <a style={{ color: "white" }} target="_blank" rel="noreferrer" href="https://github.com/aramic9778">
                        <Icon>
                            <GitHubIcon fontSize="large" />
                        </Icon>
                    </a>
                    <a style={{ color: "white" }} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aram-antonyan-78bb58132/">
                        <Icon>
                            <LinkedInIcon fontSize="large" />
                        </Icon>
                    </a>
                </SocContainer>
            </Center>
            <Right>
                <Title>
                    Contact Information
                </Title>
                <Contact>
                    <LocationOnIcon />
                    Kirkland, Washington

                </Contact>
                <Contact>
                    <LocalPhoneIcon />
                    +1 (425) 496-50-83

                </Contact>
                <Contact>
                    <EmailIcon />
                    aramic9778@gmail.com

                </Contact>
            </Right>
        </Container>
    )
}

export default Footer
