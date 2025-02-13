import { Tabs } from "expo-router";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return(
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'blue' ,
      // headerShown: false,
      // tabBarShowLabel: true
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="laptop-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          // tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout;