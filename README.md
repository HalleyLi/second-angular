# node环境测试​
  node –v​
  npm –v​
​
# 安装Angular脚手架​
npm install -g @angular/cli  // 装的是最新的版本​
npm install -g @angular/cli@xx.xx.x // 也可以安装指定版本​
ng v  // 验证是否安装成功​

# 创建一个项目并执行​

ng new project_name  --standalone // project_name用户可以自定义项目名​
cd project_name​
npm start​
url: http://localhost:4200 便可看到相关页面

# DI
- add logger.service.ts
- add in providers
- add in constructure of app.service.ts


# HttpClient
- provideHttpClient()  in AppModule
- proxy.conf.json.
```javascript
  getBwics() {
    const httpOptions = {
      headers: new HttpHeaders({
        // get from ebidding UI header temporarily
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVFJBREVSIiwibmFtZSI6IjEyMzQ1NiIsImV4cCI6MTY4NzQ5MTE0OCwidXNlcklkIjoidGVzdC10cmFkZXIifQ.qpXvzorU0gJ5LYhu4VQj4ZWNj9ktQI3Naexc_-ap1EfpFW-1onkezdOWAJAA08XSkSVL8IVNM4DNQUJsibuZSQ'
      })
    };
    this.http.get('/api/v1/bwic/bwic-bid-details',httpOptions).subscribe(data => {
      console.log(data);
    });
  }
```
