
// Exercise 1

// import React from 'react';
// import {View, Text} from 'react-native';
// const Welcome = ()=> {
//   return (
//       <View>
//         <Text>
//           Welcome to C346 - Mobile App Development
//         </Text>
//       </View>
//   );
// };
// export default Welcome;

// Exercise 2
// import React from 'react';
// import {View, Text} from 'react-native';
// const ModuleInfo = ()=> {
//   return (
//       <View>
//         <Text>
//           These are my modules this semester
//         </Text>
//       </View>
//   );
// };
// export default ModuleInfo;
// Thiha

// Exercise 3

import React from 'react';
import { View, Text } from 'react-native';

// Welcome Function Component
const Welcome = ({ name, code }) => {
  return (
      <View>
        <Text>Welcome to {code} - {name}!</Text>
      </View>
  );
};


const Intro = () => {
  return (
      <View>
        <Text>These are my modules this semester:</Text>
      </View>
  );
};


class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text> hi</Text>
          <Intro />
          <Welcome name="Mobile App Development" code="C346" />
          <Welcome name="Introduction to Programming" code="C105" />
          <Welcome name="Immersive Technologies" code="C337" />
        </View>
    );
  }
}

export default ModuleInfo;

