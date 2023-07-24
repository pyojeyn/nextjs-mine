import {useRouter} from "next/router";

export default function HotIdPage(){

    const router = useRouter();

    const hotId = router.query.hotId;


    return <><h1>HotIDPage : {hotId} </h1></>
}