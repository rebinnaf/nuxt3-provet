<script setup lang="ts">
import type { Errors, SignupForm } from '~/types'
import { ref } from 'vue'
import { debounce } from '~/utils'

const { fetch: refreshSession } = useUserSession()

const isVisible = ref<boolean>(false)
const isLoading = ref<boolean>(false)

const credentials = ref <SignupForm>({
  email: '',
  password: '',
  subscribed: false,
})

const errors = ref <Errors<SignupForm>>({
  email: '',
  password: '',
})

function validateEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
  errors.value.email = !value
    ? 'Email is required'
    : !emailRegex.test(value)
        ? 'Invalid email format'
        : ''
}

function validatePassword(value: string) {
  errors.value.password = !value
    ? 'Password is required'
    : value.length < 8
      ? 'Password must be at least 8 characters'
      : ''
}

const debouncedEmailValidation = debounce(validateEmail, 300)
const debouncedPasswordValidation = debounce(validatePassword, 300)

async function signup() {
  validateEmail(credentials.value.email)
  validatePassword(credentials.value.password)
  isLoading.value = true
  if (errors.value.email || errors.value.password)
    return

  $fetch('/api/signup', {
    method: 'POST',
    body: credentials.value,
  })
    .then(async () => {
      await refreshSession()
      await navigateTo('/success')
    })
    .catch(() => {
      console.error('Something went wrong with signup')
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <main class="n-stack-horizontal h-100">
    <provet-stack class="signup-stack n-margin-auto" direction="vertical" align-items="center" justify-content="center">
      <provet-card padding="l">
        <provet-stack gap="l">
          <p>Enter your email and password to signup.</p>

          <form id="signup_link_form" class="n-stack n-gap-m">
            <provet-stack gap="l">
              <provet-input
                id="email"
                v-model="credentials.email"
                label="Email"
                placeholder="Email"
                autocomplete="off"
                type="email"
                name="email"
                expand
                required
                :disabled="isLoading"
                @change="debouncedEmailValidation($event.target.value)"
              >
                <span v-if="errors.email" slot="error">
                  {{ errors.email }}
                </span>
              </provet-input>

              <provet-input
                id="password"
                v-model="credentials.password"
                label="Password"
                placeholder="Password"
                autocomplete="off"
                :type="isVisible ? 'text' : 'password'"
                name="password"
                expand
                required
                :disabled="isLoading"
                @change="debouncedPasswordValidation($event.target.value)"
              >
                <provet-button slot="end" href="#" @click.prevent="isVisible = !isVisible">
                  <provet-icon v-if="isVisible" name="interface-edit-on" />
                  <provet-icon v-else name="interface-edit-off" />
                </provet-button>

                <span v-if="errors.password" slot="error">
                  {{ errors.password }}
                </span>
              </provet-input>

              <provet-checkbox
                v-model="credentials.subscribed"
                type="checkbox"
                label="Receive occasional product updates and announcements"
                :disabled="isLoading"
              />

              <provet-button type="button" variant="primary" :loading="isLoading" @click="signup">
                Signup
              </provet-button>
            </provet-stack>
          </form>
        </provet-stack>

        <h1 slot="header" class="n-font-size-l">
          Sign Up
        </h1>
      </provet-card>

      <div id="page-footer">
        &copy; 2025 Provet Cloud
      </div>
    </provet-stack>
  </main>
</template>

<style>
  .signup-stack {
    inline-size: 90%;
    max-inline-size: 600px;
    margin: var(--n-space-xl) auto;
    row-gap: var(--n-space-xl);
  }

  .h-100{
    height: 100%;
  }
</style>
