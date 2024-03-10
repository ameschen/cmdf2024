import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({onPress}) => {

  return (
    <View style={{ width: '30%'}}>
          <TouchableOpacity onPress={onPress}>
      <View style={{ marginLeft: 40, paddingVertical: 65 }}>
        <Icon name="heart" size={50} color='#D14D72' />
      </View>
    </TouchableOpacity>
    </View>

  )
}

export default HamburgerIcon;