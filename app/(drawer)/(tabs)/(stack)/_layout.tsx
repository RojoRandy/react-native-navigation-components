import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if(canGoBack) {
      // navigation.dispatch(StackActions.pop(1))
      router.back()
      return
    }
    
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return(
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        // headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        },
        animation: 'slide_from_right',
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons 
            name={ canGoBack ? "arrow-back-outline" : "grid-outline"} 
            className="mr-5" 
            size={20} 
            onPress={()=> onHeaderLeftClick(canGoBack!)}
          />
        )
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