import { useRouter} from "next/router";

export default function JaneIdPage(){

    const router = useRouter();

    const coolId = router.query.coolId;
    return (<>
        <h1>COOL {coolId}</h1>
    </>);
}