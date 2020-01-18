import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    protected localStorage = localStorage;

    constructor() {
    }

    // Gets an item from local storage
    get(key: string): JSON | null {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    // Updates an item in local storage
    set(key: string, data: any): void {
        this.localStorage.setItem(key, JSON.stringify(data));
    }

    // Sets an item in local storage
    remove(key: string): void {
        this.localStorage.removeItem(key);
    }
}

