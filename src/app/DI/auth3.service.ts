// 在一定程度上完成了解耦。不用在其中一个服务改动的时候，还需要改动其他的服务了。
// 控制反转的思想应运而生。
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

  constructor(authService: AuthService) {
    this.authService = authService;
  }
}

// test.ts
const auth = new AuthService(['read', 'write'],'ZZ0001');
const user = new UserService(auth);
