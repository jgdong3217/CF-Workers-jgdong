
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'jgdong'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
//https://vps.3217000.xyz/jgdong
vless://9ef72714-121e-47c4-a94b-487b65a2a005@ky01.fjsedf6523.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky01.fjsedf6523#ky01
vless://5bf6ca4d-786c-4dc2-8f5f-0ea46a6ffbf4@ky12.nefe512.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky12.nefe512#ky12
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRFx1MzAxMFx1NTM5Rlx1NzUxRmlwXHUzMDExLVx1NTVFOFx1OTE2NVx1NEUwMFx1NjQxQy0xMi4yOSIsDQogICJhZGQiOiAiMTU0LjcuMTc5LjE5NCIsDQogICJwb3J0IjogIjEyNDg3IiwNCiAgImlkIjogIjE5YzAzOGQwLTUwYTctNDY5My05OTM5LWNjNjc5M2E2NGVkZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRC1RLTgvMTdcdTUyMzBcdTY3MUYiLA0KICAiYWRkIjogIjE1NC45LjI1MS4xODYiLA0KICAicG9ydCI6ICIyMDgwNSIsDQogICJpZCI6ICJiMjc5NzQ4ZC0wMWIyLTQwZTItZjFhNy01NzhlNjFjNThjNDciLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNDUuNTkuMTg0LjgwIiwNCiAgInBvcnQiOiAiMTgzNjIiLA0KICAiaWQiOiAiYzcwZWJlN2YtNjlmOC00MjFhLWI4MmItOTNlZDc0OWIzOWU2IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvZWRzIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiMjMuMTY2LjE2OC45MyIsDQogICJwb3J0IjogIjIxMDYyIiwNCiAgImlkIjogIjI5NzUxOTRkLTNkY2ItNGIxOC1iYTZkLTViYTVjOWRkM2M4OSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://a4ceb71e-3eef-474c-f467-d09b69327e40@urhsxfsf.tkpretty.com:59879?encryption=none&security=tls&type=ws&path=%2Fi7e5urthd
vless://6769839e-af1b-405a-bc1e-fed9e044f219@38.47.118.133:50075?encryption=none&security=none&type=tcp&headerType=none
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjcuMjQtMTMiLA0KICAiYWRkIjogIjY1Ljc1LjE5NS43NCIsDQogICJwb3J0IjogIjUxMzQyIiwNCiAgImlkIjogIjI3YjcxMjMyLTUxN2UtNDVmNi1mZTAxLTQ1YjJiMmViZmRmYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkQ0Qlx1OEJENSIsDQogICJhZGQiOiAiMTM2LjE3NS4xNzkuNTciLA0KICAicG9ydCI6ICI0NTk3OSIsDQogICJpZCI6ICIyM2JkZjZkZi1jNDgyLTQ2ZDAtYzBmNC01YTk4ZDUzNGVhMTEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi90ZXN0IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://d958eee1-fa7c-4780-97b4-673079733a1c@kjhdfiuydff.tkpretty.com:45575?encryption=none&security=tls&type=ws&path=%2F9875e6rthyg
vless://ea3113d1-43d4-42a1-8030-967d4411677d@38.47.119.27:38570?encryption=none&security=none&type=tcp&headerType=none
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiMzguNDcuMTE4LjEzMyIsDQogICJwb3J0IjogIjIxNjM5IiwNCiAgImlkIjogIjBiMWU4MjkwLWM0NjQtNGUzMC1lOWE0LWUyNmQ4Mjg3ZWZlYSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLzBiMWU4MjkwLWM0NjQtNGUzIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjcuMjQtMTQiLA0KICAiYWRkIjogIjEzNi4xNzUuMTc2LjY2IiwNCiAgInBvcnQiOiAiMjQ5MDAiLA0KICAiaWQiOiAiOWM5N2IyOWUtYmJkYi00NGQyLWE0YWMtNmM5MzQwMWI4ZWU5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNjUuNzUuMTkyLjg1IiwNCiAgInBvcnQiOiAiMzEyNzUiLA0KICAiaWQiOiAiZGQzOTNhODctNjM5Yi00MGNjLTlhZTQtOTVkYTE5ODNmZTQ5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
ss://YWVzLTI1Ni1nY206MTIzNDU2@35.229.229.186:22223
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNjUuNzUuMTk1LjY1IiwNCiAgInBvcnQiOiAiNTQ2NzYiLA0KICAiaWQiOiAiY2NlYjM0MGQtM2RjMS00Njg2LWFkNGMtN2ZjNjFhM2YwNTc5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkwtMDMwNC0zMyIsDQogICJhZGQiOiAiTC0wMzA0LTMzLm5uYW90ZXhpb25nZGl0a2dyb3VwLnRvcCIsDQogICJwb3J0IjogIjIwNTMiLA0KICAiaWQiOiAiMzM2MTczMDAtZDZkZC00MTlmLTgxYWQtYzM3ZjY4NjkwNTBjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvTC0wMzA0LTMzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
ss://YWVzLTI1Ni1nY206MTIzNDU2@35.234.17.42:33338
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkwtMDMwNC0xMiIsDQogICJhZGQiOiAiTC0wMzA0LTEyLm5uYW90ZXhpb25nZGl0a2dyb3VwLnRvcCIsDQogICJwb3J0IjogIjIwNTMiLA0KICAiaWQiOiAiNDA3YmY3NDgtNmYxMS00YWM2LWUwY2ItZmEzMzJjMDI0NTg4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvTC0wMzA0LTEyIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkpKLTAzMDYtMyIsDQogICJhZGQiOiAiSkotMDMwNi0zLm5uYW90ZXhpb25nZGl0a2dyb3VwLnRvcCIsDQogICJwb3J0IjogIjIwNTMiLA0KICAiaWQiOiAiYTdmMjQxNzgtNTk5MC00MjQ1LWU4NTItYWFiZjg0ZDBkY2ZhIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvSkotMDMwNi0zIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImpwMnx1aFFULmxvdmVAeHJheS5jb20tY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogInZpc2EuY24iLA0KICAicG9ydCI6ICIyMDUyIiwNCiAgImlkIjogImQxYmVjODE1LWE0YmMtNDg1Mi1hMTRjLTc4MGEwMjZmOGNmOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAianAyLjMyMTcwMDAueHl6IiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNjUuNzUuMTkyLjEwNSIsDQogICJwb3J0IjogIjQ1NzA0IiwNCiAgImlkIjogImQ2MjVkZTY0LWM5M2UtNDJhOS1kMTk2LWJjMThhNzkxN2Q4OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2RkZSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzX2NuMl9naWEiLA0KICAiYWRkIjogIjE1NC4yMS44My4xNDYiLA0KICAicG9ydCI6ICI1MjA1MiIsDQogICJpZCI6ICJiODE2N2E0YS1lY2Q0LTRmODQtYWQwOC1kYzM4ZTliMmYzMTIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi9hYmMiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
ss://YWVzLTI1Ni1nY206MTIzNDU2@35.234.17.42:22223
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzX2NuMl9naWEiLA0KICAiYWRkIjogIjE1NC4yMS44My4xNDYiLA0KICAicG9ydCI6ICI1NDA0MSIsDQogICJpZCI6ICJiYzdhNTZkNy1hNDA1LTQyNTUtY2FiMi05M2YzYzAxNWZlODEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi9hYmMiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NTNGMFx1NkU3RVx1MjQ2MVx1NEUwMFx1NEYxOFx1NTMxNiIsDQogICJhZGQiOiAieWh5aHloLjJyLm5ldC5jbiIsDQogICJwb3J0IjogIjE4ODUwIiwNCiAgImlkIjogImMzMzFjNzI3LWMwOTMtMzk2Yy04NGYzLWU4NTRmZTMzZTE0ZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNDUuNTkuMTg0LjIxIiwNCiAgInBvcnQiOiAiMjAzMTYiLA0KICAiaWQiOiAiYmUyODQ0YjEtZmFjYy00MTlmLWNkYTItOWNmNzVkYTVkNjY3IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvaGt5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NjVFNVx1NjcyQ1x1MjQ2Mlx1NEUwMFx1NEYxOFx1NTMxNiIsDQogICJhZGQiOiAieWh5aHloLjJyLm5ldC5jbiIsDQogICJwb3J0IjogIjE4ODEyIiwNCiAgImlkIjogImMzMzFjNzI3LWMwOTMtMzk2Yy04NGYzLWU4NTRmZTMzZTE0ZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkwtMDMwNC01IiwNCiAgImFkZCI6ICJMLTAzMDQtNS5ubmFvdGV4aW9uZ2RpdGtncm91cC50b3AiLA0KICAicG9ydCI6ICIyMDUzIiwNCiAgImlkIjogImI4ZDBhODk3LTUzYjAtNDZhYi1hMTI5LTY0YjhmNjE3NGQwMiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL0wtMDMwNC01IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImpwMnx1aFFULmxvdmVAeHJheS5jb20iLA0KICAiYWRkIjogIjQ1LjEzMS41Ljg0IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZDFiZWM4MTUtYTRiYy00ODUyLWExNGMtNzgwYTAyNmY4Y2Y5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJqcDIuMzIxNzAwMC54eXoiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjcuMjQtMTgiLA0KICAiYWRkIjogIjQ1LjU5LjE4NS4xMDciLA0KICAicG9ydCI6ICIyMTk3NiIsDQogICJpZCI6ICI2MTRiNzJiZi0zZDg5LTRhYWQtODBlYy1jYjcxZTQ5OGRhZjEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiNjUuNzUuMTkyLjUxIiwNCiAgInBvcnQiOiAiMzAyMjUiLA0KICAiaWQiOiAiNGRmOGQyZWItNmVjNS00M2FkLWZhNzAtNWI4YjNiNDczYzZmIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjcuMjQtMTciLA0KICAiYWRkIjogIjQ1LjU5LjE4NC4yOCIsDQogICJwb3J0IjogIjEwOTI3IiwNCiAgImlkIjogIjU2NmUwYjM0LTg3OTgtNDMyOC1mNjJkLTMzNzg4YzNlNTEzNyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiMTM2LjE3NS4xNzYuMjciLA0KICAicG9ydCI6ICI0MzY4MCIsDQogICJpZCI6ICIyMWMwMWViOC1hNmMyLTRiMTItOGYyNi1jMDNhMmM2MmI1YjQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjcuMjQtMjEiLA0KICAiYWRkIjogIjE3NC4xMzYuMjA1LjEyNCIsDQogICJwb3J0IjogIjI1NDE0IiwNCiAgImlkIjogIjM2YjQ2NDk0LWE3MDAtNDc0Ny1kMjAxLWFjNGIyYmQ1ZGM2NiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkQ0Qlx1OEJENSIsDQogICJhZGQiOiAiNjUuNzUuMTk0LjE2IiwNCiAgInBvcnQiOiAiNDU5NzkiLA0KICAiaWQiOiAiMjNiZGY2ZGYtYzQ4Mi00NmQwLWMwZjQtNWE5OGQ1MzRlYTExIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvdGVzdCIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiMTM2LjE3NS4xNzguNzIiLA0KICAicG9ydCI6ICI0MDM5NyIsDQogICJpZCI6ICJjYjAzMTE2Zi02MjliLTRmNDctODdkMC1lYzhhYjMxMmJjNmUiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=

`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
