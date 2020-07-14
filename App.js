import { StatusBar } from 'expo-status-bar'
import React, { useState, setState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Game from './components/Game'

export default function App() {
  const [isGame, setIsGame] = useState(false)

  const enterGame = () => {
    setIsGame(true)
  }

  if (isGame === false) {
    return (
      <View style={styles.container}>
        <Text>Bug Thug</Text>
        <StatusBar style="auto" />
        <View style={styles.startButton}>
          <Button title="Start" onPress={enterGame} />
        </View>
      </View>
    )
  } else {
    return <Game />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startButton: {
    width: '40%',
    padding: 20,
    color: 'black',
  },
})
