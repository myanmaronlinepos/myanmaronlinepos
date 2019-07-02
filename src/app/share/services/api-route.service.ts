import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class ApiRouteService {
  constructor() {}
  baseUrl=environment.baseUrl;
  createCompleteApiRoute(apiUrl: string) {
    return `${this.baseUrl}/${apiUrl}`;
  }
}
