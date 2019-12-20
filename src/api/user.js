import request from '@/utils/request';

export function login(data) {
  return request.post('checklogin', data, {
    isShow: false
  });
}

export function list(data) {
  return request.post('getcontractlist', data);
}

export function contractDetail(c_id) {
  return request.post('getcontractdetailnew', {
    c_id
  });
}
