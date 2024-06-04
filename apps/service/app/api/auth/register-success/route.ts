import { cookies } from 'next/headers'

export async function DELETE() {
  cookies().delete('notRegistered')
}
