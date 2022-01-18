import React from 'react'
import Feature from '../components/feature'
import { FaqsContainer } from '../containers/faqs'
import FooterContainer from '../containers/footer'
import HeaderContainer  from '../containers/header'
import JumbotroContainer from '../containers/jumbotron'
import OptFormContainer from '../containers/opt-form'




export default function Home() {
    return (
        <>
        <HeaderContainer textButton="Sign in">
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                <OptFormContainer />
            </Feature>            
        </HeaderContainer>
        <JumbotroContainer />
        <FaqsContainer />
        <FooterContainer/>        
        </>
    )
}