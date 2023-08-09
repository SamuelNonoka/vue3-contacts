import useSnackbarStore from "@/store/snackbar.store"

export function useSnackbar() {
	const _SNACKBAR_TIMEOUT = 3000
  
  function showErrorSnackbar(text: string) {
    useSnackbarStore().setState(text, true, 'red')
		
    setTimeout(() => {
      useSnackbarStore().setState('', false, '')
    }, _SNACKBAR_TIMEOUT)
	}

	return {
		showErrorSnackbar
	}
}
