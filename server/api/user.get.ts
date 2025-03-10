export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  user.doStuff()
  return user
})
