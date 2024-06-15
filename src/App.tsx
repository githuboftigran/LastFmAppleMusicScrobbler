import React from 'react';
import {TamaguiProvider, Text, View} from 'tamagui';

import config from '../tamagui.config';

function App() {
    return (
        <TamaguiProvider config={config}>
            <View flex={1} backgroundColor="$bg" theme={'dark'}>
                <Text>Hello</Text>
            </View>
        </TamaguiProvider>
    );
}

export default App;
