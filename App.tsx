import React, { useState } from "react";
import {
  SafeAreaView
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';




function App(): React.JSX.Element {
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <ToDoList taskList={taskList}></ToDoList>
      <ToDoForm></ToDoForm>
    </SafeAreaView>
  );
}


export default App;
