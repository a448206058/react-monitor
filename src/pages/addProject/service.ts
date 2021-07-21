import request from '@/utils/request';
import type { TableListParams, TableListItem } from './data.d';

export async function addRule(params: TableListItem) {
  return request('/api/v1/project', {
    method: 'POST',
    data: {
      ...params
    },
  });
}
