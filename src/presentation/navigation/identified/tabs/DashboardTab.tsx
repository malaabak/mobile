import { createStackNavigator } from "@react-navigation/stack"
import {
  AllScreens,
  AllScreensParamList,
  defaultScreenOptions,
} from "../screens"
import { useColorScheme } from "nativewind"
import { BottomTabProps } from "."

const DashboardStackNavigator = createStackNavigator<AllScreensParamList>()

const DashboardTab: React.FC<BottomTabProps<"DashboardTab">> = () => {
  const { colorScheme } = useColorScheme()

  return (
    <DashboardStackNavigator.Navigator
      initialRouteName="Dashboard"
      screenOptions={defaultScreenOptions(colorScheme)}>
      {AllScreens.map((config, index) => (
        <DashboardStackNavigator.Screen key={index} {...config} />
      ))}
    </DashboardStackNavigator.Navigator>
  )
}

export default DashboardTab
