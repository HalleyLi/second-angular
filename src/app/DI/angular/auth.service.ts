import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  permissions: string[] | null = null;
  code: string | null = null;

  constructor() { }

  setAuth(permissions: string[], code: string) {
    this.permissions = permissions;
    this.code = code;
  }

  setPermission(permissions: string[]) {
    this.permissions = permissions;
  }

  setCode(code: string) {
    this.code = code;
  }

  check(): void { ///todo
    if (this.permissions && this.code)
    {
      console.log('check if you have permission');
    }

  }
}
