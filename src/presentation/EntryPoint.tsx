import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./navigation/identified/tabs"

const EntryPoint: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default EntryPoint
