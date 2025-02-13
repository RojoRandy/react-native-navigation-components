import { Stack } from "expo-router";

const StackLayout = () => {
  return(
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        // headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        },
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen 
        name="home/index"
        options= {{
          title: 'Home Screen'
        }}
      />
      <Stack.Screen 
        name="products/index"
        options= {{
          title: 'Productos Screen'
        }}
      />
      <Stack.Screen 
        name="profile/index"
        options= {{
          title: 'Profile Screen'
        }}
      />
      <Stack.Screen 
        name="settings/index"
        options= {{
          title: 'Profile Screen'
        }}
      />
    </Stack>
  )
}

export default StackLayout;