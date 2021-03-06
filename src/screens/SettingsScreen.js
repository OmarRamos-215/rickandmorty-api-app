import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props){

    const {navigation}= props
    const goToHome= () => {}
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button onPress={()=>{navigation.navigate("Home") }} title='Go to Home' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });