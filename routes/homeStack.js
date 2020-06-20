import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/Home'
import Name from '../components/Name'


const screens = {
    Home:{
        screen: Home
    },
    Name:{
        screen: Name
    }
}

const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack)