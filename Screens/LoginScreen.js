import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"white", alignItems:"center", padding:10}}>
      <View style={{margin:80}}>
          <Text style={{color:"blue", padding: 20, fontWeight:"600", fontSize:17}}> Inscrivez-vous</Text>

          <Text>connectez-vous à votre compte</Text>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})