export class AuthService {
    permissions: string[];

    constructor(permissions: string[]) {
      this.permissions = permissions;
    }

    check(): void { ///todo
        console.log('check if you have permission');
        
     }
}


// user.service.ts 用户服务
export class UserService {
    private authService: AuthService;

    constructor(permissions: string[]) {
      this.authService = new AuthService(permissions);
    }
}

// test.ts
const user = new UserService(['read', 'write']);
