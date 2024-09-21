import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native"
import { useMemo } from "react"
import DashboardTab from "./DashboardTab"
import { useColorScheme } from "nativewind"
import { AllScreensParamList } from "../screens"
import Icon from "react-native-vector-icons/Feather"
import colors from "@resources/colors/tailwindExport"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BottomNavigationIcon from "@presentation/navigation/components/BottomNavigationIcon"
import ProfileTab from "./ProfileTab"
import FieldsTab from "./FieldsTab"
import SoccerFieldSvg from "@resources/icons/SoccerFieldIcon"

export type BottomTabParamList = {
  DashboardTab: NavigatorScreenParams<AllScreensParamList>
  FieldsTab: NavigatorScreenParams<AllScreensParamList>
  ProfileTab: NavigatorScreenParams<AllScreensParamList>
}

export type BottomTabProps<TabName extends keyof BottomTabParamList> = {
  route: RouteProp<BottomTabParamList, TabName>
  navigation: NavigationProp<BottomTabParamList>
}

const PagesWithHiddenTabBar: Array<keyof AllScreensParamList> = []
const shouldHideTab = (
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
): boolean => {
  return PagesWithHiddenTabBar.some(
    name => name === getFocusedRouteNameFromRoute(route),
  )
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  const { colorScheme } = useColorScheme()
  const { defaultNavBackgroundColor, defaultNavTextColor } = useMemo(
    () => ({
      defaultNavBackgroundColor:
        colorScheme === "dark" ? colors.neutral[900] : colors.white,
      defaultNavTextColor: colorScheme === "dark" ? colors.white : colors.black,
    }),
    [colorScheme],
  )

  return (
    <BottomTab.Navigator
      initialRouteName="DashboardTab"
      screenOptions={({ route }) => ({
        title: "",
        headerStyle: {
          backgroundColor: defaultNavBackgroundColor,
        },
        headerTitleStyle: {
          color: defaultNavTextColor,
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { display: "none" },
        tabBarStyle: {
          backgroundColor: defaultNavBackgroundColor,
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          borderTopWidth: 0,
          display: shouldHideTab(route) ? "none" : undefined,
        },
      })}>
      <BottomTab.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <BottomNavigationIcon
              {...props}
              icon={<Icon name="grid" {...props} />}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="FieldsTab"
        component={FieldsTab}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <BottomNavigationIcon
              {...props}
              icon={
                <SoccerFieldSvg
                  height={props.size + 4}
                  width={props.size + 4}
                  fill={props.color}
                />
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <BottomNavigationIcon
              {...props}
              icon={<Icon name="user" {...props} />}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
