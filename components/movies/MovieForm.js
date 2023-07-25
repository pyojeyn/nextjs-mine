import { useRef } from 'react';

const NewMeetupForm = (props) => {

    const openingTextInputRef = useRef();
    const releaseDateInputRef = useRef();
    const titleInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredOpeningText = openingTextInputRef.current.value;
        const enteredReleaseDate = releaseDateInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;

        const movieData = {
            openingText: enteredOpeningText,
            releaseDate: enteredReleaseDate,
            title: enteredTitle
        }

        console.log("submitHandler")
        props.onAddMovie(movieData);
    }

    // form 양식에 대해 공부 ..
    // action , method, label, input, button
    // input 속성 : required, type, minLength, maxLength
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="openingText"></label>
                <input
                    type="text"
                    id="openingText"
                    name="openingText"
                    required
                    minLength="4"
                    maxLength="7"
                    ref={openingTextInputRef}
                />

                <label htmlFor="releaseDate"></label>
                <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    required
                    ref={releaseDateInputRef}
                />

                <label htmlFor="title"></label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    minLength="6"
                    maxLength="7"
                    ref={titleInputRef}
                />
                <button>Add Movie</button>
            </form>
        </>
    )
}

export default NewMeetupForm;