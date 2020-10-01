import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList ,Button, ImageBackground, Alert } from 'react-native';
import GoalItems from './Component/GoalItems';
import GoalInput from './Component/GoalsInputs';

export default function App() {

  const [Goals , SetGoals] = useState([]);
  const [isModel ,SetisModel] = useState(false);
  // function GoalInputHandler(enterText)
  // {
  //   SetGoals(enterText);
  // }  equivalent to 
  
  const image = { uri : "https://wallpapercave.com/w/wp5805903"};

  const DeleteGoalHandler = goalsId =>
  {
    SetGoals(currentGoals => {

      return currentGoals.filter((goal) => goal.id != goalsId);
      
    })
  }
  const DisplayModelHandler = () =>
  {
    SetisModel(false);
  }

  const addGoalInputHandler = EnterGoals =>
  {
    if(EnterGoals.length === 0)
    {
      return(Alert.alert('Wrong Input'));
    }
    SetGoals(currentGoals => [...currentGoals, { id : Math.random().toString() ,value : EnterGoals }]); 

  }

  return (
      <ImageBackground source = {image}  style = {style.img}>
        <View style= { style.Screen } >
             <Button title = "Open App" style = {style.butt} onPress = {() => SetisModel(true) } />
            <GoalInput visible = {isModel} Display = {DisplayModelHandler} OnAdd = {addGoalInputHandler}/>
        <FlatList keyExtractor = {(item,index) => item.id} 
                  data = {Goals} 
                  renderItem = { itemData => <GoalItems  onDelete = { DeleteGoalHandler.bind(this,itemData.item.id) } Data = {itemData.item.value} />} />
        </View>
      </ImageBackground>      
  );
}

const style = StyleSheet.create({
  
  Screen :{
    padding : 30
  },

  butt : {
    margin : '50%',
    
  },

  listItem :{
    padding : 10,
    flexDirection : "row",
    marginVertical : 10,
    backgroundColor : '#ccc',
    borderColor : 'black',
    borderWidth : 1
  },
  img: {
    resizeMode: "cover",
    justifyContent: "center"
  }

})

