interface Serializable<T> {
    deserialize(input: Object): T;
}

export interface IHero {
    id: number;
    name: string;
}

export class Hero implements IHero, Serializable<Hero> {
    constructor(public id?: number, public name?: string) {
    }

    deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        return this;
    }
}