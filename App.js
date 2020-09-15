// import * as React from "react";

// import Index from './src/index';
// // import { Initial } from './src/pages/Initial';


// export default function App() {
//   return (
//     <>
//     <Index />
//     </>
//     );
// }


// //////

import * as React from 'react';
import Routes from './src/routes';
// import { } from '@react-navigation/'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home ScreenxDxD</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

function App() {
  return (
    <Routes />
  );
}

export default App;