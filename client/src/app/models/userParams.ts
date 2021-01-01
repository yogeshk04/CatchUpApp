import { User } from './user';

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 65;
    pageNumber = 1;
    pageSize = 4;
    orderBy = 'lastActive';

    constructor(user: User) {
        this.gender = user.gender === 'female' ? 'male' : 'male'
    }
}