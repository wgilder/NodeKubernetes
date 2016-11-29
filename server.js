const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

let userRouter = express.Router()

userRouter.get('*', (req, res) => {
	res.status(200).json({hello: 'world of automated devops tasks!'})
});

app.use(userRouter)

app.listen(PORT, () => {
	console.log('App Live on port ' + PORT)
});