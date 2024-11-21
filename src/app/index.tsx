import { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { authGoogle } from '../services/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '@react-native-firebase/auth';
import { FirebaseError } from "firebase/app";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '371653579737-fr7ovu839m72k2hpod5ja395504jbnau.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type == 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(authGoogle, credential);
    }
  }, [response]);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert('Check your emails!');
    } catch (e: any) {
      const err = e as FirebaseError;
      alert('Registration failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = () => {
    console.log('TESTE CLICK FORGOT PASSWORD OK!');
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert('Sign in failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0062E0', '#19AFFF']}
        style={styles.background}
      >
        <Header />
        <View style={styles.form}>
          <Form promptAsync={promptAsync} signUp={signUp} forgotPassword={forgotPassword} signIn={signIn} />
        </View>
      </LinearGradient>
      
    </View>
  );
}
