export default class Movie {
  constructor(
    public title: string, 
    public poster_path: string,
    public homepage: string, 
    public id: number,
    public original_title: string, 
    public overview: string,
    public production_companies: string, 
    public release_date: string,
    public vote_average: number
  ) {}
}