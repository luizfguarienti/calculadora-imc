import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#967ADC',
        
    },
    view1 : {
        paddingTop: 36
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center'
    },
    subtitle: {
        color: '#fff',
        alignContent: 'center',
        textAlign: 'center'
    },
    form : {
        paddingTop: 80,
        paddingLeft:20,
        flexDirection: 'row',
        gap: 90
    },
    inputText: {
        color: '#fff',
    },
    inputForms : {
        flexDirection: 'column'
    },
    input: {
        height: 56,
        width: 125,
        backgroundColor: '#fff',
        color: '#967ADC',
        paddingLeft: 16,
        borderRadius: 5, 
        fontSize: 18,
        
    },
    input2: {
        height: 56,
        width: 125,
        backgroundColor: '#fff',
        color: '#967ADC',
        paddingLeft: 16,
        borderRadius: 5, 
        fontSize: 18
    },
    btnCalc: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 100,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn : {
        color: '#967ADC',
        fontSize: 24
    },
    result : {
        flex: 0.9,
        backgroundColor: '#fff',
        marginTop: 24
    },
    textResult : {
        color: '#967ADC',
        textAlign: 'center',
        marginTop: 80

    },
    textResult2 : {
        marginTop: 24,
        color: '#967ADC',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textFooter : {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 15
    }
}
)   