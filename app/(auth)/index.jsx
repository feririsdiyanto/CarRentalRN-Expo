import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Link , router} from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function LogIn({navigation}) {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.ContainerImage}>
        <Image source={require("@/assets/images/SmallTMMIN.png")}></Image>
      </View>
      <Text style={styles.heading}>Welcome Back!</Text>
      <View style={styles.ContainerInput}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="feririsdiyanto021@gmail.com"
        ></TextInput>
      </View>
      <View style={styles.ContainerInput}>
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <View style={styles.ContainerBUtton}>
        <View style={styles.button}>
          <Button title="Sign In" color="#3D7B3F" onPress={() => router.navigate('../(tabs)') }/>
          <Text style={styles.textRegister}>
            Don't have an account?{`  `}
            <Link href="./(auth)/Register" style={styles.textLink}>
              Sign Up for free
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ContainerImage: {
    paddingHorizontal: 20,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "PoppinsBold",
    marginVertical: 20,
  },
  ContainerInput: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ContainerBUtton: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  textLabel: {
    fontSize: 14,
    fontFamily: "PoppinsBold",
  },
  textLink: {
    color: "#0D28A6",
    textDecorationLine: "underline",
  },
  textRegister: {
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    padding: 8,
    marginTop: 10,
    fontFamily: "Poppins",
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {},
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
