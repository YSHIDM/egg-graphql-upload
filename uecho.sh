port=7001
if [[ $1 ]]; then
  dir=$1
else
  dir="/Users/lcy/Project/my/egg-graphql-upload/"
fi
echo "项目路径$dir"
cd $dir

# pid=$(netstat -nlp | grep :$port | awk '{print $7}' | awk -F"/" '{ print $1 }')
pid=$(lsof -i:7001 | grep node | awk '{print $2}')
echo "pid: $pid"
