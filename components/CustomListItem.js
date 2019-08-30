import React from 'react';
import {Text, FlatList, View, StyleSheet} from "react-native";

class CustomList extends React.Component {
  render() {
    return (
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
        ]}
        renderItem={({item}) =>
          (
            <View style={styles.itemWrapper}>
              <Text style={styles.itemTitle}>{item.key}</Text>
              <Text style={styles.itemNote}>{item.key}</Text>
            </View>
          )
        }
      />
    );
  }
}

export default CustomList;

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10
  },

  itemTitle: {
    fontSize: 15,
    color:'#080808'
  },

  itemNote: {
    fontSize: 10,
    color: '#A7A7A7'
  },
});

