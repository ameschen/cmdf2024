import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({onPress}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingHorizontal: 40, paddingVertical: 65 }}>
        <Icon name="heart" size={50} color='#D14D72' />
      </View>
    </TouchableOpacity>
  )
}

export default HamburgerIcon;