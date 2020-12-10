import React, {useState, useEffect} from 'react';
import {BackHandler, FlatList, Alert, Text} from 'react-native';

import {BoxSafe, Box} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import Loading from '../../atomic/atoms/Loading';
import Button from '../../atomic/atoms/Button';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import {verifyDarkMode} from '../../config/functions';

import * as charactersAction from '../../redux/actions/charactersActions';

import {filter} from 'lodash';

import CardCharacter from '../../atomic/molecules/CardCharacter';

function Home({navigation, _getCharacters, darkMode, dataCharacters}) {
  //handling with back press
  const backAction = () => {
    Alert.alert('Ops!', 'Are you sure you want to quit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    _getCharacters();

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const [items, setItems] = useState([]);

  const manageItems = (item, value) => {
    let arr = items;

    if (value) {
      let newData = [...arr, item];
      setItems(newData);
    } else {
      let filtered = filter(arr, function (n) {
        return n !== item;
      });
      setItems(filtered);
    }
  };

  //render item
  const renderItem = ({item}) => {
    const {name} = item;

    return (
      <CardCharacter
        navigation={navigation}
        object={item}
        manageItems={manageItems}
        darkMode={darkMode}
      />
    );
  };

  //checking the list
  const check = () => {
    Alert.alert(
      'Congratulations',
      'Everything is alright\nYou can start your job',
    );
  };

  return (
    <>
      <Header backButton={false} title="Characters" navigation={navigation} />
      <BoxSafe bg={darkMode ? '' : colors.gold}>
        <Box pr={8} pl={8} pt={8} bg={'transparent'}>
          {dataCharacters.isLoading ? (
            <Loading
              name={'spinner'}
              size={30}
              color={verifyDarkMode(
                darkMode,
                colors.white,
                colors.gold,
              )}></Loading>
          ) : (
            <>
              <FlatList
                numColumns={2}
                data={dataCharacters.data.results}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                onEndReachedThreshold={0.01}
              />
            </>
          )}
        </Box>
        <Box pr={8} pl={8} pt={8} flex={0.1} bg={'transparent'}>
          <Button
            bgColor={verifyDarkMode(darkMode, colors.gold, colors.black)}
            name="Next Page"
            fontSize={18}
            textColor={verifyDarkMode(darkMode, colors.black, colors.gold)}
            radius={6}
            onPress={check}
            disable={false}
          />
        </Box>
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  dataCharacters: state.charactersReducer,
  darkMode: state.appReducer.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    _getCharacters: () => {
      dispatch(charactersAction.CharactersRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
