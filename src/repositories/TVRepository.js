
export default class TVRepository{
    
    constructor(props) {        
        this._apiSettings = {
            apiEndpoint : "http://api.themoviedb.org",
            headers : new Headers({
                "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmRkM2M3Y2QzYjFhMGQyMzdmNTk4NmU1NDE4ZTRlYiIsInN1YiI6IjViZDE3OTRjMGUwYTI2NjE4ZDAwODU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IfTCDnTjnl4E05v9WaVVpmBZP0W9rdHKzUx3BNNMue0"
            }),
            apiKeyV3 : "2bdd3c7cd3b1a0d237f5986e5418e4eb",
            apiMethods : {
                search : "/3/search/tv?api_key=2bdd3c7cd3b1a0d237f5986e5418e4eb&language=en-US&page=1&include_adult=false&year=2018&primary_release_year=2018&page=1&query="
            }
        }
    }

    search(searchTerm){
        let apiSettings = this._apiSettings;
        //TO DO: dinamicaly building up the URL instead of the predefined URL which is getting results for the first page only
        let url = apiSettings.apiEndpoint + apiSettings.apiMethods.search + searchTerm;

        return fetch(url); /* demonstrating that implicitly the default is GET, see other fetch in this repo ub which I'm explicitly passing the method type */
    }

    getTVShow(tvId){
        let apiSettings = this._apiSettings;
        let url = `${apiSettings.apiEndpoint}/3/tv/${tvId}?api_key=${apiSettings.apiKeyV3}&language=en-US`;

        return fetch(url, { method: 'get' });
    }

    getSeason(tvId,season_number){
        let apiSettings = this._apiSettings;
        let url = `${apiSettings.apiEndpoint}/3/tv/${tvId}/season/${season_number}?api_key=${apiSettings.apiKeyV3}&language=en-US`;

        return fetch(url);
    }
}