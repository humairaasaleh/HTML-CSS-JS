import { useEffect, useState } from "react";
import axios from 'axios';
import Beer from "./Beer";
import Button from 'react-bootstrap/Button'


const Bar = () => {

    //state for the data we pull from the api
    const [beerData, setBeerData] = useState("");

    //state to check is API has errored
    const [error, setError] = useState(null);

    //state to check is data has loaded
    const [loaded, setLoaded] = useState(false);

    let tempId;

    //useEffect to pull the data
    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers`)
            .then((response) => {
                setBeerData(response.data);
                console.log("===========================");
                console.log(response.data);
                console.log(beerData);
                setLoaded(true)
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
            .then(() => {
                console.log(beerData);
            });
    }, []);

    const getBeerId = (id) => {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => {
                setBeerData(response.data);
                setLoaded(true);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            });

        // axios.post(`https://api.punkapi.com/v2/beers/`,{
        //     name:"beer 1",
        //     description:"lovely"
        // }).then((response)=>{
        //     console.log(response);
        // });
    }



    if (error === true) {
        return <h2>Oops,theres been an error please refresh the page</h2>
    } else if (!loaded) {
        return <h2>Please wait, data is loading</h2>
    } else {
        return (
            <div>
                <h2>Loads if the data is fine</h2>
                <input type="number" name="beerId" onChange={(event) => tempId = (event.target.value)} />
                {/* <button type="button"> Get Beer by Id </button> */}
                <Button variant="primary" size="lg" onClick={() => { getBeerId(tempId) }}>
                    Get Beer by Id
                </Button>
                {beerData.map((beer) => {
                    return <Beer name={beer.name} image={beer.image_url} abv={beer.abv} foodPairing={beer.food_pairing} />
                })};
            </div>
        )
    }
}
export default Bar;