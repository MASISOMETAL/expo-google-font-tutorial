import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { HomeScreen } from './src/screens'
import { COLORS } from "./src/constants/Colors"
import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';

const App = () => {

    const [fontsLoaded] = useFonts({
        Lusitana_400Regular,
        Lusitana_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <HomeScreen />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})