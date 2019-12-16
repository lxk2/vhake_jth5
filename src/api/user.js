import request from '@/utils/request';

export function login(data) {
  return request.post('', data);
}

export function getInfo() {
  return request.post('');
}

export function logOut() {
  return request.post('');
}
