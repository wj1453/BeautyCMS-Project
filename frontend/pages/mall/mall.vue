<template>
	<view class="container">
		<!-- Search Bar -->
		<view class="search-bar">
			<input type="text" placeholder="搜索心仪商品..." class="search-input" />
			<view class="search-btn">搜索</view>
		</view>

		<!-- Product Grid -->
		<view class="product-grid">
			<view class="product-card" v-for="(product, index) in products" :key="index">
				<image :src="product.image || 'https://via.placeholder.com/300x300'" mode="aspectFill" class="product-img"></image>
				<view class="product-info">
					<text class="product-name">{{product.name}}</text>
					<view class="price-row">
						<text class="price">¥{{product.price}}</text>
						<text class="sales">已售{{product.sales}}</text>
					</view>
					<button class="buy-btn">立即购买</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			products: [
				{ name: '玻尿酸补水面膜 (5片/盒)', price: 128, sales: 256 },
				{ name: '紧致提亮精华乳', price: 498, sales: 89 },
				{ name: '深层滋养身体乳', price: 158, sales: 120 },
				{ name: '美白防晒喷雾', price: 88, sales: 450 }
			]
		}
	}
}
</script>

<style lang="scss">
.container {
	background: #f8f8f8;
	min-height: 100vh;
}

.search-bar {
	display: flex;
	padding: 20rpx 30rpx;
	background: #fff;
	align-items: center;
	.search-input {
		flex: 1;
		background: #f0f0f0;
		height: 70rpx;
		border-radius: 35rpx;
		padding: 0 30rpx;
		font-size: 26rpx;
	}
	.search-btn {
		margin-left: 20rpx;
		color: #ff4c82;
		font-size: 28rpx;
		font-weight: bold;
	}
}

.product-grid {
	display: flex;
	flex-wrap: wrap;
	padding: 20rpx;
	justify-content: space-between;
	.product-card {
		width: 345rpx;
		background: #fff;
		margin-bottom: 20rpx;
		border-radius: 12rpx;
		overflow: hidden;
		.product-img {
			width: 345rpx;
			height: 345rpx;
		}
		.product-info {
			padding: 20rpx;
			.product-name {
				font-size: 26rpx;
				color: #333;
				height: 72rpx;
				line-height: 36rpx;
				display: block;
				overflow: hidden;
				margin-bottom: 10rpx;
			}
			.price-row {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				margin-bottom: 16rpx;
				.price { color: #ff4c82; font-size: 32rpx; font-weight: bold; }
				.sales { font-size: 20rpx; color: #999; }
			}
			.buy-btn {
				background: #ff4c82;
				color: #fff;
				font-size: 24rpx;
				padding: 0;
				height: 56rpx;
				line-height: 56rpx;
				border-radius: 28rpx;
				margin: 0;
			}
		}
	}
}
</style>
