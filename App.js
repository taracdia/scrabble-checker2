import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
	const [possibleWord, setPossibleWord] = useState("");
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Guess here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
			/>
			<WebView source={{ uri: "https://reactnative.dev/" }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

// import React from "react";
// import { View, Text, TouchableOpacity, TextInput } from "react-native";

// import Styles from "../Styles";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// export default function SearchInput({
// 	possibleWord,
// 	setPossibleWord,
// 	clickButton,
// }) {
// 	return (
// 		<View style={Styles.searchPage}>
// 			<View style={Styles.textInputBox}>
// 				<TextInput
// 					placeholder="Guess here"
// 					onChangeText={text => setPossibleWord(text)}
// 					defaultValue={possibleWord}
// 					placeholderTextColor={"gray"}
// 					style={[Styles.white, Styles.text]}
// 					onSubmitEditing={clickButton}
// 					autoCapitalize={"none"}
// 				/>
// 				<TouchableOpacity onPress={() => setPossibleWord("")}>
// 					<Text style={[Styles.white, Styles.text]}>X</Text>
// 				</TouchableOpacity>
// 			</View>
// 			<TouchableOpacity onPress={clickButton} style={Styles.button}>
// 				<FontAwesomeIcon
// 					icon={faSearch}
// 					size={30}
// 					style={Styles.white}
// 				/>
// 			</TouchableOpacity>
// 		</View>
// 	);
// }
