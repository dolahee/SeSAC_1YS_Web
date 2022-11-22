app.use(express.urlencoded({ extended: true })); //x-www-urlencoded 데이터 해석
app.use(express.json()); //json: 딕셔너리 형태와 비슷
// {
//     key:value
// }
