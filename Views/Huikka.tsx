import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
import {useAppSelector} from '../hooks';
import PlayerList from '../utils/list';


export default function Huikka() {
  const drinks = useAppSelector(state => state.drinks.value);
  const list = PlayerList(drinks);
  const [playerList, setPlayerList] = useState(
    useAppSelector(state => state.players.value),
  );
  const [textOnScreen, setTextOnScreen] = useState(
    'Aloita napauttamalla näyttöä',
  );
  const [usedTasks, setUsedTasks] = useState<string[]>([]);
  const listSize = list.length;

  const createTask = () => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const makeDraw = () => {
    console.log(playerList);
    if (playerList.length === 0) {
      setTextOnScreen('Lisää pelaajia aloitusnäytöllä');
    } else if (playerList.length > 0) {
      var randomPlayer =
        playerList[Math.floor(Math.random() * playerList.length)];
      var randomTask = createTask();
      if (listSize === usedTasks.length) {
        setTextOnScreen(
          'Kysymykset loppuivat! Saat lisättyä omia tehtäviä valikosta',
        );
        return;
      }
      while (usedTasks.includes(randomTask)) {
        randomTask = createTask();
      }
      usedTasks.push(randomTask);
      setTextOnScreen(randomPlayer + ' ' + randomTask);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={makeDraw}>
        <View style={styles.peliStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/lapinakuvataustalogo.png')}
          />
          <Text style={styles.taskText}>{textOnScreen}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
