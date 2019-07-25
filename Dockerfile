FROM node:10.16.0
 
# 作者
MAINTAINER heartrainy
 
# 执行命令，创建文件夹
RUN mkdir -p /home/nodejs/my-koa
 
# 将项目目录拷贝到镜像里
# ADD . /home/nodejs/my-koa
 
# 指定工作目录
WORKDIR /home/nodejs/my-koa
 
# 安装依赖及构建node应用
# RUN npm set registry https://registry.npm.taobao.org/
# RUN npm install pm2 -g
# RUN npm install
# RUN npm build
 
# 配置系统变量，指定端口
# ENV HOST 0.0.0.0
# ENV PORT 3002
 
#对外暴露的端口
EXPOSE 3002
 
#程序启动脚本
CMD ["npm", "start"]