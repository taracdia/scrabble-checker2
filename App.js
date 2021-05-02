import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
	const [possibleWord, setPossibleWord] = useState("");

	return (
		<>
			<TextInput
				style={styles.textInput}
				placeholder="Guess here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
				autoCapitalize={"none"}
			/>
			<WebView source={{ uri: `1word.ws/${possibleWord}` }} />
		</>
	);
}

const styles = StyleSheet.create({
	textInput: {
		backgroundColor: "lightblue",
	},
});
