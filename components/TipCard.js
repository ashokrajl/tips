import React from 'react';
import {Text, View, StyleSheet } from 'react-native';


export default class TipCard extends React.Component{


    render(){
        const {title, description} = this.props;
        return (
                <View style={styles.cards}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    cards: {
      borderWidth: 1,
      padding: 10,
      margin: 5,
      alignItems: "center",
      borderWidth: StyleSheet.hairlineWidth,

      backgroundColor: '#DDD'
    },
    title:{
        fontSize: 30,
    }
  });