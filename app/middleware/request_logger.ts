import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class RequestLogger {
  public async handle(ctx: HttpContext, next: () => Promise<void>) {
    const { request } = ctx
    const requestId = request.header('x-request-id') || crypto.randomUUID()

    // リクエスト情報をJSON形式でログ出力
    console.log('\n')
    console.log(
      JSON.stringify({
        type: 'request',
        timestamp: new Date().toISOString(),
        requestId,
        method: request.method(),
        url: request.url(),
        path: request.url(true),
        ip: request.ip(),
        userAgent: request.header('user-agent'),
        query: request.qs(),
        // セキュリティに注意して本番環境ではボディやヘッダーの内容を制限する
        // headers: env.get('NODE_ENV') === 'development' ? request.headers() : {},
        body: env.get('NODE_ENV') === 'development' ? request.body() : {},
      })
    )

    // 次のミドルウェアに処理を渡す
    await next()
  }
}
