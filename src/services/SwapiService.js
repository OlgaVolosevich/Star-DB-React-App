export default class SwapiService {

    _apiBase ='https://swapi.co/api';
      async getData (url) {
      const response = await fetch(`${this._apiBase}${url}`);
  
      if (response.status !== 200) {
        throw new Error(`Couldn't fetch data from url: ${this._apiBase}; Status of response is ${response.status}`);
      }
      const result = await response.json();
      return result;
     }
  
     async getAllPeople () {
       const response  = await this.getData(`/people/`);
       return response.results;
     }
  
      getPerson (id) {
        return this.getData(`/people/${id}/`);
     }
  
     async getAllPlanets () {
      const response  = await this.getData(`/planets/`);
      return response.results;
    }
  
     getPlanet (id) {
       return this.getData(`/planets/${id}/`);
    }
  
    async getAllStarships () {
      const response  = await this.getData(`/starships/`);
      return response.results;
    }
  
     getStarship (id) {
       return this.getData(`/starships/${id}/`);
    }
  }