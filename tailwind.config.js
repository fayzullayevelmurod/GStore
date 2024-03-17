/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"dark-slate-gray": "#374151",
				'transparent-bg': 'rgba(15, 23, 42, 0.75)',
			},
			fontSize: {
				"3xl": "32px",
				"4xl": "40px",
			},
			fontFamily: {
				"SF-Pro-Display": ["SF Pro Display", 'sans-serif'],
				"Onest": ["Onest", 'sans-serif'],
			},
			lineHeight: {
				"8.5": "35.2px",
				"3.5": "15px",
			},
			backgroundImage: {
				'discount-banner': "url('../images/discounts-banner.png')",
				'discount-media-banner': "url('../images/discounts-media-banner.png')",
				'gift-banner': "url('../images/gift.png')",
				'delivery-banner': "url('../images/delivery.png')",
				'benefits-banner': "url('../images/benefits-banner.png')",
				'catalog-img-1': "url('../images/catalog-img-1.png')",
				'catalog-img-2': "url('../images/catalog-img-2.png')",
				'catalog-img-3': "url('../images/catalog-img-3.png')",
				'catalog-img-4': "url('../images/catalog-img-4.png')",
				'catalog-img-5': "url('../images/catalog-img-5.png')",
				'catalog-img-6': "url('../images/catalog-img-6.png')",
				'catalog-img-7': "url('../images/catalog-img-7.png')",
				'media-catalog-img-1': "url('../images/media-catalog-img-1.png')",
				'media-catalog-img-2': "url('../images/media-catalog-img-2.png')",
				'media-catalog-img-3': "url('../images/media-catalog-img-3.png')",
				'media-catalog-img-4': "url('../images/media-catalog-img-4.png')",
				'media-catalog-img-5': "url('../images/media-catalog-img-5.png')",
				'media-catalog-img-6': "url('../images/media-catalog-img-6.png')",
				'media-catalog-img-7': "url('../images/media-catalog-img-7.png')",
				'stock-img-1': "url('../images/stock-bg-1.png')",
				'stock-img-2': "url('../images/stock-bg-2.png')",
				'stock-img-3': "url('../images/stock-bg-3.png')",
				'stock-bg': "url('../images/stock-bg.png')",
			},
			borderRadius: {
				"32": "32px"
			},
			screens: {
				"992": "992px",
				"xs": "480px",
				"tablet": "840px"
			},
			boxShadow: {
				"card-shadow": "0.11926236003637314px 2.6862428188323975px 7.4148149490356445px 0px #33415509"
			}
		},
	},
	plugins: [],
}