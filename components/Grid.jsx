import React from "react";
import { View, StyleSheet } from "react-native";


export function Container({style , children}){
    return (
        <View style={{ ...styles.container, style}}>
            {children}
        </View>
    )
}

export function Row({children , alignItems, justifyContent, style}){
    return (
        <View style={{
            ...styles.row,
            alignItems: alignItems ? alignItems  : 'baseline',
            justifyContent: justifyContent ? justifyContent : 'flex-start',
            ...style
        }}>
            {children}
        </View>

    )
}

export function Col({children}){
    return (
        <View>
            {children}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        
      },
    row: {
      flexDirection: 'row',
    },

  });