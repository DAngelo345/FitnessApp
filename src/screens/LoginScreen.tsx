import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: wire up auth logic
    console.log('Sign in:', email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        {/* White blob header */}
        <View style={styles.blob}>
          {/* Nav row */}
          <View style={styles.navRow}>
            <View style={styles.logoBox}>
              <Text style={styles.logoBoxText}>✦</Text>
            </View>
            <TouchableOpacity style={styles.signUpNav}>
              <Text style={styles.signUpNavText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.title}>Sign In</Text>
        </View>

        {/* Dark body */}
        <View style={styles.body}>
          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="yourname@gmail.com"
            placeholderTextColor="#eee"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••••••"
            placeholderTextColor="#eee"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Sign In button — black fill, green outline */}
          <View style={styles.btnOuterWrap}>
            <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn} activeOpacity={0.85}>
              <Text style={styles.signInBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* OR divider */}
          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>or Sign In with</Text>
            <View style={styles.orLine} />
          </View>

          {/* Social buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialBtnText}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialBtnText}>IG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialBtnText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialBtnText}>TK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },

  // White blob header
  blob: {
    backgroundColor: '#ffffff',
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 100,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  logoBox: {
    width: 34,
    height: 34,
    backgroundColor: '#111',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBoxText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  signUpNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signUpNavText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#111',
    letterSpacing: -1,
    marginTop: 4,
  },

  // Dark body
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
    letterSpacing: 0.4,
  },
  input: {
    backgroundColor: '#1c1c1c',
    borderRadius: 50,
    paddingVertical: 13,
    paddingHorizontal: 20,
    fontSize: 13,
    color: '#eee',
    marginBottom: 16,
  },

  // Green outline button
  btnOuterWrap: {
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#4caf65',
    marginTop: 8,
    marginBottom: 24,
    overflow: 'hidden',
  },
  signInBtn: {
    backgroundColor: '#0a0a0a',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  signInBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },

  // OR divider
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 18,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#222',
  },
  orText: {
    fontSize: 11,
    color: '#444',
  },

  // Social buttons
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  socialBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
