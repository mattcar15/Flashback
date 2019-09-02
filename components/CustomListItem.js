import React from 'react';
import {Text, FlatList, View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements';

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
              <View>
                <Text style={styles.itemTitle}>{item.key}</Text>
                <Text style={styles.itemNote}>{item.key}</Text>
              </View>
              <View style={styles.chevronWrapper}>
                <Icon name='chevron-right' type={'evilicon'} size={30} color={'#080808'}/>
              </View>
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
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },

  itemTitle: {
    fontSize: 15,
    color:'#080808'
  },

  itemNote: {
    fontSize: 10,
    color: '#A7A7A7'
  },

  chevronWrapper: {
    color: '#080808',
    right: 30,
    position: 'absolute',
    marginTop: 12,
  },
});

