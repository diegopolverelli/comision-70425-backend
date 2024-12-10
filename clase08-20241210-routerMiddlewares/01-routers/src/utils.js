export const procesaErrores=(res, error)=>{
    console.log(error)
    res.setHeader('Content-Type','application/json');
    return res.status(500).json({error:`Internal Server Error`})
}