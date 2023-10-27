import { StyleSheet, Text, View, TextInput, Pressable,KeyboardAvoidingView } from 'react-native'
import React,{ useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
//import AsyncStorage from "@react-native-async-storage/async-storage";



const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Home");
        } else {
          // token not found, afficher l'écran de connexion lui-même
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
    .post("http://localhost:8000/login", user)
    .then((response) => {
      console.log(response);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);

      navigation.replace("Home");
    })
    .catch((error) => {
      Alert.alert("Login Error", "Invalid email or password");
      console.log("Login Error", error);
    });
};


  return (
    <View style={{flex:1, backgroundColor:"white", alignItems:"center", padding:10}}>
          <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
            Connectez-vous
          </Text>

          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
          Connectez-vous à votre compte
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: 18 ,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Entrer votre mail"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Mot de passe
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Mot de passe"
            />
          </View>

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Connexion
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Vous n'avez pas de compte ? S'inscrire
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})