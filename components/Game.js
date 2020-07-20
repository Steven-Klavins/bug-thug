import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

export default class Game extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text> Hi There, this is my game </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
})





// import React from 'react'
// import { StyleSheet, Text, View, Button } from 'react-native'

// export default function Game() {
//   return (
//     <View>
//       <Text>Here is the game!</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
