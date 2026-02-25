import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);
  const [resultado, setResultado] =
    useState<ImagePicker.ImagePickerResult | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    setLoading(true);

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images", "videos"],
      quality: 1,
    });

    setResultado(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="take a photo" onPress={pickImage} />

      {loading && <Text>esperando a seleção...</Text>}

      {image && (
        <Pressable
          onPress={() => console.log(resultado)}
          style={styles.bgcolor}
        >
          <Image source={{ uri: image }} style={styles.image} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  bgcolor: { backgroundColor: "red", padding: 8, borderRadius: 10 },
  image: { width: 750, height: 750, borderRadius: 10 },
});
