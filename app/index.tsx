
import { Redirect } from "expo-router";

const App = () => {

  return <Redirect href='/home'></Redirect>
  // return (
  //   <SafeAreaView>
  //     <View>
  //       <Text className="text-5xl" style={{ fontFamily: 'Modelica-Bold'}}>App</Text>
  //       <Text className="text-4xl font-modelica-bold text-primary">App</Text>
  //       <Text className="text-3xl font-modelica text-secondary">App</Text>
  //       <Text className="text-2xl font-modelica-italic text-secondary-200">App</Text>
  //       <Text className="text-xl font-modelica text-tertiary">App</Text>

  //       <Link href='/products'>
  //         Productos
  //       </Link>
  //     </View>
  //   </SafeAreaView>
  // )
}

export default App;