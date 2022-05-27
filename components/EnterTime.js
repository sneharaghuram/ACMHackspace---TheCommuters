
import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function EnterTime(props)
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: props.time1, value: props.time1},
      {label: props.time2, value: props.time2},
      {label: props.time3, value: props.time3},
      {label: props.time4, value: props.time4},
      {label: props.time5, value: props.time5},
      {label: props.time6, value: props.time6},
      {label: props.time7, value: props.time7},
      {label: props.time8, value: props.time8},
      {label: props.time9, value: props.time9},
      {label: props.time10, value: props.time10},
      {label: props.time11, value: props.time11},
    ]);

    return (
        <SafeAreaView>
        <View style = {styles.text1}>
                    <Text>Time:</Text>
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
export default EnterTime;