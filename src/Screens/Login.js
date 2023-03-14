import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { sigin } from "../../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clickedPassword, isClickedPassword] = useState("");

  const handleEyePassword = () => {
    isClickedPassword(!clickedPassword);
  };

  
  const handleLogin = async() =>{
    try{
      await sigin(email,password);
      navigation.navigate("hometab")
    } catch(error){
      Alert.alert("An error occured try again please!");
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.title}>Budget Me</Text>
      </View>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
        Welcome Back!
      </Text>
      <View style={{ margin: 20 }}>
        <View style={styles.textField}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={styles.textField}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={clickedPassword ? false : true}
          />
          <TouchableOpacity onPress={handleEyePassword}>
            {clickedPassword ? (
              <Entypo
                style={{ top: 10, right: 10 }}
                name="eye"
                size={24}
                color="black"
              />
            ) : (
              <Entypo
                style={{ top: 10, right: 10 }}
                name="eye-with-line"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#0165FF" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#0165FF",
            marginVertical: 10,
            borderRadius: 5,
            padding: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={{ paddingHorizontal: 50, paddingVertical: 10 }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: "row", justifyContent:'center' }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              
              onPress={() => navigation.navigate("signup")}
            >
              <Text style={{ color: "#0165FF" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: "center" }}> Or </Text>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#F1F6F7",
              marginVertical: 10,
              borderRadius: 5,
              padding: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("signup")}
              style={{
                paddingHorizontal: 50,
                paddingVertical: 10,
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="google"
                style={{ right: 50 }}
                size={24}
                color="#FE413D"
                backgroundColor="#3b5998"
              />
              <Text
                style={{ color: "#626B7D", fontSize: 15, fontWeight: "bold" }}
              >
                Login with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#F1F6F7",
              marginVertical: 10,
              borderRadius: 5,
              padding: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("signup")}
              style={{
                paddingHorizontal: 50,
                paddingVertical: 10,
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="facebook-f"
                color="#1D9BF0"
                size={24}
                style={{ right: 40 }}
              />
              <Text
                style={{ color: "#626B7D", fontSize: 15, fontWeight: "bold" }}
              >
                Login with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 60,
    fontWeight: "bold",
    color: "#0165FF",
  },
  textField: {
    borderWidth: 0.8,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  input: {
    padding: 10,
    flex: 1,
  },
});
