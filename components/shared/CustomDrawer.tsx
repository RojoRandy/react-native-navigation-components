import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native"

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView
      scrollEnabled={false}
      {...props}
    >
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-modelica-bold text-3xl">RR</Text>
        </View>
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;