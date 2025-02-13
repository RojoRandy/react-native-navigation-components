

import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return(
    <SafeAreaView>
      <View className="px-10 mt-5">

        <CustomButton
          className="mb-5"
          color="primary"
          onPress={()=> router.push('/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-5"
          color="secondary"
          onPress={()=> router.push('/profile')}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-5"
          color="tertiary"
          onPress={()=> router.push('/settings')}
        >
          Ajustes
        </CustomButton>

        
        <Link href='/products' asChild>
          <CustomButton variant="text-only" className="mb-5">Productos</CustomButton>
        </Link>

        <CustomButton
          onPress={onToggleDrawer}
        >
          Abrir Menu
        </CustomButton>
        {/* <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/products'>Productos</Link>
        <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/profile'>Perfil</Link>
        <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/settings'>Ajustes</Link> */}
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen;