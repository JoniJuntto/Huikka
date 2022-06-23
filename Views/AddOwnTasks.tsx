import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../styles';
import List from '../utils/list';

const width = Dimensions.get('window').width;

export default function AddOwnTasks() {
  const [task, setTask] = useState('');
  const [textOnScreen, setTextOnScreen] = useState('');

  const pressed = () => {
    List.push(task);
    setTextOnScreen('Lisätty tehtävä ' + task);
    setTask('');
  };

  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/lapinakuvataustalogo.png')}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            width: width * 0.6,
            height: 45,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => setTask(text)}
          value={task}
          keyboardType="ascii-capable"
        />
        <TouchableOpacity
          style={{
            borderColor: 'white',
            borderRadius: 10,
            borderWidth: 1,
            padding: 6,
          }}
          onPress={pressed}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              marginLeft: 10,
              alignSelf: 'center',
            }}>
            Lisää
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{color: 'white'}}>{textOnScreen}</Text>
    </View>
  );
}
