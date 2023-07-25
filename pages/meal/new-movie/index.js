import {useRouter} from "next/router";
import Head from "next/head";
import MovieForm from "@/components/movies/MovieForm";


export default function NewMoviePage(){
    const router = useRouter();

    async function addMovieHandler(enteredMovieData){
        console.log("enteredMovieData", enteredMovieData);

        const response = await fetch("/api/new-movie", {
            method: 'POST',
            body: JSON.stringify(enteredMovieData),
            headers: {
                "Content-Type" : "application/json"
            },
        });

        const data = await response.json();

        console.log("data", data);

        router.push("/");
    }



    return (
        <>
            <Head>
                <title>Add a new Movie</title>
                <meta
                name="description"
                content="Add movies!"
                />
            </Head>
            <MovieForm onAddMovie={addMovieHandler}/>
        </>
    )
}