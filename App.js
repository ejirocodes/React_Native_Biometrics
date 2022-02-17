/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useEffect} from 'react';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  // .then(resultObject => {
  //   const {available, biometryType} = resultObject;
  //   if (available && biometryType === ReactNativeBiometrics.Biometrics) {
  //     console.log('TouchID is supported', biometryType);
  //   }

  //   // if (available && biometryType === ReactNativeBiometrics.TouchID) {
  //   // } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
  //   //   console.log('FaceID is supported');
  //   // } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
  //   //   console.log('Biometrics is supported');
  //   // } else {
  //   //   console.log('Biometrics not supported');
  //   // }
  // });

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isBiometricSupport = async () => {
    let {success, error} = await ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Sign in with Touch ID',
      // cancelButtonText: 'Close',
    });
    console.log({success, error});
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <TouchableHighlight
          style={{
            height: 60,
          }}>
          <Button
            title="Login with Biometrics"
            color="#fe7005"
            onPress={isBiometricSupport}
          />
        </TouchableHighlight>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug" onClick={isBiometricSupport}>
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
