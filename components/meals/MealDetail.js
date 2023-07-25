const MealDetail = (props) => {
    return (
        <section>
            <h1>{props.id}</h1>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </section>
    );
}

export default MealDetail;