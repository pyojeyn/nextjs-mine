import {useRouter} from "next/router";

export default function Test(){


    const router = useRouter();

    const testId = router.query.testId;

    return <><h1>Test : {testId}</h1></>
}