import { createStackNavigator } from "@react-navigation/stack"
import {
  AllScreens,
  AllScreensParamList,
  defaultScreenOptions,
} from "../screens"
import { useColorScheme } from "nativewind"
import { BottomTabProps } from "."

const ProfileStackNavigator = createStackNavigator<AllScreensParamList>()

const ProfileTab: React.FC<BottomTabProps<"ProfileTab">> = () => {
  const { colorScheme } = useColorScheme()

  return (
    <ProfileStackNavigator.Navigator
      initialRouteName="Profile"
      screenOptions={defaultScreenOptions(colorScheme)}>
      {AllScreens.map((config, index) => (
        <ProfileStackNavigator.Screen key={index} {...config} />
      ))}
    </ProfileStackNavigator.Navigator>
  )
}

export default ProfileTab
