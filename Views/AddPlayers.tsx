import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Keyboard,
} from 'react-native';
import {changePlayers} from '../features/PlayersSlice';
import {useAppDispatch} from '../hooks';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Frontpage({navigation}: any) {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [visibility, setVisibility] = useState(true);
  const dispatch = useAppDispatch();

  const addPlayer = () => {
    setPlayerName('');
    setPlayers([...players, playerName]);
  };

  const setPlayersAndNavigate = () => {
    console.log(players);
    dispatch(changePlayers(players));
    navigation.navigate('NavigationScreen');
  };

  const deletePlayer = player => {
    setPlayers(players.filter(p => p !== player));
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setVisibility(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setVisibility(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {visibility ? (
          <Image
            source={require('../assets/lapinakuvataustalogo.png')}
            style={styles.logo}
          />
        ) : (
          <></>
        )}
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Pelaajan nimi"
          onChangeText={text => setPlayerName(text)}
          value={playerName}
          style={styles.input}
        />

        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#bd06d1',
            borderRadius: 10,
            height: 40,
          }}
          onPress={addPlayer}>
          <Text style={{color: 'white'}}>Lisää!</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{alignSelf: 'center'}}
        data={players}
        ListHeaderComponent={() => (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <View>
              <Pressable
                style={{
                  marginVertical: 15,
                  borderColor: '#bd06d1',
                  borderWidth: 2,
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={() => setPlayersAndNavigate()}>
                <Text
                  style={{
                    color: '#bd06d1',
                    textDecorationLine: 'underline',
                    fontSize: 18,
                  }}>
                  Pelaajat lisätty!
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        renderItem={({item}) => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{color: 'white', width: 150, fontSize: 16}}>
                {item}
              </Text>
              <TouchableOpacity onPress={() => deletePlayer(item)}>
                <Text style={{fontSize: 22}}>🗑</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    display: 'flex',
    width: width,
    height: height,
  },
  input: {
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    margin: 10,
    color: 'black',
    alignSelf: 'center',
    height: 40,
  },
  button: {
    padding: 10,
    backgroundColor: '#CE187F',
    width: width * 0.4,
    borderRadius: 10,
    alignSelf: 'center',
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3,
    marginTop: 20,
    alignSelf: 'center',
  },
});
