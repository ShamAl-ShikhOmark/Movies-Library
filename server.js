app.get('/toprated',topratedHandler)        //get request using axios "/toprated"
async function topratedHandler(req,res) {                    
    let axiosres= await axios.get(`${DataBase_url}/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    let mdbData=axiosres.data.results;
    let x= mdbData.map(element => {
      return {
    id: element.id,
    title:element.title || element.name,
    release_date:element.release_date,
    poster_path: element.poster_path,
    overview: element.overview
      }
    })
res.send(x)
}

app.get('/',(req,res)=>{                         //home page route handler with handler, get request from data.json
  console.log("home page"+req.originalUrl);
  let m1= new Mdbformatt(movieData.id, movieData.title, movieData.release_date , movieData.poster_path, movieData.overview)
  res.send(m1);
})          

app.get('/favorite',(req,res) =>{           //favorite page route with handler
    console.log("favorite page")
    res.send("Welcome to Favorite Page")})  
    
    app.use((req, res, next) => {
      res.status(404).send({
        code: 404,
        message: "Page Not Found"
      })
      
    })
    app.use((err,req, res, next) => {
      res.status(500).send({
        code: 500,
        message: "Server Error",
        extra:err
      })
  
    })
