import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useSnackbarStore = defineStore('SnackbarStore', () => {
	const _text = ref('')
  const _visible = ref(false)
  const _color = ref('')

	const textState = computed(() => {
		return _text.value
	})

  const visibleState = computed(() => {
		return _visible.value
	})

  const colorState = computed(() => {
		return _color.value
	})

	function setState(text: string, visible: boolean, color: string) {
		_text.value = text
    _visible.value = visible
    _color.value = color
	}

	return {
		textState,
		visibleState,
    colorState,
    setState
	}
})

export default useSnackbarStore
