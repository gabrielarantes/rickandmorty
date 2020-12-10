import styled from 'styled-components/native'
import normalize from 'react-native-normalize'
import colors from '../../constants/colors'

export const ContainerImage = styled.Image`
  background-color: ${props => (props.bgColor ? props.bgColor : colors.pink)};
  height: ${props => (props.height ? normalize(props.height) : normalize(48))};
  width: ${props => (props.width ? props.width : '100%')};
  border-width: ${props => (props.borderColor ? 1 : 0)};
  border-radius: ${props => normalize(props.radius)};
  border-color: ${props =>
    props.borderColor ? props.borderColor : colors.darkBlue};
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  margin-top: ${props => (props.mt ? normalize(props.mt, 'height') : 0)};
  margin-bottom: ${props => (props.mb ? normalize(props.mb, 'height') : 0)};
  margin-left: ${props => (props.ml ? normalize(props.ml, 'weight') : 0)};
  margin-right: ${props => (props.mr ? normalize(props.mr, 'weight') : 0)};
  padding-bottom: ${props => (props.pb ? normalize(props.pb, 'height') : 0)};
  padding-top: ${props => (props.pt ? normalize(props.pt, 'height') : 0)};
  padding-right: ${props => (props.pr ? normalize(props.pr, 'weight') : 0)};
  padding-left: ${props => (props.pl ? normalize(props.pl, 'weight') : 0)};
`

export const ImageIcon = styled.Image`
  width: ${normalize(16)};
  height: ${normalize(16)};
  margin-right: 5px;
`
