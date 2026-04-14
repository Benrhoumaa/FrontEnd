import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import { COLORS } from '../constants/Theme';

const LoginScreen = ({ onLogin, onSignUpPress }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Validation basique
    if (!email || !password) {
      console.log('Please fill all fields');
      return;
    }
    console.log('Sign in with:', { email, password });
    if (onLogin) {
      onLogin();
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Ici vous ajoutez la logique d'authentification sociale
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
    // Ici vous pouvez naviguer vers l'écran "Forgot Password"
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.logoText}>Sportify</Text>
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>
              Access your personalized health dashboard and performance metrics.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            <InputField
              label="Email Address"
              placeholder="name@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              showForgot={true}
              onForgotPress={handleForgotPassword}
            />

            <CustomButton
              title="Sign In →"
              onPress={handleSignIn}
              type="primary"
              style={styles.signInButton}
            />
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialContainer}>
            <SocialButton
              title="Google"
              icon="google"
              onPress={() => handleSocialLogin('Google')}
            />
            <SocialButton
              title="iOS"
              icon="ios"
              onPress={() => handleSocialLogin('iOS')}
            />
            <SocialButton
              title="Apple"
              icon="apple"
              onPress={() => handleSocialLogin('Apple')}
            />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>New to Sportify? </Text>
            <TouchableOpacity onPress={onSignUpPress}>
              <Text style={styles.signUpLink}>Create an account</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              SPORTIFY PRECISION PERFORMANCE LAB © 2024
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerSection: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
    letterSpacing: 1,
  },
  welcomeTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 12,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  formSection: {
    marginBottom: 30,
  },
  signInButton: {
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.cardBorder,
  },
  dividerText: {
    color: COLORS.textSecondary,
    paddingHorizontal: 15,
    fontSize: 12,
    letterSpacing: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  signUpText: {
    color: COLORS.textSecondary,
    fontSize: 15,
  },
  signUpLink: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 20,
  },
  footerText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

export default LoginScreen;