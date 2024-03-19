import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  no_visitors: sample([1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 5, 8]),
  status: sample(['active', 'deactived']),
  date: sample([
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
  ]),
  Last_in: sample([
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
    '02:03:24',
  ]),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
