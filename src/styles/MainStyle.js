import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    ImageContainer: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: 150,
        fontSize: 24,
        color: '#000',
        marginBottom: 15,
    },
    SuccessButton: { 
        color: '#CE7AB',
    },
    DeleteButton: { 
        color: '#B22222',
    },
    FlatListContainer: { 
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ce7abb',
        alignItems: 'center',
        marginVertical: 5, // Add spacing between items
    },
    FlatListTextStyle:{
        color: '#FFF',
        fontSize: 24,
    }
})