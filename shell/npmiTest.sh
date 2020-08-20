npm install
# netstat -nlp tcp | grep :7002 | awk '{print $7}' | awk -F"/" '{ print $1 }'
pid=$(netstat -nlp tcp | grep :7001 | awk '{print $7}' | awk -F"/" '{ print $1 }')
echo $pid
    kill $pid
nohup npm run dev &
