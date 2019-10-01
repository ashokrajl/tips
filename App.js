import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';

import TipCard from './components/TipCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}  />
      <ScrollView>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='welcome to 2 app'/>
        <TipCard title='hi' description='welcome to tips app'/>
        <TipCard title='hi' description='get your ideas rolling'/>


        <Text>Team Bibop says,</Text>
        <Text>Hi Nirmal!!</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    // justifyContent: 'space-around',
  },
});
