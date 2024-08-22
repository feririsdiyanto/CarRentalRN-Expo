import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function ButtonIcon({onPress, style, ...rest}){
    return (
        <Pressable style={styles.box} onPress={onPress}>
            <Ionicons size={28} style={[style]} {...rest} />
        </Pressable>

    )
}

const styles = StyleSheet.create({
    box: {
      borderRadius: 8,
      backgroundColor: '#A43333',
      padding: 10,
    },
  });
  