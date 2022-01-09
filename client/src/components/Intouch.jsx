import React, { useRef } from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components'
import { mobile } from '../responsive';
import emailjs from '@emailjs/browser';

const Container = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 40vh;
    color: white;
    background-color: black;
    
`

const EmailContainer = styled.form`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: none;
  ${mobile({ width: "80%" })}

    
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center", fontSize: "40px" })}
`

const Desc = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center", fontSize: "20px" })}
    
`

const Button = styled.div`
    flex: 1;
    padding-left: 10px;
    cursor: pointer;
    border: none;
    color: white;
    background-color: black;
`

const Field = styled.input`
    border:none;
    flex: 8;
    font-size: 20px;
    padding-left: 10px;
`

const Intouch = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vz57kih', 'template_n03okhe', form.current, 'user_ImHCB104rkKDPKhAAlWs6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <Container>
            <Title>
                Let's keep in touch!
            </Title>
            <Desc>
                Get the most recent updates about the products.
            </Desc>
            <EmailContainer ref={form}>
                <Field name="to_email" placeholder="Type your Email...">

                </Field>
                <Button onClick={sendEmail}>
                    <SendOutlinedIcon fontSize="large" />
                </Button>
            </EmailContainer>
        </Container>
    )
}

export default Intouch
