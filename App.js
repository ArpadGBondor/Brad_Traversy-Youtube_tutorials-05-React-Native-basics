import React, {useState} from 'react';
import {View, Text, /*Image,*/ StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk', quantity: 3},
    {id: uuid.v4(), text: 'Eggs', quantity: 24},
    {id: uuid.v4(), text: 'Bread', quantity: 1},
    {id: uuid.v4(), text: 'Juice', quantity: 2},
  ]);

  const deleteItem = id => {
    setItems(prewItems => prewItems.filter(item => item.id !== id));
  };

  const addItem = ({text, quantity}) => {
    setItems(prewItems => [...prewItems, {id: uuid.v4(), text, quantity}]);
  };

  const toggleShowAdd = () => {
    setShowAdd(prew => !prew);
  };

  return (
    // First try
    // <View style={styles.container}>
    //   <Text style={styles.header}>Hello world!</Text>
    //   <Image
    //     source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
    //     style={styles.img}
    //   />
    // </View>
    // Second try:
    <View style={styles.container}>
      <Header
        title="Shopping List"
        showAdd={showAdd}
        toggleShowAdd={toggleShowAdd}
      />
      {showAdd && <AddItem addItem={addItem} />}
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// First try
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     color: 'darkslateblue',
//     fontSize: 30,
//   },
//   img: {
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//   },
// });

// Second try:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
