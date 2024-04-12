import React from 'react'
import { View, Text, Modal, Button } from 'react-native'

const Modalfil = ({modalclose,isVisible}) => {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={modalclose}>
    <View style={{backgroundColor:'red'}}>
        <Button 
        title='close'
        onPress={modalclose}
        />

    </View>

    </Modal>
  )
}

export default Modalfil
// import React from 'react';
// import { View, Text, Modal, Button } from 'react-native';

// const Modalfil = ({ modalclose, isVisible }) => {
//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={isVisible}
//       onRequestClose={modalclose}>
//       <View style={{ backgroundColor: 'red' }}>
//         <Button
//           title="Close"
//           onPress={modalclose} // Make sure to call modalclose function on press
//         />
//       </View>
//     </Modal>
//   );
// };

// export default Modalfil;
