import { useRouter } from "next/router";
import Head from "next/head";
import MealDetail from "@/components/meals/MealDetail";

export default function MealDetailPage({ mealData }){

    const router = useRouter();

    console.log("mealData", mealData)

    const mealId = router.query.mealId;

    return (
        <>
            <Head>
                <title>{mealData.name}</title>
                <meta name="description" content={mealData.description} />
            </Head>
            <MealDetail
                key={mealData.id}
                name={mealData.name}
                price={mealData.price}
                description={mealData.description}
            />

        </>
    );
}


// 동적 경로 페이지를 만들어주기 위해 동적인 param 들을 다 paths 프로퍼티로 return 해줌.
export async function getStaticPaths(){

    // 1. meals data 들을 받기 위한 fetch
    const meals = await fetch("https://react-http-e83a8-default-rtdb.firebaseio.com/meals.json");
    const mealsData = await  meals.json();

    const finalIds = [];


    // pre-render 할 Path 를 얻음 (mealsData 를  통해서)
    for(const key in mealsData){
        finalIds.push({
            id: key,
        })
    }

    console.log("finalIds", finalIds);

    return{
        fallback: false,  // 다른 routes 들은 404임을 의미, true 면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
        paths: finalIds.map(finalId=> ({
            params: { mealId: finalId.id } // 오로지 이 path 들만 빌드타임에 프리렌더 함
        }))
    }
}


// 이거 혼자 사용 못하나 -> ㅇㅇ 다이나믹한 페이지에서는 이거 혼자만 하면 안됨; getStaticPaths 함수도 같이 만들어줘야함
export async function getStaticProps(context){
    const response = await fetch("https://react-http-e83a8-default-rtdb.firebaseio.com/meals.json");
    const responseData = await  response.json();
    console.log("getStaticPats💘")
    console.log("responseData", responseData);
    const mealId = context.params.mealId;

    console.log("context.params", context.params); // { mealId: 'm1' }
    console.log("context.req", context.req); //undefined
    console.log("context.res", context.req); //undefined
    const finalMeal = {};

    // 아이디 가져오기
    for(const key in responseData){
        console.log("key", key)
        if(mealId === key){
            console.log("같다");
            finalMeal.id = key;
            finalMeal.name = responseData[key].name;
            finalMeal.price = responseData[key].price;
            finalMeal.description = responseData[key].description;
        }
    }

    console.log("finalMeal", finalMeal)
    return {
        props: { mealData : finalMeal }
    }
}