

import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native"

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id === id);

  if(!product) {
    return <Redirect href='/'/>
  }

  return(
    <View className="px-5 mt-5">
      <Text className="font-modelica-bold">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-modelica-bold mt-2">{product.price}</Text>
    </View>
  )
}

export default ProductScreen;