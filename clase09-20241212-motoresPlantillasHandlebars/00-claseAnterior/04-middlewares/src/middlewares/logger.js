export const loggerMiddleware=(req, res, next)=>{
    console.log(`Log: fecha: ${new Date()} - url: ${req.url} - method: ${req.method}`)

    next()
}