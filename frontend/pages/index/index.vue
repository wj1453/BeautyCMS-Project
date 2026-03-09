<template>
	<view class="container">
		<!-- Banner Section -->
		<swiper class="banner" indicator-dots autoplay circular>
			<swiper-item v-for="(item, index) in banners" :key="index">
				<image :src="item.url" mode="aspectFill" class="banner-image"></image>
			</swiper-item>
		</swiper>

		<!-- Fast Entry Section -->
		<view class="nav-grid">
			<view class="nav-item" @click="navigateTo('/pages/service/service')">
				<view class="nav-icon booking-icon"></view>
				<text>立即预约</text>
			</view>
			<view class="nav-item" @click="showToast('积分商城开发中')">
				<view class="nav-icon points-icon"></view>
				<text>积分商城</text>
			</view>
			<view class="nav-item" @click="showToast('优惠券包开发中')">
				<view class="nav-icon coupon-icon"></view>
				<text>领券中心</text>
			</view>
			<view class="nav-item" @click="showToast('会员权益开发中')">
				<view class="nav-icon member-icon"></view>
				<text>会员等级</text>
			</view>
		</view>

		<!-- Flash Sale / Events -->
		<view class="section flash-sale">
			<view class="section-header">
				<text class="section-title">限时秒杀</text>
				<text class="more">更多 ></text>
			</view>
			<scroll-view scroll-x class="flash-list">
				<view class="flash-item" v-for="(item, index) in flashSales" :key="index">
					<image :src="item.image" mode="aspectFill"></image>
					<text class="item-name">{{item.name}}</text>
					<text class="item-price">¥{{item.price}}</text>
				</view>
			</scroll-view>
		</view>

		<!-- Popular Services -->
		<view class="section">
			<view class="section-header">
				<text class="section-title">热门服务</text>
			</view>
			<view class="service-list">
				<view class="service-card" v-for="(service, index) in popularServices" :key="index" @click="goToDetail(service)">
					<image :src="service.image" mode="aspectFill"></image>
					<view class="service-info">
						<text class="service-name">{{service.name}}</text>
						<text class="service-desc">{{service.desc}}</text>
						<view class="price-row">
							<text class="price">¥{{service.price}}</text>
							<button class="book-btn">预约</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			banners: [
				{ url: 'https://via.placeholder.com/750x300?text=Beauty+Spring+Event' },
				{ url: 'https://via.placeholder.com/750x300?text=New+Facial+Treatment' }
			],
			flashSales: [
				{ name: '补水保湿面部护理', price: 99, image: 'https://via.placeholder.com/200x200' },
				{ name: '全身精油SPA', price: 199, image: 'https://via.placeholder.com/200x200' },
				{ name: '美甲单次卡', price: 68, image: 'https://via.placeholder.com/200x200' }
			],
			popularServices: [
				{ name: '深层清洁焕肤', desc: '时长: 60分钟 | 适合肤质: 全肤质', price: 258, image: 'https://via.placeholder.com/300x200' },
				{ name: '肩颈舒缓理疗', desc: '时长: 45分钟 | 缓解压力、酸痛', price: 188, image: 'https://via.placeholder.com/300x200' }
			]
		}
	},
	methods: {
		navigateTo(url) {
			uni.switchTab({ url });
		},
		showToast(msg) {
			uni.showToast({ title: msg, icon: 'none' });
		},
		goToDetail(service) {
			uni.showToast({ title: '详情页开发中', icon: 'none' });
		}
	}
}
</script>

<style lang="scss">
.container {
	padding-bottom: 30rpx;
	background-color: #f8f8f8;
}

.banner {
	height: 350rpx;
	.banner-image {
		width: 100%;
		height: 100%;
	}
}

.nav-grid {
	display: flex;
	justify-content: space-around;
	padding: 30rpx 0;
	background: #fff;
	margin-bottom: 20rpx;
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text {
			font-size: 24rpx;
			color: #333;
			margin-top: 10rpx;
		}
	}
	.nav-icon {
		width: 80rpx;
		height: 80rpx;
		background: #ff4c82;
		border-radius: 40rpx;
	}
}

.section {
	background: #fff;
	padding: 30rpx;
	margin-bottom: 20rpx;
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		.section-title {
			font-size: 32rpx;
			font-weight: bold;
		}
		.more {
			font-size: 24rpx;
			color: #999;
		}
	}
}

.flash-list {
	white-space: nowrap;
	.flash-item {
		display: inline-block;
		width: 200rpx;
		margin-right: 20rpx;
		image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 12rpx;
		}
		.item-name {
			display: block;
			font-size: 24rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.item-price {
			color: #ff4c82;
			font-weight: bold;
		}
	}
}

.service-card {
	display: flex;
	margin-bottom: 30rpx;
	image {
		width: 240rpx;
		height: 180rpx;
		border-radius: 12rpx;
		margin-right: 20rpx;
	}
	.service-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.service-name {
			font-size: 30rpx;
			font-weight: bold;
		}
		.service-desc {
			font-size: 24rpx;
			color: #666;
		}
		.price-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.price {
				color: #ff4c82;
				font-size: 32rpx;
				font-weight: bold;
			}
			.book-btn {
				background: #ff4c82;
				color: #fff;
				font-size: 24rpx;
				padding: 0 30rpx;
				margin: 0;
				height: 50rpx;
				line-height: 50rpx;
				border-radius: 25rpx;
			}
		}
	}
}
</style>
