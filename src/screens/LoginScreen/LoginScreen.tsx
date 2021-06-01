import React, { useEffect, useState } from 'react';
import {
  InputAccessoryView,
  Keyboard,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LoginScreen.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@components/Button';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
import { validateEmail } from '@utils/validation';
import Hyperlink from 'react-native-hyperlink';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRef, setPasswordRef] = useState<TextInput | null>(null);

  const focusPassword = () => {
    if (passwordRef) {
      passwordRef.focus();
    }
  };

  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const _keyboardDidShow = () => setKeyboardVisible(true);
  const _keyboardDidHide = () => setKeyboardVisible(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Input
            label="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={focusPassword}
          />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            setRef={(ref) => setPasswordRef(ref)}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View style={styles.socialButtonContainer}>
          <IconButton
            iconName="apple"
            iconColor="#343434"
            buttonLabel="Sign up with Apple"
            onPress={() => {}}
          />
          <IconButton
            iconName="facebook"
            iconColor="#227aee"
            buttonLabel="Sign up with Facebook"
            onPress={() => {}}
          />
        </View>
        <Hyperlink
          linkStyle={styles.hyperlink}
          linkText={(url) =>
            url === 'https://github.com/obipawan/hyperlink'
              ? 'Terms of Use'
              : url
          }
        >
          <Text style={styles.hyperlinkText}>
            By creating an account, you are indicating that you agree to the
            https://github.com/obipawan/hyperlink and that you are over the age
            of 13.
          </Text>
        </Hyperlink>
        <View style={styles.footer}>
          {!keyboardVisible ? (
            <Button
              label="Next"
              filled
              disabled={!validateEmail(email) || !password}
            />
          ) : null}
          <Button label="Cancel" />
        </View>
        <InputAccessoryView nativeID={'input'}>
          <View style={styles.stickView}>
            <Button
              label="Next"
              filled
              disabled={!validateEmail(email) || !password}
            />
          </View>
        </InputAccessoryView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
