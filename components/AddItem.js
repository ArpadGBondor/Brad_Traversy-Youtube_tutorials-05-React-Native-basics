import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('0');

  const onChangeItemQuantity = newQuantity => {
    const regexp = /[0-9]+/g;
    // remove unnecessary characters
    let newMatchingString = (newQuantity.match(regexp) || ['0']).join('');
    // remove unnecessary zeros from the front if the value is non zero
    let newValue = parseInt(newMatchingString);
    setItemQuantity(`${isNaN(newValue) ? 0 : newValue}`);
  };
  const increaseQuantity = () => {
    const quantity = parseInt(itemQuantity);
    setItemQuantity(`${isNaN(quantity) ? 1 : quantity + 1}`);
  };
  const decreaseQuantity = () => {
    const quantity = parseInt(itemQuantity);
    setItemQuantity(`${isNaN(quantity) || quantity < 1 ? 0 : quantity - 1}`);
  };

  const onSubmit = () => {
    if (itemName === '' || itemQuantity === '0') {
      Alert.alert(
        'Wrong name or quantity',
        'Please fill item name and quantity.',
      );
    } else {
      addItem({text: itemName, quantity: itemQuantity});
      setItemName('');
      setItemQuantity('0');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />
      <View style={styles.numerical}>
        <Text style={styles.label}>Quantity:</Text>
        <TouchableOpacity style={styles.btn} onPress={decreaseQuantity}>
          <Icon name="minus" size={20} />
        </TouchableOpacity>
        <TextInput
          style={styles.numericalInput}
          value={itemQuantity}
          onChangeText={onChangeItemQuantity}
        />
        <TouchableOpacity style={styles.btn} onPress={increaseQuantity}>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
  },
  numerical: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  numericalInput: {
    height: 60,
    padding: 8,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  label: {
    flex: 0,
    margin: 5,
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    flex: 0,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
