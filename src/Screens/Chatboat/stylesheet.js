import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colour/colour";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:Colors.backgroundScreen,
    },
    tittle: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20,
        marginTop: verticalScale(10),
        color: 'black',
        textAlign: 'center'
    },
    itemview: {
        flexDirection: 'row',
         marginLeft:horizontalScale(10),
         marginRight:horizontalScale(20)
    },
    txtitem:{
        fontWeight: 'bold',
        paddingTop:verticalScale(10)
    },
    bot: {
        fontSize: moderateScale(16),
        color: 'black',
        paddingTop: verticalScale(10),
        paddingRight:horizontalScale(15)
    },
    input: {
        borderWidth: 1,
        color: 'black',
        marginBottom:verticalScale(10),
        marginHorizontal:horizontalScale(5),
        borderRadius:moderateScale(5),
        paddingRight:horizontalScale(95),
        paddingLeft:horizontalScale(10)

    },
    button: {
        backgroundColor:Colors.primarycolour,
        paddingVertical:verticalScale(10),
        borderRadius: moderateScale(10),
        width:horizontalScale(80),
        alignSelf:'flex-end',
        top:verticalScale(46),
        right:horizontalScale(10),
        zIndex:1

    },
    buttontext: {
        fontSize: moderateScale(15),
        fontWeight: 'bold',
        color: Colors.backgroundScreen,
        textAlign:'center'
    }

})
export default style