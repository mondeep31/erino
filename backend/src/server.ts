import app from './app'
import { PORT } from './config'

app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`)
})