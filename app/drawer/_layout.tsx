import CustomDrawer from "@/components/shared/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import Drawer from "expo-router/drawer";
import {Text} from 'react-native'

const DrawerLayout = () => {
  return(
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        // headerShown: false,
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ color, size}) => ( 
            <Ionicons name='person-circle-outline' color={color} size={size} /> 
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Horarios',
          title: 'Horario',
          drawerIcon: ({ color, size}) => ( 
            <Ionicons name='calendar-outline' color={color} size={size} /> 
          )
        }}
      />
      {/* <Drawer.Screen
        name="user/[id]" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      /> */}
    </Drawer>
  )
}

export default DrawerLayout;