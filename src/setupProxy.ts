import { createProxyMiddleware } from 'http-proxy-middleware'

export default (app: any) => {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    )
}