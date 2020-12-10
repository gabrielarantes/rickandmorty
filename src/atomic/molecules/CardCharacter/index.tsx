import React from 'react';
import {Image} from 'react-native';
import colors from '../../constants/colors';

import {Box, BoxTouchable} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

function CardCharacters({object, navigation, manageItems, darkMode}) {
  const margin = 16;

  return (
    <>
      <Box pt={5} pl={6} pb={16} bg={'transparent'} fd={'row'} mb={15}>
        <Image style={{width: 36, height: 36}} source={{uri: object.image}} />

        <TextRegular
          color={darkMode ? colors.white : colors.darkGreen}
          size={16}
          mt={6}
          ml={12}
          mb={6}>
          {object.name}
        </TextRegular>
      </Box>
    </>
  );
}

export default CardCharacters;
