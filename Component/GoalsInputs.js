import React,{useState} from 'react';
import {TextInput,View,Button,StyleSheet, Modal,Text, ImageBackground} from 'react-native';

const GoalInput = props => {

    const [EnterGoals,SetEnterGoals] = useState('');
    const image = { uri: "https://wallpapercave.com/wp/wp3003493.jpg" };
    const GoalInputHandler = (enterText) =>
    {
        SetEnterGoals(enterText);
    }

    const AddGoalHandler = () =>
    {
        props.OnAdd(EnterGoals);
        SetEnterGoals('');
    }

    return <Modal visible = {props.visible} animationType = "slide">
            <ImageBackground source={image} style={style.image}>
            <Text style={style.H1}>To-Do-List</Text>
            <View style = {style.row}>
                <TextInput placeholder="Goals" style={style.text} onChangeText={GoalInputHandler} />
                
                <View style={style.buttonContainer}>
                    <View style = {style.button}>
                        <Button title="Add" onPress = {AddGoalHandler} />
                    </View>
                    <View style = {style.button}>
                        <Button  color = 'green' title="Done" onPress = {props.Display} />
                    </View>
                </View>
            </View>
            </ImageBackground>
        </Modal>

}
const style = StyleSheet.create({

    H1 :{
        fontSize : 25,
        textAlign : "center", 
        paddingTop : 30, 
        textDecorationLine : "underline",
        color:"red" 
     },

    row :{
        justifyContent : "center",
        flex : 1,
        alignItems : "center"
      },
      
      text :{
        width : "86%" ,
        marginTop : 8 , 
        marginBottom : 10 ,
        padding : 5,
        borderWidth : 1,
        color : 'red',
        borderColor : 'white'
      },
      
      buttonContainer :{
          flexDirection :'row',
          justifyContent : 'space-between',
          width : '50%'
      },
      
      button : {
          width : '40%'
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  
  })

export default GoalInput;