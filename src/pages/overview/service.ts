import request from '@/utils/request';
import type { TableListParams, TableListItem } from './data.d';

export async function queryPvCount(params?: TableListParams) {
  return request('/api/v1/customerPV', {
    method: 'GET',
    data: {
      ...params
    },
  });
}


export async function queryBehavior(params?: TableListParams) {
  return request('/api/v1/behaviorInfo', {
    method: 'GET',
    data: {
      ...params
    },
  });
}

export async function queryCount(params?: TableListParams) {
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

export async function queryDay(params?: TableListParams) {
  return request('/api/v1/customerPVCountDay', {
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
