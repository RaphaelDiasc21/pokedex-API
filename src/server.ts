import express, { Request, Response } from 'express'

const app = express()

app.use((req: Request, resp: Response) =>{
    return resp.json({msg: "Tudo ok"})
})

app.listen(3900)