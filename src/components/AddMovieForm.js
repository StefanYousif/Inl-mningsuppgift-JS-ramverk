import React, {useState} from "react";

function AddMovieForm({addMovie}) {
    const[title, setTitle] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title === "" && rating === 0) {
            alert("Du måste ange en titel och ett betyg för att spara filmen");
            return;
        }
        if (title === "") {
            alert("Vänligen ange titel");
            return;
        }
        if (rating === 0) {
            alert("Vänligen ange betyg");
            return;
        }

        addMovie(title, rating);
        setTitle("");
        setRating(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>

                <label htmlFor="title-field"></label>
                <input type="text" id="title-field" className="form-control" value={title} placeholder="Filmtitel..." onChange={(e) => setTitle(e.target.value)} />
                
                <label htmlFor="rating-field">Betyg:</label>
                <select id="rating-field" className="form-control" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>
            
            </fieldset>
        </form>
    )
}

export default AddMovieForm;