import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-web';
import ConfirmTrip from './ConfirmTrip';
import DropDownComponent from './DropDownComponent';
import EnterTime from './EnterTime';
function ProfileScreen(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    
    ]);

    return (

    //<SafeAreaView>
        <View style={styles.container}>


            <View style = {styles.topbar}></View>
            {/* <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    /> */}

            <View style = {styles.middle}>
            <View style = {styles.text1}>
                <Text>{props.WelcomeMessage}</Text>
            </View>

                <DropDownComponent
                location1 = 'UCLA'
                location2 = 'LAX'
                text = 'From'
                key={'1'}
                />               
                <DropDownComponent
                location1 = 'LAX'
                location2 = 'UCLA'
                text = 'To'
                key={'2'}
                />
                
                <EnterTime
                time1 = '6 AM'
                time2 = '7 AM'
                time3 = '8 AM'
                time4 = '9 AM'
                time5 = '10 AM'
                time6 = '11 AM'
                time7 = '12 PM'
                time8 = '1 PM'
                time9 = '2 PM'
                time10 = '3 PM'
                time11 = '4 PM'
                key={'3'}
                />
                <EnterTime
                time1 = '6 AM'
                time2 = '7 AM'
                time3 = '8 AM'
                time4 = '9 AM'
                time5 = '10 AM'
                time6 = '11 AM'
                time7 = '12 PM'
                time8 = '1 PM'
                time9 = '2 PM'
                time10 = '3 PM'
                time11 = '4 PM'
                key={'4'}
                /> 
                <ConfirmTrip
                text = 'Confirm Trip'
                />
            </View>
            <View style = {styles.topbar}></View>
        </View>
    //</SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
        // borderWidth: 1
    },
    topbar:{
        //flex: 1,
        backgroundColor:'#017676',
        //padding: 20
        height: 100

    },
    middle:{
        //flex: 30,
        //backgroundColor:'white',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor:'#CAFFF2',
        padding: 20,
        alignItems:'center',
        height: 700

    },
   
    box: {
        padding: 20,
        borderWidth: 3,
        width: 300,
        margin: 10,
        alignItems:'flex-start',
        backgroundColor:'white'
    },
    header:
    {
        
        fontSize: 70,
        fontWeight: '800'
    },
    text1:
    {
        textAlign:'left',
        //textAlign:'flex-start',
        fontSize: 20,
        fontWeight: 'normal'
    }
  });
  
//   const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'column',
//       justifyContent: 'space-evenly',
//       alignItems: 'center',
//       height: 700,
//       borderWidth: 1
//     },
//     box: {
      
//       //height: 20
//     }
//   })
export default ProfileScreen;
