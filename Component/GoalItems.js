import React from 'react';
import {Text,CheckBox,View,StyleSheet,TouchableNativeFeedback} from 'react-native';

const GoalItem = props => {

  return  <TouchableNativeFeedback  onLongPress = {props.onDelete}>
      <View style={style.listItem}>
         <CheckBox />
         <Text style = {{marginTop:5,marginLeft:15}} > { props.Data }</Text>
      </View>
      </TouchableNativeFeedback>

}

const style = StyleSheet.create({

    listItem :{
      padding : 10,
      flexDirection : "row",
      marginVertical : 10,
      backgroundColor : '#ccc',
      borderColor : 'black',
      borderWidth : 1
    }
  
  })
  
  export default GoalItem;
  