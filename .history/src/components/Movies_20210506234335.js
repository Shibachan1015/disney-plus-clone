import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisneyplus.disney.co.jp%2Fview%2F%23!%2Fseries%2Fdetailed%2F%25E3%2582%25B6%25E3%2583%25BB%25E3%2582%25B7%25E3%2583%25B3%25E3%2583%2597%25E3%2582%25BD%25E3%2583%25B3%25E3%2582%25BA%2F413323&psig=AOvVaw2_LJ0xC3A1dXJjqTHzBozN&ust=1620398559019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCB_JeltfACFQAAAAAdAAAAABAD" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`


`
const Content = styled.div`


`

