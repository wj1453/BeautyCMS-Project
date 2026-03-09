<template>
	<view class="container">
		<!-- User Header -->
		<view class="user-header" @click="login">
			<image :src="userInfo.avatarUrl || 'https://via.placeholder.com/150?text=Avatar'" mode="aspectFill" class="avatar"></image>
			<view class="user-info">
				<text class="nickname">{{userInfo.nickname || '点击登录'}}</text>
				<view class="membership-badge" v-if="userInfo.membershipLevel">
					{{membershipLabels[userInfo.membershipLevel] || '普通会员'}}
				</view>
			</view>
		</view>

		<!-- Membership Card Section -->
		<view class="member-card-section">
			<view class="member-card">
				<view class="card-top">
					<text class="card-name">Beauty Membership</text>
					<text class="card-level">{{membershipLabels[userInfo.membershipLevel] || '银卡'}}</text>
				</view>
				<view class="card-bottom">
					<view class="stat-item">
						<text class="stat-num">{{userInfo.points || 0}}</text>
						<text class="stat-label">积分</text>
					</view>
					<view class="stat-item">
						<text class="stat-num">{{userInfo.coupons || 0}}</text>
						<text class="stat-label">优惠券</text>
					</view>
					<view class="stat-item">
						<text class="stat-num">{{userInfo.balance || '0.00'}}</text>
						<text class="stat-label">余额</text>
					</view>
				</view>
			</view>
		</view>

		<!-- Order Menu -->
		<view class="menu-section">
			<view class="section-title">我的服务</view>
			<view class="menu-grid">
				<view class="menu-item">
					<view class="menu-icon booking-icon"></view>
					<text>我的预约</text>
				</view>
				<view class="menu-item">
					<view class="menu-icon order-icon"></view>
					<text>我的订单</text>
				</view>
				<view class="menu-item">
					<view class="menu-icon card-icon"></view>
					<text>我的卡券</text>
				</view>
				<view class="menu-item">
					<view class="menu-icon record-icon"></view>
					<text>到店记录</text>
				</view>
			</view>
		</view>

		<!-- General Settings -->
		<view class="settings-list">
			<view class="setting-item">
				<text>个人资料</text>
				<text class="arrow">></text>
			</view>
			<view class="setting-item">
				<text>收货地址</text>
				<text class="arrow">></text>
			</view>
			<view class="setting-item">
				<text>在线客服</text>
				<text class="arrow">></text>
			</view>
			<view class="setting-item">
				<text>关于我们</text>
				<text class="arrow">></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {
				nickname: '张三',
				avatarUrl: '',
				membershipLevel: 'Silver',
				points: 1250,
				coupons: 3,
				balance: '500.00'
			},
			membershipLabels: {
				'Normal': '普通会员',
				'Silver': '银卡会员',
				'Gold': '金卡会员',
				'Diamond': '钻石会员'
			}
		}
	},
	methods: {
		login() {
			uni.showToast({ title: '微信登录对接中', icon: 'none' });
		}
	}
}
</script>

<style lang="scss">
.container {
	background-color: #f8f8f8;
	min-height: 100vh;
}

.user-header {
	background: #ff4c82;
	padding: 60rpx 40rpx 100rpx;
	display: flex;
	align-items: center;
	color: #fff;
	.avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		border: 4rpx solid #fff;
		margin-right: 20rpx;
	}
	.nickname {
		font-size: 36rpx;
		font-weight: bold;
	}
	.membership-badge {
		background: rgba(255, 255, 255, 0.2);
		padding: 4rpx 16rpx;
		border-radius: 20rpx;
		font-size: 20rpx;
		margin-top: 10rpx;
	}
}

.member-card-section {
	margin-top: -60rpx;
	padding: 0 30rpx;
	.member-card {
		background: linear-gradient(135deg, #333, #666);
		border-radius: 20rpx;
		padding: 40rpx;
		color: #f1c40f;
		box-shadow: 0 10rpx 20rpx rgba(0,0,0,0.1);
		.card-top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 40rpx;
			.card-name { font-size: 28rpx; }
			.card-level { font-size: 36rpx; font-weight: bold; }
		}
		.card-bottom {
			display: flex;
			justify-content: space-around;
			.stat-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				.stat-num { font-size: 32rpx; font-weight: bold; color: #fff; }
				.stat-label { font-size: 24rpx; color: #ccc; margin-top: 8rpx; }
			}
		}
	}
}

.menu-section {
	background: #fff;
	margin: 20rpx 30rpx;
	padding: 30rpx;
	border-radius: 12rpx;
	.section-title { font-size: 30rpx; font-weight: bold; margin-bottom: 30rpx; }
	.menu-grid {
		display: flex;
		justify-content: space-between;
		.menu-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			text { font-size: 24rpx; color: #666; margin-top: 12rpx; }
		}
	}
	.menu-icon { width: 60rpx; height: 60rpx; background: #eee; border-radius: 10rpx; }
}

.settings-list {
	background: #fff;
	margin: 20rpx 30rpx;
	border-radius: 12rpx;
	.setting-item {
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 28rpx;
		color: #333;
		&:last-child { border-bottom: none; }
		.arrow { color: #ccc; }
	}
}
</style>
