import React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function NavItem({item, navigation}: any) {
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    marginVertical: 30,
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

export default NavItem;
