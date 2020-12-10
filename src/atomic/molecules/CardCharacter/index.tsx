import React from 'react';
import {Image} from 'react-native';
import colors from '../../constants/colors';

import {Box, BoxTouchable} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

import normalize from 'react-native-normalize';

function CardCharacters({object, navigation, manageItems, darkMode}) {

  return (
    <>
      <Box border={16} pb={1} ml={2} mr={2} mb={15} bg={darkMode ? colors.gold : colors.black}>
        <Image
        resizeMethod={'resize'}
          
          style={{width: normalize(200), height: normalize(200)}}
          source={{uri: object.image}}
        />

        <TextRegular
          color={darkMode ? colors.black : colors.gold}
          size={15}
          mt={6}
          mb={6}>
          {object.name}
        </TextRegular>
      </Box>
    </>
  );
}

export default CardCharacters;
