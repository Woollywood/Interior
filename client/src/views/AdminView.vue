<template>
	<div class="admin-panel">
		<div class="admin-panel__container container">
			<h1 class="admin-panel__title">Админ панель</h1>
			<div class="admin-panel__form admin-form">
				<div class="admin-form__line">
					<h3 class="admin-panel__sub-title">Добавление товара</h3>
					<div class="admin-form__fields">
						<div class="input-field">
							<input v-model="product.name" placeholder="Название товара" type="text" />
						</div>
						<div class="input-field">
							<input v-model="product.description" placeholder="Описание товара" type="text" />
						</div>
						<div class="input-field">
							<imask-input
								v-model="product.price"
								:mask="Number"
								radix="."
								placeholder="Стоимость товара" />
						</div>
						<div class="input-field input-field--row">
							<label>
								<input type="checkbox" class="filled-in" v-model="product.labels.hasDiscount" />
								<span>Скидка</span>
							</label>
							<label>
								<input type="checkbox" class="filled-in" v-model="product.labels.isNew" />
								<span>New</span>
							</label>
						</div>
						<div v-if="product.labels.hasDiscount" class="input-field">
							<imask-input
								v-model="product.discount"
								:mask="Number"
								radix="."
								placeholder="Скидка (в процентах)" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { IMaskComponent } from 'vue-imask';
export default {
	components: {
		'imask-input': IMaskComponent,
	},
	data() {
		return {
			product: {
				name: '',
				description: '',
				price: '',
				labels: {
					hasDiscount: false,
					isNew: false,
				},
				discount: '',
			},
		};
	},
};
</script>

<style lang="scss" scoped>
@import '~materialize-css/sass/materialize.scss';
</style>

<style lang="scss" scoped>
.admin-panel {
	width: 100%;
	min-height: 100dvh;
	@include adaptiveValue('padding-top', 120, 30, 0, 1920, 568);
	@include adaptiveValue('padding-bottom', 120, 30, 0, 1920, 568);

	&__title {
		text-align: center;
		color: color('grey-1');
		@include adaptiveValue('font-size', 36, 24, 0, 1920, 568);
	}

	&__form {
		display: flex;
		flex-direction: column;
		@include adaptiveValue('gap', 24, 12, 0, 1920, 568);
	}

	&__sub-title {
		color: color('grey-2');
		@include adaptiveValue('font-size', 24, 20, 0 1920, 568);
	}
}

.admin-form {
	&__fields {
		display: flex;
		flex-direction: column;
		@include adaptiveValue('gap', 24, 16, 0, 1920, 568);

		> * {
			margin: 0;
		}
	}

	.input-field {
		&--row {
			display: flex;
			align-items: center;
			@include adaptiveValue("gap", 24, 16, 0, 1920, 568);
		}

		label {
			position: static;
		}
	}
}
</style>
