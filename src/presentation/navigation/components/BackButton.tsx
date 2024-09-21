import { ColorValue, View } from "react-native"

interface BackButtonProps {
  className?: string
  color?: ColorValue
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  return <View className={className}></View>
}

export default BackButton
