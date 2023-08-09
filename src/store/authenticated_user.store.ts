import type User from '@/app/auth/domain/entities/user'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

const useAuthenticatedUserStore = defineStore('AuthenticatedUserStore', () => {
	const _user: Ref<User|null> = ref(null)
  
  const userState = computed(() => {
		return _user.value
	})

	function setUserState(user: User) {
		_user.value = user
	}

	return {
		userState,
    setUserState
	}
})

export default useAuthenticatedUserStore
