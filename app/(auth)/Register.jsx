import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Register() {
  return (
    <>
      <StatusBar style="dark" />
        <View style={styles.ContainerImage}>
          <Image source={require("@/assets/images/SmallTMMIN.png")}></Image>
        </View>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.ContainerInput}>
          <Text style={styles.textLabel}>Name*</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
          ></TextInput>
        </View>
        <View style={styles.ContainerInput}>
          <Text style={styles.textLabel}>Email*</Text>
          <TextInput
            style={styles.textInput}
            placeholder="feririsdiyanto021@gmail.com"
          ></TextInput>
        </View>
        <View style={styles.ContainerInput}>
          <Text style={styles.textLabel}>Create Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="6+ Character"
          ></TextInput>
        </View>
        <View style={styles.ContainerBUtton}>
          <View style={styles.button}>
            <Button title="Sign Up" color="#3D7B3F"></Button>
            <Text style={styles.textRegister}>
              Already Have an account?{`  `}
              <Link href="/" style={styles.textLink}>
                Sign In here
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
    marginTop:20,
    marginBottom: 20,
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
  button: {},
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
