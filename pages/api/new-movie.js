async function handler(req, res){

    console.log("api/new-movie!");

    if(req.method === "POST"){

        const response = await fetch('https://react-http-e83a8-default-rtdb.firebaseio.com/movies.json', {
            method: req.method,
            body: JSON.stringify(req.body),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const resData = await response.json();
        console.log("resData", resData);

        res.status(201).json({message: "Movie Added!!"})
    }
}

export default handler;