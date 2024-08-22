import { StyleSheet, View, Text, Image } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#A43333" />
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A43333", dark: "#A43333" }}
        headerImage={
          <View style={styles.container}>
            <View>
              <Text style={styles.textName}>Hi, Nama</Text>
              <Text style={styles.textLocation}>Your Location</Text>
            </View>
            <View>
              <Image
                source={require("@/assets/images/profile.png")}
                style={styles.imageProfile}
              />
            </View>
          </View>
        }
      >
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <View style={styles.bannertextContainer}>
              <Text style={styles.textBanner}>
                {`Sewa Mobil
Berkualitas di
Kawasanmu`}
              </Text>
              <Button title="Sewa Mobil" color="#5CB85F"></Button>
            </View>
            <View>
              <Image source={require("@/assets/images/zenix_2.png")}></Image>
            </View>
          </View>
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Constants.statusBarHeight+20,
    paddingHorizontal: 20,
  },
  banner: {
    flex: 1,
    // height: 160,
    backgroundColor: "#AF392F",
    marginTop: -100,
    borderRadius: 5,
  },
  bannerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  bannertextContainer: {
    width: "45%",
    padding: 10,
    paddingBottom: 20,
  },
  textName: {
    fontSize: 14,
    fontFamily: "PoppinsBold",
    color: "#ffffff",
  },
  textLocation: {
    fontSize: 16,
    fontFamily: "PoppinsBold",
    color: "#ffffff",
  },
  textBanner: {
    fontSize: 20,
    fontFamily: "Poppins",
    color: "#ffffff",
  },
  imageProfile: {
    height: 35,
    width: 35,
  },
});
