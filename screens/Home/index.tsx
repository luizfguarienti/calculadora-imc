import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function Home() {    

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const [resultado, setResultado] = useState('');
    
    function handleCalc () {
        var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        if (imc < 18.5) {
            setResultado('Baixo peso');
        } else if (imc >= 18.5 && imc < 24.9 ) {
            setResultado('Peso normal')
        } else if (imc >= 24.9 && imc < 29.9) {
            setResultado('Sobrepeso')
        } else if (imc >= 29.5 && imc < 34.9) {
            setResultado('Obesidade grau 1')
        } else if (imc >= 34.9 && imc < 39.9) {
            setResultado('Obesidade grau 2')
        } else {
            setResultado('Obesidade grau 3')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <Text style={styles.subtitle}>Descubra qual o seu índice de massa corporal</Text>

                <View style={styles.form}>
                    <View >
                        <Text style={styles.inputText}>Peso (kg)</Text>
                        <TextInput style={styles.input} 
                            onChangeText={text => setPeso(text)}
                            value={peso} ></TextInput>
                    </View>
                    
                    <View >
                        <Text style={styles.inputText}>Altura (kg)</Text>
                        <TextInput style={styles.input2} 
                            onChangeText={text => setAltura(text)}
                            value={altura} ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnCalc} onPress={handleCalc}>
                    <Text style={styles.textBtn}>CALCULAR</Text>
                </TouchableOpacity>
            </View>  
            <View style={styles.result}>
                <Text style={styles.textResult}>Seu índice de massa corporal é</Text>
                <Text style={styles.textResult2}>{resultado}</Text>
            </View>
            <View>
                <Text style={styles.textFooter}>CESUL</Text>
            </View>
        </View>
        
    )
}