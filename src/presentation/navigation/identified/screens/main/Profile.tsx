import { AllScreensConfig, AllScreensProps } from ".."

const Profile: React.FC<AllScreensProps<"Profile">> = () => {
  return <></>
}

const ProfileConfig: AllScreensConfig<"Profile"> = {
  name: "Profile",
  component: Profile,
  options: {},
}

export default ProfileConfig
