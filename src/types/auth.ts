type Auth = {
  name: string
  role: Roles
  uniqueID: string
}

enum Roles {
  Admin = 0,
  User = 1,
  Block = 2,
}

export { type Auth, Roles }
