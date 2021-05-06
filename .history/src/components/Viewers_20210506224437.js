import React from 'react'
import styled from 'styled-components'


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
        </Wrap>
      </Container>
    );
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    //grid-gap: 25px;
    //grid-template-colums: repeat(5, minmax(0, 1fr));

`
const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`