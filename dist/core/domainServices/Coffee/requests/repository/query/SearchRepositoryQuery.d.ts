import { CoffeeSearchCriteria } from '../../../../../domain/Coffee/CoffeeSearchCriteria.js';

declare class SearchRepositoryQuery {
    readonly sortBy: CoffeeSearchCriteria;
    readonly skip: number;
    readonly take: number;
    constructor(sortBy: CoffeeSearchCriteria, skip: number, take: number);
}

export { SearchRepositoryQuery };