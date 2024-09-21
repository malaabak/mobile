import { createStackNavigator } from "@react-navigation/stack"
import {
  AllScreens,
  AllScreensParamList,
  defaultScreenOptions,
} from "../screens"
import { useColorScheme } from "nativewind"
import { BottomTabProps } from "."

const FieldsStackNavigator = createStackNavigator<AllScreensParamList>()

const FieldsTab: React.FC<BottomTabProps<"FieldsTab">> = () => {
  const { colorScheme } = useColorScheme()

  return (
    <FieldsStackNavigator.Navigator
      initialRouteName="Fields"
      screenOptions={defaultScreenOptions(colorScheme)}>
      {AllScreens.map((config, index) => (
        <FieldsStackNavigator.Screen key={index} {...config} />
      ))}
    </FieldsStackNavigator.Navigator>
  )
}

export default FieldsTab
