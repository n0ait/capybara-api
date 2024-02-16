docker build -t nest-prisma-server .
docker run -d -t -p 8888:8888 nest-prisma-server