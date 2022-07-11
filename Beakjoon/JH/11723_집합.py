import sys
input = sys.stdin.readline

M = int(input())
bitmap = [False]*(21)

for i in range(M):
    operation = input().split()

    if operation[0] == 'all':
        bitmap = [True]*(21)
        continue
    if operation[0] == 'empty':
        bitmap = [False]*(21)
        continue

    value = int(operation[1])
    if operation[0] == 'add':
        bitmap[value] = True
    elif operation[0] == 'remove':
        bitmap[value] = False
    elif operation[0] == 'check':
        print(int(bitmap[value]))
    elif operation[0] == 'toggle':
        bitmap[value] = not bitmap[value]