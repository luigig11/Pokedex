import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParams } from "../navigator/Navigator";

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

   const { simplePokemon, color } = route.params;

   return (
      <View>
         {/* header container */}
         <View style={{
            ...styles.headerContainer,
            backgroundColor: color,
         }}>
            <TouchableOpacity
               activeOpacity={0.8}
            >
               <Icon 
                  name='arrow-back-outline'
                  color='white'
                  size={30}
               />
            </TouchableOpacity>

         </View>
      </View>

   )
}

const styles = StyleSheet.create({
   headerContainer: {
      height: 370,
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius: 1000
   }
})