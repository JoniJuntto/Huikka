import React from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NavItems from '../utils/navDetails';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function NavigationScreen({navigation}: any) {
  function NavItem({item}: any) {
    const onButtonPress = (screen: string) => {
      console.log(screen);
      navigation.navigate(screen);
    };

    return (
      <View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.image}
          onPress={() => onButtonPress(item.press)}>
          <Image
            source={item.image}
            style={{width: width * 0.8, height: height * 0.3}}
          />
        </TouchableOpacity>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }
  return (
    <View style={{width: width, height: height}}>
      <Image
        source={require('../assets/lapinakuvataustalogo.png')}
        style={{width: width * 0.5, height: height * 0.2, alignSelf: 'center'}}
      />
      <Carousel
        data={NavItems}
        renderItem={NavItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    marginVertical: 30,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: 'white',
    marginTop: 20,
    alignSelf: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    fontSize: 18,
    alignSelf: 'center',
  },
});
