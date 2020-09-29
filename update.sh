#!/bin/bash

# 主要功能:
# - 更新代码前备份 config 文件夹
# - 更新代码后还原 config 文件夹
# - 热更新所有代码
# - 项目未启动则自动启动项目
# - 根据更新代码是否包含 package.json 文件, 执行 "npm i" 命令, 并重启服务
#
# 使用的工具:
# npm
# git
# nohup

port=7003
if [[ $1 ]]; then
  dir=$1
else
  dir="/mnt/Projects/assist-server-2.0"
fi
echo "项目路径$dir"
cd $dir

# 备份 config
cp -rf config/. update/back/
# 更新文件
git reset --hard
gitPullOutput=$(expect -c "spawn git pull;expect \"*Username*\" { send \"1179082420@qq.com\n\";exp_continue } \"*Password\" { send \"yang1179082420\n\" };interact")
echo '--------------'
echo "$gitPullOutput"
echo '--------------'
echo "小助服务代码拉取成功!"
# 还原 config
cp -a update/back/. config/

isAlready=$(echo $gitPullOutput | grep "Already up[\s-]to[\s-]date.")
# 是否执行 npm i
isUpdatePackage=$(echo $gitPullOutput | grep "package.json")
isUpdatePackage2=$(echo $gitPullOutput | grep "package-lock.json")
if [[ $isUpdatePackage || $isUpdatePackage2 ]]; then
  echo "更新文件中包含 package.json 或 package-lock.json"
  echo "开始安装 npm 包"
  npm install
  echo "npm 包安装完成"
fi

# 端口进程
# netstat -nlp | grep :7002 | awk '{print $7}' | awk -F"/" '{ print $1 }'
pid=$(netstat -nlp | grep :$port | awk '{print $7}' | awk -F"/" '{ print $1 }')
if [[ "$pid" != "" ]]; then
  echo "项目运行中"
  if [[ $isUpdatePackage || $isUpdatePackage2 ]]; then
    echo "项目开始重启, 请稍后尝试访问"
    # 杀死进程
    kill -9 $pid
    # 重启
    nohup npm run dev >/dev/null 2>&1 &
    exit 0
  elif [[ $isAlready ]]; then
    echo "没有更新文件"
    exit 0
  else
    # 热更新, 不需要操作
    echo "开始热更新, 请稍后尝试访问"
    exit 0
  fi
else
  echo "项目未运行"
  # 启动
  nohup npm run dev >/dev/null 2>&1 &
  echo "项目启动已执行, 请稍后尝试访问"
  exit 0
fi

# 1. 备份 config 文件夹
# 2. 更新代码
# 3. 是否更新了 package.json
#    是: npm i,
# 4. 还原 config 文件夹
# 5. 是否更新了 package.json
#    是: 是否已启动
#        是: 重启服务
#        否: 启动服务
#    否: 热更新
# --------------------------------------
# 1. 将原有配置文件备份到脚本文件夹下
# 2. git更新代码
# 3. npm install
# 4. 将原有配置文件重新覆盖到项目
# 5. 启动项目
# --------------------------------------
