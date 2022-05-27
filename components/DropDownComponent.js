
import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDownComponent(props)
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: props.location1, value: props.location1},
      {label: props.location2, value: props.location2}
    ]);
    return (
        <SafeAreaView>
        <View style = {styles.text1}>
                    <Text>{props.text}</Text>
                </View>
                    <View >
                        <DropDownPicker style={styles.box}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            /> 
                       
                    </View>
        </SafeAreaView>
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
        backgroundColor:'#FF005C',
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
    
    text1:
    {
        textAlign:'center',
        //textAlign:'flex-start',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });
export default DropDownComponent;