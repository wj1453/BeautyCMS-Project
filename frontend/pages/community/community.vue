<template>
	<view class="container">
		<!-- Feed List -->
		<view class="feed-list">
			<view class="feed-item" v-for="(item, index) in feeds" :key="index">
				<view class="user-row">
					<image :src="item.avatar || 'https://via.placeholder.com/60x60'" class="avatar"></image>
					<text class="nickname">{{item.nickname}}</text>
				</view>
				<text class="content">{{item.content}}</text>
				<image v-if="item.image" :src="item.image" mode="widthFix" class="feed-img"></image>
				<view class="footer-row">
					<text class="time">{{item.time}}</text>
					<view class="actions">
						<text class="action-item">❤️ {{item.likes}}</text>
						<text class="action-item">💬 {{item.comments}}</text>
					</view>
				</view>
			</view>
		</view>

		<!-- Floating Post Button -->
		<view class="post-btn" @click="post">
			<text>+</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			feeds: [
				{ nickname: '小美', avatar: '', content: '今天做了这个深层清洁，感觉皮肤透亮了好多！推荐！', image: 'https://via.placeholder.com/600x400', time: '1小时前', likes: 25, comments: 3 },
				{ nickname: '养生达人', avatar: '', content: '周末来个背部SPA，整个人都轻松了。', image: 'https://via.placeholder.com/600x400', time: '3小时前', likes: 12, comments: 1 },
				{ nickname: '护肤小白', avatar: '', content: '求问大家，这里的面膜好用吗？', image: null, time: '昨天', likes: 5, comments: 8 }
			]
		}
	},
	methods: {
		post() {
			uni.showToast({ title: '发布功能对接中', icon: 'none' });
		}
	}
}
</script>

<style lang="scss">
.container {
	background: #f8f8f8;
	min-height: 100vh;
	padding-bottom: 40rpx;
}

.feed-list {
	padding: 20rpx;
	.feed-item {
		background: #fff;
		margin-bottom: 20rpx;
		padding: 24rpx;
		border-radius: 12rpx;
		.user-row {
			display: flex;
			align-items: center;
			margin-bottom: 16rpx;
			.avatar { width: 60rpx; height: 60rpx; border-radius: 30rpx; margin-right: 16rpx; }
			.nickname { font-size: 26rpx; color: #333; font-weight: bold; }
		}
		.content { font-size: 28rpx; color: #444; margin-bottom: 16rpx; display: block; }
		.feed-img { width: 100%; border-radius: 8rpx; margin-bottom: 16rpx; }
		.footer-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.time { font-size: 22rpx; color: #999; }
			.actions {
				display: flex;
				.action-item { font-size: 24rpx; color: #666; margin-left: 20rpx; }
			}
		}
	}
}

.post-btn {
	position: fixed;
	right: 40rpx;
	bottom: 40rpx;
	width: 100rpx;
	height: 100rpx;
	background: #ff4c82;
	border-radius: 50rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 60rpx;
	box-shadow: 0 4rpx 20rpx rgba(255, 76, 130, 0.4);
}
</style>
