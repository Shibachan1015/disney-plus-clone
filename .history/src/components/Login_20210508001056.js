import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        z-index: -1;

    }

`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;

`
const CTALogoOne = styled.img`


`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;

    &:hover

`
