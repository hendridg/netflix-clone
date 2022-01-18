import React from 'react'
import { OptForm } from '../components'


export default function OptFormContainer(){
    return (
        <OptForm>
            <OptForm.Input placeholder='Email Address'/>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart
            your membership.</OptForm.Text>
        </OptForm>
    )
}