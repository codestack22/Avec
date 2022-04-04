import React from 'react'
import { Text ,TextInput, View, Button } from 'react-native'

export default function Form (){
    return(
        <View>
            <View>
                <Text>Insira os Dados:</Text>
                <TextInput 
                placeholder='City Name'
                keyboardType='default'>    
                </TextInput>

                <TextInput 
                placeholder='Country Name'
                keyboardType='default'>    
                </TextInput>

                <Button title="Salvar"/>

            </View>
            
        </View>
    );
}