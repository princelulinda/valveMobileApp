import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar';

const Users = () => {
	return (
		<>
			<View style={styles.container}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewContent}
				>
					<TouchableOpacity style={styles.room}>
						<MaterialCommunityIcons
							name='video-plus'
							size={26}
							color='#E141FC'
						/>
						<Text style={styles.text}>Create Room</Text>
					</TouchableOpacity>
					<View style={styles.user}>
						<Avatar
							source={require('../../assets/user2.jpg')}
							online={true}
						/>
					</View>
					<View style={styles.user}>
						<Avatar
							source={require('../../assets/user3.jpg')}
							online={true}
						/>
					</View>
					<View style={styles.user}>
						<Avatar
							source={require('../../assets/user4.jpg')}
						/>
					</View>
					<View style={styles.user}>
						<Avatar
							source={require('../../assets/user5.jpg')}
						/>
					</View>
					<View style={styles.user}>
						<Avatar
							source={require('../../assets/user3.jpg')}
						/>
					</View>
				</ScrollView>
			</View>
			<View style={styles.bottomDivider} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 58,
		flexDirection: 'row',
		alignItems: 'center',
	},
	scrollViewContent: {
		paddingLeft: 11,
	},
	room: {
		width: 115,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#82b1ff',
		paddingHorizontal: 15,
		marginRight: 12,
	},
	text: {
		color: '#1777f2',
		fontSize: 12,
		paddingLeft: 6,
	},
	user: {
		marginRight: 13,
	},
	bottomDivider: {
		width: '100%',
		height: 9,
		backgroundColor: '#f0f2f5',
	},
});

export default Users;
