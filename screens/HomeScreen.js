import { StatusBar } from "expo-status-bar";
import { View } from "react-native";



export default function HomeScreen(){
    return(
        <View className= "flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')}
              className="absolute h-full w-full"
            
            />
        </View>
    )
}