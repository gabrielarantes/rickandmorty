import React from 'react';
import {ActivityIndicator} from 'react-native';

import colors from '../../constants/colors';

import {ContainerImage} from './styles';

const Image = ({
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
  url,
}) => {
  return (
    <ContainerImage
      
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
      radius={!radius ? 4 : radius} />
  );
};

export default Image;
