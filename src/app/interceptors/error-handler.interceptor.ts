import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(error => {
         // 统一处理错误信息，可以使用项目已有的消息组件抛出错误信息，也可以根据请求的错误码类型做更多的处理，
         console.log(error, '后端接口报错');
         throw error;
    }),
    retry(3)
);
};
