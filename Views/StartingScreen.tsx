import React, {useState, useCallback} from 'react';
import {Text, View, Linking, Image} from 'react-native';
import styles from '../styles';
import {Button} from 'react-native-elements';
import {SocialIcon} from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import {useAppDispatch} from '../hooks';
import {setDrinks} from '../features/DrinksSlice';

export default function StartingScreen({navigation}: any) {
  const [items, setItems] = useState([
    {label: 'Nössö', value: 1, icon: () => <Text>🤓</Text>},
    {label: 'Aloittelu', value: 3, icon: () => <Text>🥳</Text>},
    {label: 'Keskiviikko', value: 5, icon: () => <Text>🤪</Text>},
    {label: 'Örvellys', value: 7, icon: () => <Text>🤢</Text>},
    {label: 'Loputon juopumus', value: 10, icon: () => <Text>🤮</Text>},
  ]);
  const [drinkCount, setDrinkCount] = useState(3);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const setDrinksAndNavigate = destination => {
    dispatch(setDrinks(drinkCount));
    navigation.navigate(destination);
  };
  const url =
    'https://github.com/JoniJuntto/ReactJuomapeli/tree/main/HuikkaPeli';

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View>
      <View>
        <Image
          style={styles.imageStyle}
          source={require('../assets/lapinakuvataustalogo.png')}
        />
      </View>
      <DropDownPicker
        open={open}
        value={drinkCount}
        items={items}
        setOpen={setOpen}
        setValue={setDrinkCount}
        setItems={setItems}
        placeholder="Valitse juomien määrä!"
        placeholderStyle={{
          color: 'black',
          fontWeight: 'bold',
        }}
        style={styles.picker}
      />
      <View>
        <Button
          titleStyle={styles.titleStyle}
          type="clear"
          title="Pelaamaan"
          onPress={() => setDrinksAndNavigate('AddPlayers')}
        />
      </View>
      <View style={styles.StartContainer}>
        <Text style={{marginTop: 190, color: 'white'}}>Made by Huikka</Text>
        <SocialIcon
          style={{width: 350, marginTop: 10}}
          title="GitHub"
          button
          type="github"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}
