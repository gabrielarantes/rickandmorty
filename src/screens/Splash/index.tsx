import React, {useState, useEffect} from 'react';
import {ImageBackground, Dimensions, Animated} from 'react-native';

import colors from '../../atomic/constants/colors';
import {TextRegular} from '../../atomic/atoms/Titles';
import {Background} from './styles';

import Icons from '../../atomic/atoms/Icons';

function Splash({navigation}) {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;

  const [opacity] = useState(new Animated.Value(0));

  const animatedTagStyle = {
    opacity: opacity,
    flex: 1,
  };

  useEffect(() => {
    startAnimations();

    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  }, []);

  const startAnimations = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      style={{width: w, height: h}}
      source={require('../../assets/splash.jpg')}>
      <Animated.View style={[animatedTagStyle]}>
        <Background>
          <Icons name="space-shuttle" size={40} color={colors.black} />
          <TextRegular size={36} color={colors.black}>
            Rick & Morty
          </TextRegular>

          <TextRegular mt={25} size={10} color={colors.black}>
            Powered by Gabriel Nicolau
          </TextRegular>
        </Background>
      </Animated.View>
    </ImageBackground>
  );
}

export default Splash;
