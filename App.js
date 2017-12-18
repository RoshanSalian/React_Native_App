//Import library
import React from 'react';
import Header from './src/components/header';
import { View } from 'react-native';
import AlbumList from './src/components/AlbumList';


//Create a component
const App = () => (

    <View style = {{ flex: 1 }}>
        <Header headerText={'AblumX'} />
        <AlbumList/>
    </View>
);



export default App;


