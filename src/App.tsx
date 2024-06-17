import React from 'react';
import {TamaguiProvider, View} from 'tamagui';

import config from '../tamagui.config';
import AuthenticationScreen from "@/src/screens/AuthenticationScreen";

console.log(JSON.stringify(config, null, 2));

function App() {
    return (
        <TamaguiProvider config={config}>
            <View flex={1} backgroundColor="$bg" theme={'dark'}>
                <AuthenticationScreen/>
            </View>
        </TamaguiProvider>
    );
}

export default App;
