import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './heroes/hero/hero';

@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get('Heroes/PatientInfo')//this.heroesUrl)
            .toPromise()
            .then(/*function (response) {
                var x = Hero[4];
                var foo = SerializationHelper.toInstance(new Hero(), response.json());
                var y = new Hero().deserialize(response.json());

                return x;
            }*/
            response => JSON.parse(response.json()) as Hero[]
        )
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    delete(id: number): Promise<void> {

        var body = 'username=myusername?password=mypassword';
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.get('http://localhost:53638/api/Account/PatientInfo')
            .toPromise()
            .then(
            response => response.json().data as Hero[])
            .catch(this.handleError);
        this.http
            .post('http://localhost:53638/api/Account/Logout',
            body, {
                headers: headers
            });
        /*.subscribe(data => {
            alert('ok');
        }, error => {
            console.log(JSON.stringify(error.json()));
        });*/


        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

class SerializationHelper {
    static toInstance<T>(obj: T, json: string): T {
        var jsonObj = JSON.parse(json);

        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj[propName] = jsonObj[propName]
            }
        }

        return obj;
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/