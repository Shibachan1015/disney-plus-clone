import React from 'react'
import styled from 'styled-components'


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
        </Container>
    );
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grit-template-colums: repeat(5, minmax(0,1fr));


`
const Wrap = styled.div`
    
    border: s3px olid rgba(249)

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`