import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';

export default function Explain() {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState('');
  const [visibility, setVisibility] = useState(true);

  const drinks = useSelector(state => state.drinks.value);

  useEffect(() => {
    let unmounted = false;
    const getWords = async () => {
      const url =
        'https://raw.githubusercontent.com/hugovk/everyfinnishword/master/kaikkisanat.txt';
      const response = await fetch(url);
      const data = await response.text();
      const wordsArray: string[] = data ? data.split('\n') : [];
      setWords(wordsArray);
      const random = Math.floor(Math.random() * words.length);
      setWord(wordsArray[random]);
    };
    if (!unmounted) {
      getWords();
    }
    return () => {
      unmounted = true;
    };
  }, [words.length]);

  const refreshWord = () => {
    setVisibility(false);
    const random = Math.floor(Math.random() * words.length);
    setWord(words[random]);
  };

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <Pressable
      style={{height: height, width: width}}
      onPress={() => refreshWord()}>
      <View>
        <Image
          source={require('../assets/lapinakuvataustalogo.png')}
          style={{
            width: width * 0.5,
            height: height * 0.2,
            alignSelf: 'center',
          }}
        />
        <View>
          {visibility ? (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf: 'center',
                width: width * 0.8,
                marginBottom: 70,
              }}>
              Selitä sana, sanan oikein arvannut saa jakaa {drinks} huikkaa, jos
              sana ohitetaan, juot itse {drinks} huikkaa. Aloita painamalla
              näyttöä
            </Text>
          ) : (
            <Text style={{color: 'white', fontSize: 33, alignSelf: 'center'}}>
              {word}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}
