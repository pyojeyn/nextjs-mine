import { useRouter } from 'next/router';

const MealItem = ({id, name, price, description}) => {
    const router = useRouter();

    return (
        <>
            <p>id : {id}</p>
            <p>name : {name}</p>
            <p>price : {price}</p>
            <p>description : {description}</p>
            <button onClick={() => router.push(`/meal/${id}`)}>SHOW DETAIL</button>
            <br/>
            <br/>
        </>
    )
}

export default MealItem;