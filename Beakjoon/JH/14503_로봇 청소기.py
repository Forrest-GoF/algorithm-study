import sys
input = sys.stdin.readline

N, M = map(int, input().split())
x,y,d = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(M)]

dx = [-1,0,1,0]
dy = [0,1,0,-1]
count = 0

while True:
    if graph[x][y] == 0:
        graph[x][y] = 2
        count += 1
    if graph[x][y] == 1:
        break

    for i in range(4):
        d = (d-1)%4
        nx = x+dx[d]
        ny = y+dy[d]

        if graph[nx][ny] == 0:
            x,y = nx, ny
            break
        if i==3:
            x -= dx[d]
            y -= dy[d]

print(count)
