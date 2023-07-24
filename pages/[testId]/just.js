import {useRouter} from "next/router";

export default function Just(){


    const router = useRouter();

    const testId = router.query.testId;

    return <><h1>Just : {testId}</h1></>
}