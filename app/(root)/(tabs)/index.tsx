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
      <Text className="my-10 text-3xl font-geist-semibold">Welcome to HUNT.</Text>
      <Link href="/sign-in" className="font-semibold font-geist">Sign In</Link>
      <Link href="/explore" className = "font-geist">Explore</Link>
      <Link href="/profile" className = "font-geist">Profile</Link>
      <Link href="/properties/1" className = "font-geist">Properties</Link>
    </View>
  );
}
