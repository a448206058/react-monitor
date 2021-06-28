import { extend } from 'umi-request';
import { notification } from 'antd';
// import router from 'umi/router';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {

  const { response } = error;
  console.log(response)
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use(async (url, options) => {  // 此处为拦截器，每次发送请求之前判断能否取到token

  // if (sessionStorage.getItem('token')) {
  //   const headers = {
  //     'token': sessionStorage.getItem('token'),
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
  //   };
  //   url = 'http://112.124.36.170:8009'+url;
  //   // console.log(url)
  //   return {
  //     url,
  //     options: { ...options, headers },
  //   };
  // } else {
  //   if(url != '/api/User/Login'){
  //     window.location.href = "/user/login";
  //   }
  //   url = 'http://112.124.36.170:8009'+url;
  //   // console.log(url)
  //   return {
  //     url,
  //     options: { ...options },
  //   };
  //   // router.push('/user/login');
  // }

  console.log(url)

  url = 'http://112.124.36.170:8009'+url;
    // console.log(url)
    return {
      url,
      options: { ...options },
    };
});

// request.interceptors.response.use(async (url, options) => {  // 此处为拦截器，每次发送请求之前判断能否取到token
//   console.log(url)
//   console.log(options)
// });

export default request;
