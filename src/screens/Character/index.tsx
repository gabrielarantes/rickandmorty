import React, {useState, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';

import {BoxSafe, Box, BoxTouchable} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import {TextRegular} from '../../atomic/atoms/Titles';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import {verifyDarkMode} from '../../config/functions';

import * as charactersAction from '../../redux/actions/charactersActions';
import {NavigationHelpersContext} from '@react-navigation/native';

function Character({route, navigation, darkMode}) {
  const {data} = route.params;

  return (
    <>
      <Header backButton={true} title="Character" navigation={navigation} />
      <BoxSafe bg={darkMode ? '' : colors.gold}>
        <Box pr={8} pl={8} pt={8} bg={'transparent'}>
          <ScrollView>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                borderColor: darkMode ? colors.gold : colors.black,
                borderWidth: 1,
              }}
              source={{uri: data.image}}
            />

            <TextRegular
              mt={16}
              mb={16}
              size={30}
              color={darkMode ? colors.gold : colors.black}>
              {data.name}
            </TextRegular>

            <TextRegular
              align={'flex-start'}
              mb={5}
              size={16}
              color={darkMode ? colors.gold : colors.black}>
              Species : {data.species}
            </TextRegular>

            <TextRegular
              align={'flex-start'}
              mb={5}
              size={16}
              color={darkMode ? colors.gold : colors.black}>
              Gender : {data.gender}
            </TextRegular>

            <TextRegular
              align={'flex-start'}
              mb={15}
              size={16}
              color={darkMode ? colors.gold : colors.black}>
              Status : {data.status}
            </TextRegular>

            <TextRegular
              mb={15}
              size={20}
              color={darkMode ? colors.gold : colors.black}>
              Episodes
            </TextRegular>

            <Box bg={'transparent'} align={'space-between'}>
              {data.episode.map((item, index) => {
                return (
                  <BoxTouchable
                    onPress={() => {
                      navigation.navigate('Episode', {id: item.id});
                    }}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: darkMode ? colors.gold : colors.black,
                    }}
                    pt={5}
                    pb={5}
                    pl={8}
                    pr={8}
                    bg={index % 2 === 0 ? colors.black : colors.gold}>
                    <TextRegular
                      align={'flex-start'}
                      key={index}
                      color={index % 2 === 0 ? colors.gold : colors.black}
                      size={16}>
                      Episode
                      {' ' +
                        item.replace(
                          'https://rickandmortyapi.com/api/episode/',
                          '',
                        )}
                    </TextRegular>
                  </BoxTouchable>
                );
              })}
            </Box>
          </ScrollView>
        </Box>
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.appReducer.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    _getCharacters: (url) => {
      dispatch(charactersAction.CharactersRequest(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
