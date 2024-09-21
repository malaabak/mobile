import colors from "@resources/colors/tailwindExport"
import { ReactNode } from "react"
import { View } from "react-native"

interface BottomNavigationIconProps {
  color: string
  focused: boolean
  size: number
  icon: ReactNode
}

const BottomNavigationIcon: React.FC<BottomNavigationIconProps> = ({
  color,
  focused,
  icon,
}) => {
  return (
    <View
      className="h-full w-full flex-1 justify-center items-center border-t-2"
      style={{ borderColor: focused ? color : colors.gray }}>
      {icon}
    </View>
  )
}

export default BottomNavigationIcon
