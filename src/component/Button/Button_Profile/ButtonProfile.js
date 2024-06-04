import {Text, TouchableOpacity} from 'react-native';
import styleSheet from '../../../Screens/ProfileScreen/StyleSheet';
import { CaretRight } from 'phosphor-react-native';

const ButtonProfile = ({onPress, children, icon,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {icon}
      <Text style={styleSheet.txtlogout}>{children}</Text>
      <CaretRight size={32} color='black' />
    </TouchableOpacity>
  );
};
export default ButtonProfile;
