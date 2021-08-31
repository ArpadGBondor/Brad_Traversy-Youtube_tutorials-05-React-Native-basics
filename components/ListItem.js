import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.listItemNumber}>{item.quantity}</Text>
        <Icon
          name="remove"
          style={styles.deleteIcon}
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
  item: {text: 'default item'},
};

ListItem.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    flex: 1,
  },
  listItemNumber: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  deleteIcon: {
    flex: 0,
    marginLeft: 15,
  },
});

export default ListItem;
