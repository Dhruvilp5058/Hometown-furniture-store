import {Text, TouchableOpacity} from 'react-native';
import styleSheet from '../../../Screens/ProfileScreen/StyleSheet';

const ButtonProfile = ({onPress, children, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styleSheet.btnlogout}>
      {icon}
      <Text style={styleSheet.txtlogout}>{children}</Text>
    </TouchableOpacity>
  );
};
export default ButtonProfile;
