import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class MenuService{

  constructor(private http : Http){}
  /*
  getMenu(){
    return this.http.get("http://")
      .map((res: Response ) => res.json().data);
  }
  */
}
