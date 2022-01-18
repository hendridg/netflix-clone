import React from 'react'
import { Container, Base, Error, Submit, Title, Input, Text, TextSmall, Link, Button} from './styles/form'

export default function Form({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
}

Form.Error = function FormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({to, children,...restProps}){
    return <Link to={to} {...restProps}>{children}</Link>
}

Form.Button = function FormButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}
