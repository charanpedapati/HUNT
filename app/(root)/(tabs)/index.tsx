import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text  style={{ fontFamily: 'Rubik-Bold', fontSize: 40 }}className="font-bold my-10 text-3xl font-rubik">Welcome to HUNT.</Text>
      <Link href="/sign-in" className="font-semibold font-rubik">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
}
