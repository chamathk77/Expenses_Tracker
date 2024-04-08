import React, { Component } from 'react'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from '../models/MealDetails';
function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()


    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });

    }



    return (
        <View style={styles.MealItem}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [pressed && styles.buttonPressed]}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>

                    <View>
                        <Image source={imageUrl} style={styles.Image} />
                        <Text style={styles.title}> {title} </Text>

                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>



            </Pressable>

        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,


    },
    Image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'

    },
    buttonPressed: {
        opacity: 0.5
    }

})
