import JaneIdPage from "@/pages/meal/[mealId]";
import Head from "next/head";
import MealList from "@/components/meals/MealList";


export default function MealsPage({ result }){

    return (
            <>
                <Head>
                    <title>React Meetups</title>
                    <meta
                        name="description"
                        content="Browes a huge list of higly active React meals!"
                    />
                </Head>
                <MealList result={result}/>
            </>
    )
}

/*
    1. SSR 페이지에서 *초기 데이터를 로드하려면 getServerSideProps 함수를 정의하여 페이지 컴포넌트의 Props 로 주입받을 수 있다.
    2. 페이지에서 getServerSideProps 함수를 export 하는 경우
       Next.js 는 getServerSideProps 가 반환하는 데이터를 사용하여 페이지를 pre-render 한다. Next.js 가 이 함수를 찾음
    3. 이때 함수는 페이지 요청마다 실행되고 함수가 반환하는 데이터는 페이지 컴포넌트의 props 로 전달된다.
    4. 서버측에서만 실행되며 브라우저에는 실행되지 않는다.
    5. 클라이언트 사이드에서 로딩 페이지를 보여주지 않고,
       데이터가 로드 되었을 시 한 번에 완전한 페이지를 보여주려고 할 때 getServerSideProps() 기능을 사용한다.
    6. 장단점 : 사용자가 내용 없는 레이아웃을 보면서 데이터를 기다릴 필요가 없는 장점, 데이터 베이스 등 데이터 제공하는 과정에서 에러가 발생했을 시 아무런 페이지를 보여주지 않음.
*/
export async function getServerSideProps(context) {

    const response = await fetch("https://react-http-e83a8-default-rtdb.firebaseio.com/meals.json");
    const responseData = await  response.json();
    console.log("getServerSideProps💘")
    console.log("responseData", responseData);

    console.log("====여기는 meals 목록 페이지====");
    console.log("context 역대급", context);
    console.log("context.req", context.req);
    console.log("context.res!!", context.req);

    const finalMeals = [];

    for(const key in responseData){
        finalMeals.push({
            id: key,
            name: responseData[key].name,
            price: responseData[key].price,
            description: responseData[key].description
        })
    }
    return { props :  { result: finalMeals }  }
}


