import { Injectable } from '@nestjs/common';

import { User } from 'src/api/user/model';
import { Movie } from 'src/api/movie/model';

import { SearchInput } from 'src/shared/util';

/*
  These values are selected based on the prisma fullTextSearch in user table
  @@fulltext([username, email, firstName, lastName])
*/
const USER_SEARCH_FIELDS: Array<keyof User> = [
  'username',
  'email',
  'firstName',
  'lastName',
];
const MOVIE_SEARCH_FIELDS: Array<keyof Movie> = ['name'];

@Injectable()
export class FilterService {
  private applyContainsFilter(obj: any) {
    for (const i in obj) {
      if (typeof obj[i] === 'object') {
        obj[i] = this.applyContainsFilter(obj[i]);
      } else {
        obj[i] = {
          contains: obj[i],
        };
      }
    }

    return obj;
  }

  public getWhereFormat<T>(where: T) {
    return this.applyContainsFilter({ ...where });
  }

  public getSearchFilter<T>(fields: Array<keyof T>, searchBy: SearchInput) {
    const { value: search } = searchBy || {};

    return search
      ? fields.reduce(
          (filter, key) => ({
            ...filter,
            [key]: {
              search,
            },
          }),
          {},
        )
      : undefined;
  }

  public getUserSearchFilter(searchBy: SearchInput) {
    return this.getSearchFilter(USER_SEARCH_FIELDS, searchBy);
  }

  public getMovieSearchFilter(searchBy: SearchInput) {
    return this.getSearchFilter(MOVIE_SEARCH_FIELDS, searchBy);
  }
}
