import React, {useState, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';

import {BoxSafe, Box, BoxTouchable} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import {TextRegular} from '../../atomic/atoms/Titles';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import * as episodeAction from '../../redux/actions/episodeActions';

function Character({route, navigation, darkMode, _getEpisode, data}) {
  const {id} = route.params;

  useEffect(() => {
    //getting episode info
    _getEpisode(id);
  }, []);

  return (
    <>
      <Header backButton={true} title="Episode" navigation={navigation} />
      <BoxSafe bg={darkMode ? '' : colors.gold}>
        <Box pr={8} pl={8} pt={8} bg={'transparent'}>
          <TextRegular
            mt={16}
            mb={16}
            size={30}
            color={darkMode ? colors.gold : colors.black}>
            {data.name}
          </TextRegular>

          <TextRegular
            align={'flex-start'}
            mt={16}
            mb={5}
            size={16}
            color={darkMode ? colors.gold : colors.black}>
            Episode: {data.episode}
          </TextRegular>

          <TextRegular
            align={'flex-start'}
            mb={5}
            size={16}
            color={darkMode ? colors.gold : colors.black}>
            Air Date: {data.air_date}
          </TextRegular>
        </Box>
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.appReducer.darkMode,
  data: state.episodeReducer.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    _getEpisode: (id) => {
      dispatch(episodeAction.EpisodeRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
