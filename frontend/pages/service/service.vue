<template>
	<view class="container">
		<!-- Sidebar for Categories -->
		<view class="sidebar">
			<view 
				class="category-item" 
				v-for="(cat, index) in categories" 
				:key="index"
				:class="{ active: activeCategory === index }"
				@click="selectCategory(index)"
			>
				{{cat}}
			</view>
		</view>

		<!-- Service List Area -->
		<scroll-view class="service-area" scroll-y>
			<view class="service-list">
				<view class="service-item" v-for="(service, index) in currentServices" :key="index">
					<image :src="service.imageUrl || 'https://via.placeholder.com/200x150'" mode="aspectFill" class="service-img"></image>
					<view class="service-info">
						<text class="service-name">{{service.name}}</text>
						<text class="service-meta">时长: {{service.duration}}min | {{service.category}}</text>
						<view class="price-row">
							<text class="price">¥{{service.price}}</text>
							<button class="book-btn" @click="bookService(service)">预约</button>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeCategory: 0,
			categories: ['面部护理', '身体护理', '养生调理', '美甲美睫'],
			services: [
				{ name: '补水面部SPA', duration: 60, category: '面部护理', price: 198 },
				{ name: '深层清洁护理', duration: 75, category: '面部护理', price: 288 },
				{ name: '精油背部按摩', duration: 45, category: '身体护理', price: 168 },
				{ name: '全身舒缓SPA', duration: 90, category: '身体护理', price: 398 },
				{ name: '艾灸调理', duration: 30, category: '养生调理', price: 128 }
			]
		}
	},
	computed: {
		currentServices() {
			const catName = this.categories[this.activeCategory];
			return this.services.filter(s => s.category === catName);
		}
	},
	methods: {
		selectCategory(index) {
			this.activeCategory = index;
		},
		bookService(service) {
			uni.navigateTo({
				url: `/pages/service/booking?id=${service.id || 1}`
			});
		}
	}
}
</script>

<style lang="scss">
.container {
	display: flex;
	height: 100vh;
	background: #fff;
}

.sidebar {
	width: 180rpx;
	background: #f8f8f8;
	height: 100%;
	.category-item {
		padding: 40rpx 20rpx;
		text-align: center;
		font-size: 26rpx;
		color: #666;
		&.active {
			background: #fff;
			color: #ff4c82;
			font-weight: bold;
			border-left: 6rpx solid #ff4c82;
		}
	}
}

.service-area {
	flex: 1;
	padding: 20rpx;
	.service-list {
		display: flex;
		flex-direction: column;
		.service-item {
			display: flex;
			margin-bottom: 30rpx;
			.service-img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 8rpx;
				margin-right: 20rpx;
			}
			.service-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.service-name { font-size: 28rpx; font-weight: bold; }
				.service-meta { font-size: 22rpx; color: #999; }
				.price-row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.price { color: #ff4c82; font-size: 30rpx; font-weight: bold; }
					.book-btn {
						background: #ff4c82;
						color: #fff;
						font-size: 22rpx;
						padding: 0 24rpx;
						height: 44rpx;
						line-height: 44rpx;
						border-radius: 22rpx;
						margin: 0;
					}
				}
			}
		}
	}
}
</style>
