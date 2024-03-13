/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontSize: {
				"32": "32px"
			},
			fontFamily: {
				"SF-Pro-Display": ["SF Pro Display", 'sans-serif'],
			},
			lineHeight: {
				"8.5": "35.2px",
				"3.5": "15px",
			},
			backgroundImage: {
				'discount-banner': "url('../images/discounts-banner.png')",
				'gift-banner': "url('../images/gift.png')",
				'delivery-banner': "url('../images/delivery.png')",
				'benefits-banner': "url('../images/benefits-banner.png')",
			},
			borderRadius: {
				"32": "32px"
			},
			screens: {
				"992": "992px",
				"xs": "480px"
			}
		},
	},
	plugins: [],
}