# `passport.js` MAC 구동 팁

`MySQL` 5.7 버전은 Apple Silicon(ARM)기반 프로세서에서 작동하지 않습니다.
Apple Silicon(ARM)은 `MySQL` 8.0 버전 이상을 이용해야 하며, 이번 과제에서는 `MySQL:lts` 버전을 사용했습니다.

이외에 WSL 설정은 MAC환경에서 필요하지 않기에 적용하지 않고, 일반적인 로컬 터미널 환경에서 작업했습니다.

### 코드
```
docker run -d -it --name my-mysql -v ~/mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -p 3307:3306 mysql:lts
```
