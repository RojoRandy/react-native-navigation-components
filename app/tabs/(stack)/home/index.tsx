

import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return(
    <SafeAreaView>
      <View className="px-10 mt-5">



        <CustomButton
          className="mb-5"
          color="primary"
          onPress={()=> router.push('/tabs/(stack)/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-5"
          color="secondary"
          onPress={()=> router.push('/tabs/(stack)/profile')}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-5"
          color="tertiary"
          onPress={()=> router.push('/tabs/(stack)/settings')}
        >
          Ajustes
        </CustomButton>

        
        <Link href='/tabs/(stack)/products' asChild>
          <CustomButton variant="text-only" className="mb-5">Productos</CustomButton>
        </Link>
        {/* <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/products'>Productos</Link>
        <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/profile'>Perfil</Link>
        <Link className="my-2 mx-2 p-2 bg-primary text-white text-center rounded-md" href='/settings'>Ajustes</Link> */}
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen;