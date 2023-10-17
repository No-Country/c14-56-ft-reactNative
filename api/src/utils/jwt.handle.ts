import { sign, verify } from 'jsonwebtoken'

export class JWT {
  private jwtSecret: string
  private payload: string

  constructor()
  constructor(payload: string)
  constructor(payload?: string) {
    this.jwtSecret = `${process.env.JWT_SECRET}`
    this.payload = payload || ''
  }

  generateToke = () => {
    return sign({ email: this.payload }, this.jwtSecret, { expiresIn: '1h' })
  }

  verifyToken = (token: string) => {
    return verify(token, this.jwtSecret)
  }
}
