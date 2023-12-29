'use server'

import Pocketbase from 'pocketbase'

const pb = new Pocketbase('https://pym-database.pockethost.io')

export default async function LoginAuth(formData: FormData) {
  const usernameOrEmail = formData.get('email') || '';
  const password = formData.get('password') || '';
  console.log(usernameOrEmail, password)
  const authData = await pb.collection('users').authWithPassword(usernameOrEmail as string, password as string)
  console.log(authData)
  console.log(pb.authStore.token)
}
