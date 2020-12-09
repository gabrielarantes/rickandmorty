import React, {useState, useEffect} from 'react';
import {BackHandler, FlatList, Alert} from 'react-native';

import {BoxSafe, Box} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import Loading from '../../atomic/atoms/Loading';
import Button from '../../atomic/atoms/Button';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import * as equipamentsAction from '../../redux/actions/equipamentsActions';

import {filter} from 'lodash';

import CardEquipaments from '../../atomic/molecules/CardEquipaments';

function Home({navigation, _getCharacters, darkMode, dataEquipaments}) {
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
      let newData = [...arr, item]
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
      <CardEquipaments
        navigation={navigation}
        object={item}
        manageItems={manageItems}
        darkMode={darkMode}
      />
    );
  };

  //checking the list
  const check = () => {
    Alert.alert('Congratulations','Everything is alright\nYou can start your job');
  }

  return (
    <>
      <Header backButton={false} title="CHECKLIST" navigation={navigation} />
      <BoxSafe bg={darkMode ? '' : colors.white}>
        <Box pr={8} pl={8} pt={8} bg={'transparent'}>
          {dataEquipaments.isLoading ? (
            <Loading name={'spinner'} size={30} color={colors.darkGreen}></Loading>
          ) : (
            <>
              <FlatList
                data={dataEquipaments.data}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                onEndReachedThreshold={0.01}
              />
            </>
          )}
        </Box>
        <Box pr={8} pl={8} pt={8} flex={0.1} bg={'transparent'}>
          <Button
            bgColor={ darkMode ? colors.gold : colors.darkGreen }
            name="Check"
            fontSize={18}
            textColor={colors.white}
            radius={6}
            onPress={check}
            disable={items.length === 5 ? false : true}
          />
        </Box>
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  dataEquipaments: state.equipamentsReducer,
  darkMode: state.appReducer.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {

    _getCharacters: () => {

    },

    _getEquipaments: () => {
      dispatch(equipamentsAction.EquipamentsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
