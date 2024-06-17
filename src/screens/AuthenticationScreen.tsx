import React from 'react';
import {styled, Text, View} from 'tamagui';
import Input from '../components/Input';
import Button from '../components/Button';

const InputLabel = styled(Text, {
    marginBottom: 8,
    marginLeft: 2,
});

function AuthenticationScreen() {
    return (
        <View flex={1} justifyContent={'center'} padding={80}>
            <Text mb={64} alignSelf={'center'} fontSize={28}>Login</Text>
            <InputLabel>Last.fm username or email</InputLabel>
            <Input marginBottom={'$6'} height={'$button'}></Input>
            <InputLabel>Last.fm password</InputLabel>
            <Input height={'$button'} marginBottom={54}/>
            <Button>Login</Button>
        </View>
    );
}

export default AuthenticationScreen;
