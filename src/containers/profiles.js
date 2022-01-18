import React, { useState} from 'react';
import { Header, Profiles } from '../components/'
import * as ROUTES from '../constants/routes'

export function SelectProfileContainer({users, setProfile}) {
    return (  
        <>      
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
            </Header.Frame>
        </Header> 
        <Profiles>
            <Profiles.Title>Who is watching?</Profiles.Title>
            <Profiles.List> 
                    {users.map((user, index) => {
                        return (
                            <Profiles.User key={index} onClick={() => setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            })}>
                                <Profiles.Picture src={user.photoURL}/>
                                <Profiles.Name>{user.displayName}</Profiles.Name>  
                            </Profiles.User> 
                        )
                    })}
                                                  
            </Profiles.List>
        </Profiles>
        </>      
    )
}