import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';

export default function CardGame() {
  const [deck, setDeck] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [cardImage, setCardImage] = useState(
    'https://simpleicon.com/wp-content/uploads/loading_1.png',
  );
  const [korttiTeksti, setKorttiTeksti] = useState(
    'Aloita peli napauttamalla näyttöä',
  );
  const getDeck = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    try {
      const response = await fetch(url);
      var data = await response.json();
      setDeck(data.deck_id);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDeck();
  }, []);

  const getText = (card: string) => {
    switch (card) {
      case 'ACE':
        return 'Anna 3';
      case '2':
        return 'Ota 3';
      case '3':
        return '123';
      case '4':
        return 'HUIKKA';
      case '5':
        return 'HUIKKA';
      case '6':
        return 'Kategoria';
      case '7':
        return 'Vesiputous';
      case '8':
        return 'Sääntö';
      case '9':
        return 'Riimi';
      case '10':
        return 'Kysymysmestari';
      case 'JACK':
        return 'Taukokortti';
      case 'QUEEN':
        return 'Huora';
      case 'KING':
        return 'Tarina';
      default:
        return 'Kortti puuttuu';
    }
  };

  const drawCard = async () => {
    const url =
      'https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=1';

    try {
      const response = await fetch(url);
      var data = await response.json();
      if (data.remaining > 0) {
        setCardValue(data.cards[0].value);
        setCardImage(data.cards[0].image);
        const teksti = getText(data.cards[0].value);
        setKorttiTeksti(teksti);
      } else {
        setCardImage(
          'https://images.unsplash.com/photo-1525120334885-38cc03a6ec77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        );
        setKorttiTeksti(
          'Kortit loppui, pääset aloittamaan alusta poistumalla pelistä valikkoon ja palaamalla takasin',
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        style={{width: 400, height: 250, resizeMode: 'contain'}}
        source={require('../assets/lapinakuvataustalogo.png')}
      />
      <TouchableOpacity onPress={drawCard} style={{alignSelf: 'center'}}>
        <Image
          style={{
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
          source={{
            uri: cardImage,
          }}
        />
        <Text style={styles.textStyles}>{korttiTeksti}</Text>
      </TouchableOpacity>
    </View>
  );
}
