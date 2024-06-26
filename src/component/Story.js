import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Avatar from './Avatar';

const Story = () => {
	return (
		<>
			<View style={styles.container}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewContent}
				>
					<View style={styles.card}>
						<Image
							source={require('../../assets/story1.jpg')}
							style={styles.cardStory}
						/>
						<View style={styles.cardUser}>
							<AntDesign name='plus' size={24} color='#1777f2' />
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.text}>Add To Story</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={require('../../assets/story2.jpg')}
							style={styles.cardStory}
						/>
						<View style={styles.cardUser}>
							<Avatar
								source={require('../../assets/user2.jpg')}
								story={true}
							/>
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.text}>Wanessa J</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={require('../../assets/story3.jpg')}
							style={styles.cardStory}
						/>
						<View style={styles.cardUser}>
							<Avatar
								source={require('../../assets/user3.jpg')}
								story={true}
							/>
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.text}>Regi P</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={require('../../assets/story4.jpg')}
							style={styles.cardStory}
						/>
						<View style={styles.cardUser}>
							<Avatar
								source={require('../../assets/user4.jpg')}
								story={true}
							/>
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.text}>Anna M</Text>
						</View>
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
		height: 192,
		flexDirection: 'row',
		alignItems: 'center',
	},
	scrollViewContent: {
		paddingLeft: 11,
	},
	card: {
		width: 106,
		height: 170,
		position: 'relative',
		marginRight: 8,
	},
	cardStory: {
		width: '100%',
		height: 170,
		borderRadius: 12,
	},
	cardUser: {
		position: 'absolute',
		top: 8,
		left: 8,
		backgroundColor: '#ffffff',
		borderRadius: 20,
		width: 39,
		height: 39,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardFooter: {
		width: '100%',
		position: 'absolute',
		bottom: 12,
		left: 9,
	},
	text: {
		fontSize: 13,
		fontWeight: 'bold',
		color: '#ffffff',
		textShadowColor: 'rgba(0, 0, 0, 0.4)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	bottomDivider: {
		width: '100%',
		height: 9,
		backgroundColor: '#f0f2f5',
	},
});

export default Story;
