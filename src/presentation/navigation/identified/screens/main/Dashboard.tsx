import { AllScreensConfig, AllScreensProps } from ".."

const Dashboard: React.FC<AllScreensProps<"Dashboard">> = () => {
  return <></>
}

const DashboardConfig: AllScreensConfig<"Dashboard"> = {
  name: "Dashboard",
  component: Dashboard,
  options: {},
}

export default DashboardConfig
