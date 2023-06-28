//但第二天，需求变了，鉴权服务还需要提供一个code参数用来检查用户工号。
// 于AuthService是在UserService内部实例化的，耦合在了一起。所以即使这个参数跟UserService没有任何关系，但也需要改动UserService去适配新的需求。
// 目前的代码设计，我们需要顺着服务依赖的链路，将参数逐层传递，才能够让其正常运行。
export class AuthService {
  permissions: string[];
  code: string;

  constructor(permissions: string[], code: string) {
    this.permissions = permissions;
    this.code = code;
  }

  check(): void { ///todo
    console.log('check if you have permission');

  }
}


// user.service.ts 用户服务
export class UserService {
  private authService: AuthService;

  constructor(permissions: string[], code: string) {
    this.authService = new AuthService(permissions,code);
  }
}

// test.ts
const user = new UserService(['read', 'write'],'ZZ0001');
