import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { FadeInImage } from "../components/FadeInImage";
import { PokemonDetails } from "../components/PokemonDetails";
import { usePokemon } from "../hooks/usePokemon";
import { RootStackParams } from "../navigator/Tab1";

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

   const { simplePokemon, color } = route.params;
   const { id, name, picture } = simplePokemon;
   const { top } = useSafeAreaInsets();

   const { isLoading, pokemon } = usePokemon(id);
   /* console.log(pokemon); */


   return (
      <View style={{ flex: 1 }}>
         {/* header container */}
         <View style={{
            ...styles.headerContainer,
            backgroundColor: color,
         }}>
            <TouchableOpacity
               onPress={() => navigation.pop()}
               activeOpacity={0.8}
               style={{
                  ...styles.backButton,
                  top: top + 5
               }}
            >
               <Icon
                  name='arrow-back-outline'
                  color='white'
                  size={30}
               />
            </TouchableOpacity>

            {/* Pokemon name */}
            <Text
               style={{
                  ...styles.pokemonName,
                  top: top + 40
               }}
            >
               {name + '\n'}#{id}
            </Text>

            {/* Pokeball */}
            <Image
               source={require('../assets/pokebola-blanca.png')}
               style={styles.pokeBall}
            />

            <FadeInImage
               uri={picture}
               style={styles.pokemonImage}
            />

         </View>

         {/* Details and loadig */}
         {
            isLoading
               ? (
                  <View style={styles.loadingIndicator}>
                     <ActivityIndicator
                        color={color}
                        size={50}
                     />
                  </View>
               )
               : <PokemonDetails pokemon={pokemon} />
         }


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
   },
   backButton: {
      position: 'absolute',
      left: 20,
   },
   pokemonName: {
      color: 'white',
      fontSize: 40,
      alignSelf: 'flex-start',
      left: 20
   },
   pokeBall: {
      width: 250,
      height: 250,
      bottom: -20,
      opacity: 0.7
   },
   pokemonImage: {
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -15
   },
   loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})