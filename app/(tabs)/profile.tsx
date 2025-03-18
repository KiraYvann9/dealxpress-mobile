import {StyleSheet, Image, Platform, View, Text, Pressable} from 'react-native';
import illustration from "@/assets/images/others/not-logedin.png"
import {Colors, Dimension, Fonts, Spacings} from "@/shared/styles";
import {Link} from "expo-router";

export default function TabTwoScreen() {
  return (
      <View style={styles.container}>
        <View style={{gap: Spacings.containerPadding}}>
          <Image source={illustration} style={styles.illustration}/>
          <View style={{gap: Spacings.padding}}>
            <Text style={styles.title}>Qui va là ?</Text>
            <Text style={styles.description}>Identifiez-vous pour vendre vos article neufs/seconde main en toute sécurité en toute sécurité.</Text>
          </View>
          <Link href={'/(auth)/login'} asChild>
            <Pressable style={styles.loginBtn} >
              <Text style={{color: '#fff', fontWeight: '700'}}>Se connecter</Text>
            </Pressable>
          </Link>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: Spacings.containerPadding,
  },
  illustration:{
    resizeMode: "contain",
    width: '100%',
    height: '40%',
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.poppinsBold
  },
  description:{
    fontSize: 16,
    fontFamily: Fonts.poppins,
    lineHeight: 22,
  },
  loginBtn: {
    height: Dimension.buttonHeight,
    backgroundColor: Colors.textColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  }
});
