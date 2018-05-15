export const TITLE_AZ = 'titleaz';
export const TITLE_ZA = 'titleza';
export const SCORE_0N = 'score0n';
export const SCORE_N0 = 'scoren0';

const sortByScore0n = (a, b) => {
  return a.voteScore - b.voteScore;
};

const sortByScoren0 = (a, b) => {
  return b.voteScore - a.voteScore;
};

const sortByTitleAZ = (a, b) => {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

const sortByTitleZA = (a, b) => {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;
};

export const sortTitles = (posts, sortType) => {
  switch (sortType) {
    case TITLE_AZ:
      return posts.sort(sortByTitleAZ);
    case TITLE_ZA:
      return posts.sort(sortByTitleZA);
    case SCORE_0N:
      return posts.sort(sortByScore0n);
    case SCORE_N0:
      return posts.sort(sortByScoren0);
    default:
      return posts
  }
};