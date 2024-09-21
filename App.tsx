import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import EntryPoint from "./src/presentation/EntryPoint"

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <EntryPoint />
    </SafeAreaProvider>
  )
}

export default App
