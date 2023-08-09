import { mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const awTheme = {
	dark: false,
	colors: {
		primary: '#0084FF',
		error: '#FC2D30',
	},
}

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		sets: {
			mdi,
		},
	},
	theme: {
		defaultTheme: 'awTheme',
		themes: {
			awTheme,
		},
	},
})

export default vuetify
