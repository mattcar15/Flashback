import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CustomList from './components/CustomListItem'

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.background}>
        <ScrollView>
          <Text style={styles.pageTitle}>Categories</Text>
          <View style={styles.catWrapper}>
            <Text style={styles.catTitle}>Classes</Text>
            <CustomList/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#369DFB'
  },

  catWrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 25,
    marginBottom: 25,
    borderRadius: 10,
    paddingBottom: 15,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  pageTitle: {
    marginLeft: 25,
    marginBottom: 15,
    marginTop: 50,
    fontSize: 40,
    color: '#ffffff'
  },

  catTitle: {
    fontSize: 20,
    margin: 20,
    marginBottom: 0,
    alignSelf: 'center',
    color: '#A7A7A7'
  }
});
