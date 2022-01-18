import React, { useState, useContext, createContext } from 'react'
import { Container, Inner, Title, Header, Body, Item, Frame } from './styles/accordion'

const ToogleContext = createContext()

export default function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>            
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toogleShow, setToogleShow] = useState(false)
    return (
        <ToogleContext.Provider value={{toogleShow, setToogleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToogleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const { toogleShow, setToogleShow } = useContext(ToogleContext)
    return (
        <Header onClick={() => setToogleShow(!toogleShow)} {...restProps}>
            {children}
            {toogleShow ?                
                <img src='/images/icons/close.png' alt='cerrar'/>:
                <img src='/images/icons/add.png' alt='abrir'/>
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const { toogleShow } = useContext(ToogleContext)
    return toogleShow && <Body {...restProps}>{children}</Body>    
}

