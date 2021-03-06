import request from '@/utils/request';
import type { TableListParams, TableListItem, QueryParam } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/v1/project/list', {
    params,
  });
}

export async function removeProject(params: { key: number[] }) {
  console.log({...params})
  return request('/api/v1/project/delete', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function queryCount(params?: QueryParam) {
  return request('/api/v1/customerPVCount', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function queryAlive(params?: TableListParams) {
  return request('/api/v1/customerPVActive', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function queryNew(params?: TableListParams) {
  return request('/api/v1/customerPVNew', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function queryOld(params?: TableListParams) {
  return request('/api/v1/customerPVOld', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function queryLoad(params?: TableListParams) {
  return request('/api/v1/loadPage', {
    params,
  });
}

export async function queryJsError(params?: TableListParams) {
  return request('/api/v1/javascriptErrorInfo', {
    params,
  });
}

export async function queryHttp(params?: TableListParams) {
  return request('/api/v1/getHttpLogInfoList', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
