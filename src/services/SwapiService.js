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
       return response.results.map(this._transformPersonData);
     }
  
      async getPerson (id) {
        const response = await this.getData(`/people/${id}/`);
        return this._transformPersonData(response);
     }
  
     async getAllPlanets () {
      const response  = await this.getData(`/planets/`);
      return response.results.map(this._transformPlanetData);
    }
  
     async getPlanet (id) {
      const response = await this.getData(`/planets/${id}/`);
      return this._transformPlanetData(response);
    }
  
    async getAllStarships () {
      const response  = await this.getData(`/starships/`);
      return response.results.map(this._transformStarshipData);
    }
  
     async getStarship (id) {
       const response = await this.getData(`/starships/${id}/`);
       return this._transformStarshipData(response);
    }

    _extractId (item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanetData = (planet) => {
      return {
        id : this._extractId (planet),
        name : planet.name,
        population : planet.population,
        rotationPeriod : planet.rotation_period,
        diameter : planet.diameter
      }
    }

    _transformStarshipData = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    }

    _transformPersonData = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }
  }