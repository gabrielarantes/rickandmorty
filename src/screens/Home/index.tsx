import React, {useState, useEffect} from 'react';
import {BackHandler, FlatList, Alert, Text, TextInput} from 'react-native';

import {BoxSafe, Box} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import Loading from '../../atomic/atoms/Loading';
import Button from '../../atomic/atoms/Button';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import {verifyDarkMode} from '../../config/functions';

import * as charactersAction from '../../redux/actions/charactersActions';

import {filter, isNull, isEmpty} from 'lodash';

import CardCharacter from '../../atomic/molecules/CardCharacter';
import {TextRegular} from '../../atomic/atoms/Titles';
import {ScrollView} from 'react-native-gesture-handler';

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
    _getCharacters(null);

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    setItems(dataCharacters.data);
  }, [dataCharacters.data.results]);

  //render item
  const renderItem = ({item}) => {
    return (
      <CardCharacter
        navigation={navigation}
        object={item}
        darkMode={darkMode}
      />
    );
  };

  //paginating
  const paginate = (goTo) => {
    goTo === 'prev'
      ? _getCharacters(items.info.prev)
      : _getCharacters(items.info.next);
  };

  //search character
  const searchCharacter = () => {
    let searchWord = `https://rickandmortyapi.com/api/character/?name=${searchText}`;

    console.log(searchWord);

    _getCharacters(searchWord);
  };

  return (
    <>
      <Header backButton={false} title="Characters" navigation={navigation} />
      <BoxSafe bg={darkMode ? '' : colors.gold}>
        <Box pr={8} pl={8} pt={8} bg={'transparent'}>
          <TextInput
            value={searchText}
            onChangeText={(txt) => {
              setSearchText(txt);
              searchCharacter();
            }}
            style={{
              padding: 15,
              borderBottomWidth: 1,
              marginBottom: 20,

              borderColor : verifyDarkMode(darkMode, colors.gold, colors.black),

              color : verifyDarkMode(darkMode, colors.gold, colors.black)
            }}
          />

          {dataCharacters.isLoading ? (
            <Loading
              name={'spinner'}
              size={30}
              color={verifyDarkMode(
                darkMode,
                colors.gold,
                colors.black,
              )}></Loading>
          ) : (
            <>
              {dataCharacters.data.error ? (
                <TextRegular
                pt={50}
                  color={verifyDarkMode(darkMode, colors.gold, colors.black)}
                  size={16}>
                  Nobody found. Are you seeing the serie?
                </TextRegular>
              ) : (
                <FlatList
                  numColumns={2}
                  data={dataCharacters.data.results}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItem}
                  onEndReachedThreshold={0.01}
                />
              )}
            </>
          )}
        </Box>
        {dataCharacters.isLoading ? (
          <></>
        ) : (
          <>
            {dataCharacters.data.error ? (
              <></>
            ) : (
              <Box
                pr={8}
                style={{justifyContent: 'space-between'}}
                pl={8}
                pt={8}
                flex={0.1}
                fd={'row'}
                bg={'transparent'}>
                <Button
                  bgColor={verifyDarkMode(darkMode, colors.gold, colors.black)}
                  name="Previous Page"
                  fontSize={18}
                  textColor={verifyDarkMode(
                    darkMode,
                    colors.black,
                    colors.gold,
                  )}
                  radius={6}
                  onPress={() => {
                    paginate('prev');
                  }}
                  disable={isNull(dataCharacters.data.info.prev) ? true : false}
                  width={'49%'}
                  mr={2}
                />

                <Button
                  bgColor={verifyDarkMode(darkMode, colors.gold, colors.black)}
                  name="Next Page"
                  fontSize={18}
                  textColor={verifyDarkMode(
                    darkMode,
                    colors.black,
                    colors.gold,
                  )}
                  radius={6}
                  onPress={() => {
                    paginate('next');
                  }}
                  disable={isNull(dataCharacters.data.info.next) ? true : false}
                  width={'49%'}
                />
              </Box>
            )}
          </>
        )}
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
    _getCharacters: (url) => {
      dispatch(charactersAction.CharactersRequest(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
