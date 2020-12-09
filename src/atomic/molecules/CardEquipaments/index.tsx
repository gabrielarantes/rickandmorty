import React from 'react';

import CheckBox from '@react-native-community/checkbox';

import colors from '../../constants/colors';

import {Box, BoxTouchable} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

function CardEquipaments({object, navigation, manageItems, darkMode}) {
  const margin = 16;

  return (
    <>
      <Box pt={5} pl={6} pb={16} bg={'transparent'} fd={'row'} mb={15}>
        <CheckBox
          onCheckColor={darkMode ? colors.gold : colors.darkGreen}
          onTintColor={darkMode ? colors.gold : colors.darkGreen}
          boxType={'square'}
          value={false}
          onValueChange={(newValue) => {
            manageItems(object, newValue);
          }}
        />
        <TextRegular color={darkMode ? colors.white : colors.darkGreen} size={16} mt={6} ml={12} mb={6}>
          {object.name}
        </TextRegular>
      </Box>
    </>
  );
}

export default CardEquipaments;
