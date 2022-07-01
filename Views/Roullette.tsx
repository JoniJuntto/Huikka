import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import {useAppSelector} from '../hooks';
import Tasks from '../utils/Tasks';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Roullette() {
  const players = useAppSelector(state => state.players.value);
  const drinks = useAppSelector(state => state.drinks.value);
  const [player, setPlayer] = useState<string>('');
  const [drink, setDrink] = useState<number>(0);
  const [declineTask, setDeclineTask] = useState('');
  const [declinePressed, setDeclinePressed] = useState(false);
  const [latestPlayer, setLatestPlayer] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * players.length);
    setPlayer(players[random]);
    setLatestPlayer(players[random]);
    console.log(players[random]);
    const randomDrink = Math.floor(Math.random() * 3 * drinks);
    setDrink(randomDrink);
  }, [players, drinks]);

  const getRandom = () => {
    return Math.floor(Math.random() * players.length);
  };

  const refresh = () => {
    setDeclinePressed(false);
    let randomPlayer = players[getRandom()];
    while (latestPlayer === randomPlayer) {
      randomPlayer = players[getRandom()];
    }
    setLatestPlayer(randomPlayer);
    setPlayer(randomPlayer);
    const randomDrink = Math.floor(Math.random() * 3 * drinks);
    setDrink(randomDrink);
  };

  const decline = () => {
    setDeclinePressed(true);
    const random = Math.floor(Math.random() * Tasks.length);
    setDeclineTask(Tasks[random]);
  };

  return (
    <View>
      {declinePressed ? (
        <Pressable style={{width: width, height: height}} onPress={refresh}>
          <Image
            style={{width: 400, height: 250, resizeMode: 'contain'}}
            source={require('../assets/lapinakuvataustalogo.png')}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              {declineTask}
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Palaa painamalla näyttöä
            </Text>
          </View>
        </Pressable>
      ) : (
        <View style={styles.container}>
          <Image
            style={{width: 400, height: 250, resizeMode: 'contain'}}
            source={require('../assets/lapinakuvataustalogo.png')}
          />
          <Text style={styles.text}>{player}</Text>
          <Text style={styles.text}>Ota {drink} huikkaa!</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable style={styles.button} onPress={() => refresh()}>
              <Text style={styles.textButton}>Otan!</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => decline()}>
              <Text style={styles.textButton}>Enkä ota!</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    alignSelf: 'center',
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  button: {
    padding: 10,
  },
});
