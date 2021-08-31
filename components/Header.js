import React from 'react';
import {
  View,
  Text,
  /*Image,*/ StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Header = ({title, showAdd, toggleShowAdd}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        style={showAdd ? styles.btnClose : styles.btn}
        onPress={toggleShowAdd}>
        <Text style={showAdd ? styles.btnCloseText : styles.btnText}>
          {showAdd ? 'Close' : 'Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  title: 'App title',
  showAdd: false,
};

Header.propTypes = {
  title: PropTypes.string,
  showAdd: PropTypes.bool,
  toggleShowAdd: PropTypes.func,
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    flex: 1,
  },
  btn: {
    height: 40,
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    borderRadius: 10,
    flex: 0,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 16,
    textAlign: 'center',
  },
  btnClose: {
    height: 40,
    backgroundColor: 'firebrick',
    padding: 9,
    margin: 5,
    borderRadius: 10,
    flex: 0,
  },
  btnCloseText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Header;
