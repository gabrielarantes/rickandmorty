import React from 'react';
import {ActivityIndicator} from 'react-native';

import {ContainerButton, ImageIcon} from './styles';
import colors from '../../constants/colors';

import {TextRegular} from '../../atoms/Titles';

const Button = ({
  width,
  height,

  bgColor,
  onPress,
  name,
  textColor,
  fontSize,
  fontBold,
  disable,
  mt,
  mb,
  pb,
  radius,
  borderColor,
  accessibilityLabel,
}) => {
  return (
    <ContainerButton
      testID="button-component"
      onPress={disable ? null : onPress}
      bgColor={disable ? colors.lightGray : bgColor}
      width={width}
      height={height}
      borderColor={!borderColor ? 'transparent' : borderColor}
      accessibilityLabel={accessibilityLabel}
      mt={mt}
      mb={mb}
      pb={pb}
      radius={!radius ? 4 : radius}>
      <TextRegular color={textColor} size={fontSize} fontBold={fontBold}>
        {name}
      </TextRegular>
    </ContainerButton>
  );
};

export default Button;
