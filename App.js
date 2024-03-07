// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";
// import React, { useEffect } from "react";

// cd AppData\Local\Android\Sdk\emulator
// emulator -avd Pixel_8_Pro_API_33
// npm run android

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Button
// 				title="Sutvarkyt numeriusss"
// 				onPress={() => Alert.alert("Simple Button pressed")}
// 			/>

// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
	useEffect(() => {
		(async () => {
			const { status } = await Contacts.requestPermissionsAsync();
			if (status === "granted") {
				const { data } = await Contacts.getContactsAsync({
					fields: [Contacts.Fields.Emails],
				});

				if (data.length > 0) {
					const contact = data[0];
					console.log(contact);
				}
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Contacts Module Example</Text>
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
