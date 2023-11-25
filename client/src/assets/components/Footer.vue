<template>
	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__top">
				<div class="footer__body">
					<div class="footer__col">
						<div class="footer__col-title">
							<router-link class="footer__logo" to="/">Funiro.</router-link>
						</div>
						<div class="footer__col-content">
							<div class="footer__description">
								400 University Drive Suite 200 Coral Gables,
								<br />
								FL 33134 USA
							</div>
						</div>
					</div>
					<div class="footer__col">
						<div class="footer__col-title">
							<div class="footer__col-title-text">Links</div>
						</div>
						<div class="footer__col-content">
							<ul class="footer__menu menu-footer">
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/">Home</router-link>
								</li>
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/shop">Shop</router-link>
								</li>
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/about">About</router-link>
								</li>
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/contact">Contact</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer__col">
						<div class="footer__col-title">
							<div class="footer__col-title-text">Help</div>
						</div>
						<div class="footer__col-content">
							<ul class="footer__menu menu-footer">
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/payment">Payment Options</router-link>
								</li>
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/returns">Returns</router-link>
								</li>
								<li class="menu-footer__item">
									<router-link class="menu-footer__link" to="/privacy">Privacy Policies</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer__col">
						<div class="footer__col-title">
							<div class="footer__col-title-text">Newsletter</div>
						</div>
						<div class="footer__col-content">
							<form class="footer-form">
								<FeedbackInput
									class="footer-form__input"
									type="text"
									placeholder="Enter Your Email Address" />
								<FeedbackButton class="footer-form__button">SUBSCRIBE</FeedbackButton>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__copy-right">2023 furino. All rights reverved</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	@include adaptiveValue('padding-top', 48, 24, 0, 1920, 568);
	border-top: rem(1) solid color('black', 0.17);
	color: color('black');

	&__container {
	}

	&__top {
		@include adaptiveValue('padding-bottom', 48, 24, 0, 1920, 568);
	}

	&__body {
		display: grid;
		grid-auto-flow: column;
		align-items: flex-start;
		row-gap: rem(36);

		@media (max-width: $tablet) and (min-width: $mobileSmall) {
			grid-template-rows: auto auto;
			column-gap: rem(36);
		}

		@media (max-width: $mobileSmall) {
			grid-auto-flow: row;
		}
	}

	&__col {
		display: grid;
		grid-template-rows: auto 1fr;

		@media (min-width: $tablet) {
			&:nth-child(1) {
				@include adaptiveValue('margin-right', 138, 48, 0, 1920, 768);
			}

			&:nth-child(2) {
				@include adaptiveValue('margin-right', 144, 48, 0, 1920, 768);
			}

			&:nth-child(3) {
				@include adaptiveValue('margin-right', 72, 48, 0, 1920, 768);
			}
		}

		@media (max-width: $tablet) and (min-width: $mobileSmall) {
			&:nth-child(2) {
				grid-row: 2;
			}

			&:nth-child(3) {
				grid-row: 2;
			}

			&:nth-child(4) {
				grid-column: 2;
			}
		}
	}

	&__col-title {
		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 50, 24, 0, 1920, 568);
		}
	}

	&__logo {
		@include adaptiveValue('font-size', 24, 18, 0, 1920, 568);
		font-weight: 700;
		line-height: normal;
	}

	&__col-content {
	}

	&__description {
		color: color('grey-6');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		line-height: normal;
		@include adaptiveValue('max-width', 285, 220, 1920, 768);
	}

	&__col-title-text {
		color: color('grey-6');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 500;
		line-height: normal;
	}

	&__menu {
	}

	&__bottom {
		border-top: rem(1) solid color('grey-7');
		@include adaptiveValue('padding-top', 35, 16, 0, 1920, 568);
		@include adaptiveValue('padding-bottom', 38, 16, 0, 1920, 568);
	}

	&__copy-right {
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		line-height: normal;
	}
}
.menu-footer {
	&__item {
		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 46, 16, 0, 1920, 568);
		}
	}

	&__link {
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 500;
		line-height: normal;
		transition: color 0.3s ease;

		&:hover {
			color: color('primary');
		}
	}
}
.footer-form {
	display: flex;
	gap: rem(12);
	align-items: center;

	&__input {
		flex: 0 0 rem(200);
		width: rem(200);
	}

	&__button {
	}
}
</style>
