import {
  NavigationProp,
  ParamListBase,
  RouteConfig,
  RouteProp,
  StackNavigationState,
} from "@react-navigation/native"
import {
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack"
import { ColorSchemeName } from "react-native"
import BackButton from "@presentation/navigation/components/BackButton"
import colors from "@resources/colors/tailwindExport"
import DashboardConfig from "./main/Dashboard"
import ProfileConfig from "./main/Profile"
import FieldsConfig from "./main/Fields"

export type AllScreensParamList = {
  Dashboard: undefined
  Fields: undefined
  Profile: undefined
}

export const defaultScreenOptions = (
  colorScheme: ColorSchemeName,
):
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<AllScreensParamList, keyof AllScreensParamList>
      navigation: any
    }) => StackNavigationOptions)
  | undefined => {
  return {
    headerTintColor: colorScheme === "dark" ? colors.white : colors.black,
    headerLeft: ({ tintColor }) => (
      <BackButton className="ml-0" color={tintColor} />
    ),
    headerStyle: {
      backgroundColor:
        colorScheme === "dark" ? colors.neutral[900] : colors.white,
      elevation: 0, // for Android
      shadowOffset: {
        width: 0,
        height: 0, // for iOS
      },
      borderTopWidth: 0,
    },
  }
}

export type AllScreensProps<ScreenName extends keyof AllScreensParamList> = {
  route: RouteProp<AllScreensParamList, ScreenName>
  navigation: NavigationProp<AllScreensParamList>
}

export type AllScreensConfig<ScreenName extends keyof AllScreensParamList> =
  RouteConfig<
    AllScreensParamList,
    ScreenName,
    StackNavigationState<ParamListBase>,
    StackNavigationOptions,
    StackNavigationEventMap
  >

export const AllScreens: Array<AllScreensConfig<keyof AllScreensParamList>> = [
  DashboardConfig,
  ProfileConfig,
  FieldsConfig,
] as Array<AllScreensConfig<keyof AllScreensParamList>>
