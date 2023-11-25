<script setup></script>

<template>
	<header class="header" ref="header">
		<div class="header__container">
			<div class="header__body">
				<a class="header__logo logo" href="/">
					<div class="logo__icon ibg">
						<img src="@/assets/img/logo.svg" alt="logo" />
					</div>
					<div class="logo__text">Furniro</div>
				</a>
				<div class="header__menu menu" ref="menu">
					<ul class="menu__list">
						<li class="menu__item">
							<router-link class="menu__link" to="/">Home</router-link>
						</li>
						<li class="menu__item">
							<router-link class="menu__link" to="/shop">Shop</router-link>
						</li>
						<li class="menu__item">
							<router-link class="menu__link" to="/about">About</router-link>
						</li>
						<li class="menu__item">
							<router-link class="menu__link" to="/contact">Contact</router-link>
						</li>
					</ul>
				</div>
				<div class="header__actions actions">
					<button class="actions__icon">
						<SvgIcon class="fill" width="24" height="24" name="UserAlert" />
					</button>
					<button class="actions__icon">
						<SvgIcon class="stroke" width="24" height="24" name="Search" />
					</button>
					<button class="actions__icon">
						<SvgIcon class="stroke" width="24" height="24" name="Favorite" />
					</button>
					<button class="actions__icon">
						<SvgIcon class="fill" width="24" height="24" name="Cart" />
					</button>
					<button class="actions__icon actions__icon--menu" @click="menuToggle">
						<SvgIcon class="fill" width="24" height="24" name="MenuOpen" />
						<SvgIcon class="opened fill" width="24" height="24" name="MenuClose" />
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		menuToggle() {
			this.$refs.menu.classList.toggle('open');
			this.$refs.header.classList.toggle('menu-open');
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	&__container {
		@include adaptiveValue('padding-left', 54, 16, 0, 1920, 568);
		@include adaptiveValue('padding-right', 54, 16, 0, 1920, 568);
	}

	&__body {
		color: color('black');
		padding: rem(6) 0;
		@include adaptiveValue('min-height', 100, 80, 0, 1920, 568);

		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: rem(32);

		@media (max-width: $mobile) {
			grid-template-columns: auto auto;
			justify-content: space-between;
		}
	}

	&__logo {
	}

	&__menu {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__actions {
	}
}
.logo {
	display: flex;
	align-items: center;
	gap: rem(5);

	&__icon {
		flex-grow: 0;
		flex-shrink: 0;
		@include adaptiveValue('flex-basis', 50, 44, 0, 1920, 568);
		@include adaptiveValue('width', 50, 44, 0, 1920, 568);
		@include adaptiveValue('height', 32, 24, 0, 1920, 568);
	}

	&__text {
		font-family: Montserrat, sans-serif;
		@include adaptiveValue('font-size', 34, 24, 0, 1920, 568);
		font-weight: 700;
		line-height: normal;
	}
}

.menu {
	@media (max-width: $mobile) {
		position: fixed;
		top: 0;
		right: 0;
		width: 70vw;
		height: 100dvh;
		transform: translateX(120%);
		transition: transform 0.3s ease;
		background-color: color('white');
		box-shadow: 2px 7px 13px black;

		@media (max-width: $mobileSmall) {
			width: 100vw;
		}

		&.open {
			transform: translateX(0);
		}
	}

	&__list {
		display: flex;
		align-items: center;
		@include adaptiveValue('gap', 75, 16, 0, 1920, 768);

		@media (max-width: $mobile) {
			flex-direction: column;
		}
	}

	&__item {
	}

	&__link {
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 768);
		font-weight: 500;
		line-height: normal;
		transition: color 0.3s ease;

		@media (max-width: $mobile) {
			@include adaptiveValue('font-size', 24, 28, 0, 768, 320);
		}

		&:hover {
			color: color('primary');
		}
	}
}
.actions {
	display: flex;
	align-items: center;
	@include adaptiveValue('gap', 45, 16, 0, 1920, 568);

	&__icon {
		flex-grow: 0;
		flex-shrink: 0;
		@include adaptiveValue('flex-basis', 28, 24, 0, 1920, 568);
		@include adaptiveValue('width', 28, 24, 0, 1920, 568);
		aspect-ratio: 1;

		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			&.fill {
				fill: color('black');
				transition: fill 0.3s ease;

				&:hover {
					fill: color('primary');
				}
			}

			&.stroke {
				stroke: color('black');
				transition: stroke 0.3s ease;

				&:hover {
					stroke: color('primary');
				}
			}
		}

		&--menu {
			position: relative;

			@media (min-width: $mobile) {
				display: none;
			}

			svg {
				&.opened {
					display: none;
				}

				.menu-open & {
					display: none;

					&.opened {
						display: block;
					}
				}
			}
		}
	}
}
</style>
