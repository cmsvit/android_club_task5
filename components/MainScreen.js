import React from 'react';
import {useCountContext} from '../context/CountContextProvider';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export default function MainScreen() {
  const countContext = useCountContext();
  console.log('MainScreen: countContext', countContext);
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Using Context API" />
      </Appbar.Header>
      <View style={styles.mainBody}>
        <Text style={styles.countText}>{countContext.count}</Text>
        <Button
          mode="contained"
          onPress={() => countContext.setCount(countContext.count + 1)}>
          Increase by 1
        </Button>
        <Text style={styles.countText}>{countContext.count2}</Text>
        <Button
          mode="contained"
          onPress={() => countContext.setCount2(countContext.count2 + 3)}>
          Increase by 3
        </Button>
        <Text style={styles.countText}>{countContext.count3}</Text>
        <Button
          mode="contained"
          onPress={() => countContext.setCount3(countContext.count3 + 5)}>
          Increase by 5
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    marginTop: 64,
    fontSize: 48,
    color: '#000000',
  },
});
