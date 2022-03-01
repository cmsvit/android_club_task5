import React from 'react';
import type {Node} from 'react';
import {Appbar} from 'react-native-paper';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Using Context API" />
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
