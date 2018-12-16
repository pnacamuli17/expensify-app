/* eslint-disable */

import { login, logout } from '../../actions/auth';

test('should generate log in action object', () => {
  const uid = 'abc123';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOG_IN',
    uid,
  });
});

test('should generate log out action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOG_OUT',
  });
});
