import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const check = () => {
    if (userName && password) {
      if (userName === "Client" && password === "1234") {
        navigation.navigate("ClientInterface");
      } else if (userName === "Admin" && password === "5678") {
        navigation.navigate("AdminInterface");
      } else {
        alert("Wrong connection, try again");
      }
    } else {
      alert("Empty fields");
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/loginback.png")}
        style={styles.image}
      >
        <Text style={styles.title}>Login</Text>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="UserName"
            onChangeText={setUserName}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          {/* <View style={styles.btnContainer}>
            <Button title="Login" onPress={check} />
          </View> */}
          <TouchableOpacity style={styles.btnContainer} onPress={check}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    alignSelf: "center",
    color: "black",
    marginTop: 100,
  },
  form: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10,
  },

  icon: {
    paddingRight: 8,
  },
  btnContainer: {
    marginTop: 20,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#212A3E",
    padding: 15,
    marginTop: 15,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
