import MealItem from "@/components/meals/MealItem";

const MealList = ({ result }) => {
    return(
        <>
            <h1>Meals</h1>
            { result && result.map(rlt => <MealItem
                key={rlt.id}
                id={rlt.id}
                name={rlt.name}
                price={rlt.price}
                description={rlt.description}/>)
            }
        </>
        )

}

export default MealList;