import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from "../constants/Colors"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.formTitle}>Ingresar</Text>
                <TextInput style={styles.formInput} placeholder='Correo' />
                <TextInput style={styles.formInput} placeholder='Contraseña' secureTextEntry={true} />
                <TouchableOpacity style={styles.formButton}>
                    <Text style={styles.formButtonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerForm: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    formTitle: {
        fontSize: 24,
        fontFamily: "Lusitana_700Bold",
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    formInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    formButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "Lusitana_400Regular",
    },
});
