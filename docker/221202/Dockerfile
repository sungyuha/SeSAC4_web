# FROM mysql

# ENV MYSQL_ROOT_PASSWORD=1234

# EXPOSE 3309

FROM node:16
# 작업 디렉토리
WORKDIR /app

# 소스코드 추가 -> 현재 위치의 파일 / 컨테이너가 파일을 가져옴
COPY . /app

# 명령어를 실행 / node 시작 전 패키지 설치 명령어
RUN npm install

# 포트
EXPOSE 8000

# 컨테이너를 중지시키거나 새로 작업 할 때
CMD [ "node", "index.js" ]