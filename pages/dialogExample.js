import Head from "next/head";
import ExampleDialog from "../components/examples/ExampleDialog";

export default function DialogExample(){
    return(
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browes a huge list of higly active React meals!"
                />
            </Head>
            <ExampleDialog />
        </>
    )
}

