
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'jgdong'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
//https://vps.3217000.xyz/jgdong1
vless://7c317161-5cf8-4cbc-811a-d1297c41bb23@152.67.68.116:443?encryption=none&flow=xtls-rprx-vision-udp443&security=tls&sni=yapc-1.afshin.ir&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A8%F0%9F%87%AD%E7%91%9E%E5%A3%AB1%20%7C%20%E2%AC%87%EF%B8%8F%207.3MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@gysz0000.dynu.net:23657?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%20%7C%20%E2%AC%87%EF%B8%8F%202.5MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:41279?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%20%7C%20%E2%AC%87%EF%B8%8F%204.5MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:54220?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%20%7C%20%E2%AC%87%EF%B8%8F%208.2MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:35853?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%20%7C%20%E2%AC%87%EF%B8%8F%202.2MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@gysz0000.dynu.net:45883?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF3%20%7C%20%E2%AC%87%EF%B8%8F%2010.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@agaungzhou01.bumbleshrimp.com:31800?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF4%20%7C%20%E2%AC%87%EF%B8%8F%202.3MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@beiyong.dynuddns.net:12597?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF4%20%7C%20%E2%AC%87%EF%B8%8F%202.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:13989?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC1%20%7C%20%E2%AC%87%EF%B8%8F%203.6MB%2Fs
vless://2a219df1-a04b-4424-bfd2-cb37aeb10b2c@netherlanddddd.mehrdadsadaf.com:7594?encryption=none&security=reality&sni=dash.cloudflare.com&fp=chrome&pbk=AZSptdvlWvvmKWEDTY56UsIcnTP8nGCafvPEQOozrxw&sid=765e8e700426816c&type=grpc&authority=&serviceName=7594vless&mode=gun#%F0%9F%87%B3%F0%9F%87%B1%E8%8D%B7%E5%85%B05%20%7C%20%E2%AC%87%EF%B8%8F%204.7MB%2Fs
hysteria2://dongtaiwang.com@46.17.41.5:12904?sni=apple.com&insecure=1#%F0%9F%87%B7%F0%9F%87%BA%E4%BF%84%E7%BD%97%E6%96%AF1%20%7C%20%E2%AC%87%EF%B8%8F%2010.3MB%2Fs
hysteria2://dongtaiwang.com@hy2.694463.xyz:10011?sni=www.bing.com&insecure=1#%F0%9F%87%B7%F0%9F%87%BA%E4%BF%84%E7%BD%97%E6%96%AF1%20%7C%20%E2%AC%87%EF%B8%8F%203.7MB%2Fs
trojan://6cfb3bf0-1083-4675-9fa0-879b88fabfb4@58.254.186.231:42881?security=tls&sni=q08m.vgraxiw73s.hasyaf.cn&fp=chrome&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A14%20%7C%20%E2%AC%87%EF%B8%8F%207.9MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@gysz0000.dynu.net:15823?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE1%20%7C%20%E2%AC%87%EF%B8%8F%2011.2MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@gysz0000.dynu.net:12477?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE1%20%7C%20%E2%AC%87%EF%B8%8F%205.1MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:15823?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE2%20%7C%20%E2%AC%87%EF%B8%8F%204.5MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@shenzhou02.mysynology.net:38400?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%A6%E4%B9%8C%E5%85%8B%E5%85%B01%20%7C%20%E2%AC%87%EF%B8%8F%202.6MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@shenzhou02.mysynology.net:33048?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%A6%E4%B9%8C%E5%85%8B%E5%85%B02%20%7C%20%E2%AC%87%EF%B8%8F%207.1MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@shenyang001.dynu.net:29023?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.amazon.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%203.4MB%2Fs
hysteria2://b72ba5d5-2d5e-45b7-93b5-236d343baa7c@64.181.204.186:47262?sni=www.bing.com&insecure=1#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD15%20%7C%20%E2%AC%87%EF%B8%8F%207.7MB%2Fs
hysteria2://203d1d64-3313-11ed-bb74-f23c9164ca5d@0e1462f1-sum4g0-t8ro7t-1ey07.hy2.gotochinatown.net:8443?sni=0e1462f1-sum4g0-t8ro7t-1ey07.hy2.gotochinatown.net&insecure=0#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD16%20%7C%20%E2%AC%87%EF%B8%8F%202.3MB%2Fs
hysteria2://8de795d2-a06f-11ed-8edf-f23c913c8d2b@bec3dd81-suk9s0-sxv16d-1k09w.hy2.gotochinatown.net:8443?sni=bec3dd81-suk9s0-sxv16d-1k09w.hy2.gotochinatown.net&insecure=0#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD17%20%7C%20%E2%AC%87%EF%B8%8F%202.6MB%2Fs
hysteria2://cf4a1644-5847-11ef-bc74-f23c91cfbbc9@c6d7d2f2-suz340-t5tz5s-1onbp.hy2.gotochinatown.net:8443?sni=c6d7d2f2-suz340-t5tz5s-1onbp.hy2.gotochinatown.net&insecure=0#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD18%20%7C%20%E2%AC%87%EF%B8%8F%202.4MB%2Fs
hysteria2://088a0bbe-4f9f-11ea-a15d-f23c913c8d2b@b6ea3219-supts0-swbd0b-716s.hy2.gotochinatown.net:8443?sni=b6ea3219-supts0-swbd0b-716s.hy2.gotochinatown.net&insecure=0#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD21%20%7C%20%E2%AC%87%EF%B8%8F%202.4MB%2Fs
hysteria2://a6a3c7fc-0de8-11ef-ba67-f23c91cfbbc9@ea9b4647-supts0-sxw44d-1re2s.hy2.gotochinatown.net:8443?sni=ea9b4647-supts0-sxw44d-1re2s.hy2.gotochinatown.net&insecure=0#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD24%20%7C%20%E2%AC%87%EF%B8%8F%202.4MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@beiyong.dynuddns.net:57926?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD3%20%7C%20%E2%AC%87%EF%B8%8F%204.3MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:64654?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD3%20%7C%20%E2%AC%87%EF%B8%8F%206.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@shenzhou02.mysynology.net:62157?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%961-CN%20%7C%20%E2%AC%87%EF%B8%8F%2012.4MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@shenzhou02.mysynology.net:32193?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%962-%E6%9C%AA%E8%AF%86%E5%88%AB%20%7C%20%E2%AC%87%EF%B8%8F%204.7MB%2Fs
vless://2a219df1-a04b-4424-bfd2-cb37aeb10b2c@213.142.133.172:7594?encryption=none&security=reality&sni=dash.cloudflare.com&fp=chrome&pbk=AZSptdvlWvvmKWEDTY56UsIcnTP8nGCafvPEQOozrxw&sid=765e8e700426816c&type=grpc&authority=&serviceName=7594vless&mode=gun#%F0%9F%8C%80%E5%85%B6%E4%BB%962-TR%20%7C%20%E2%AC%87%EF%B8%8F%208.9MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:23301?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%963-MY%20%7C%20%E2%AC%87%EF%B8%8F%205.3MB%2Fs
vless://2a219df1-a04b-4424-bfd2-cb37aeb10b2c@turkeyyy.mehrdadsadaf.com:7594?encryption=none&security=reality&sni=dash.cloudflare.com&fp=chrome&pbk=AZSptdvlWvvmKWEDTY56UsIcnTP8nGCafvPEQOozrxw&sid=765e8e700426816c&type=grpc&authority=&serviceName=7594vless&mode=gun#%F0%9F%8C%80%E5%85%B6%E4%BB%963-TR%20%7C%20%E2%AC%87%EF%B8%8F%208.4MB%2Fs
vless://7c317161-5cf8-4cbc-811a-d1297c41bb23@152.67.68.116:443?encryption=none&flow=xtls-rprx-vision-udp443&security=tls&sni=YAPC-1.afshin.ir&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A8%F0%9F%87%AD%E7%91%9E%E5%A3%AB1%20%7C%20%E2%AC%87%EF%B8%8F%203.0MB%2Fs
vless://1d5e1a16-607a-45d5-a27a-2d4e764addb6@172.67.202.125:443?encryption=none&security=tls&sni=cdnfast.lunarmc.ir.&fp=chrome&type=ws&host=cdnfast.lunarmc.ir.&path=%2F%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%40one_shop_official_%3Fed%3D2048#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%2011.6MB%2Fs
vless://a9718c02-7177-4100-a133-3c74ada7ce63@website.amin-app.ir:8880?encryption=none&security=none&type=ws&host=vIhYpErClOuD.aCaDeMiGrOuP.iR.&path=%2FJoin--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420--Join--EXPRESSVPN_420%3Fed%3D2048#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD3%20%7C%20%E2%AC%87%EF%B8%8F%202.9MB%2Fs
vless://ac5ef6ff-4df5-4615-8e8b-3819497f5776@direct.psnapptapsi.ir:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=direct.psnapptapsi.ir&fp=chrome&pbk=15VSj5bGCGemmifDA6IfLCz8deqBcvaI7SRZFd2bUBQ&sid=ec7d25&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD5%20%7C%20%E2%AC%87%EF%B8%8F%205.5MB%2Fs
vless://ce462cc3-9983-45da-b030-728fb7b5684e@188.245.250.75:7022?encryption=none&security=reality&sni=refersion.com&fp=chrome&pbk=Sm0gGVH8qJHECOVhNaN2j52ayfqYcrZggyQMxiQP2Fo&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD6%20%7C%20%E2%AC%87%EF%B8%8F%206.8MB%2Fs
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@104.21.32.1:80?encryption=none&security=none&type=ws&host=redfree8.redorg1.ir&path=%2Fvpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl-vpnowl%3Fed%3D2560#%F0%9F%87%AB%F0%9F%87%AE%E8%8A%AC%E5%85%B01%20%7C%20%E2%AC%87%EF%B8%8F%2021.2MB%2Fs
hysteria2://dongtaiwang.com@51.159.226.1:43496?sni=www.bing.com&insecure=1#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%202.7MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@vip.jddns0202.top:49699?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.amazon.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%208.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:10860?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%20%7C%20%E2%AC%87%EF%B8%8F%2017.0MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:21123?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF3%20%7C%20%E2%AC%87%EF%B8%8F%203.2MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@vip.jddns0202.top:14548?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC1%20%7C%20%E2%AC%87%EF%B8%8F%2016.6MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@bsuqian01.dynu.net:31735?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC2%20%7C%20%E2%AC%87%EF%B8%8F%204.5MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@cos90-new2.dynu.net:13989?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC3%20%7C%20%E2%AC%87%EF%B8%8F%2015.1MB%2Fs
trojan://f57f01e6-9bb1-4277-a5cb-75ad0ce1fa11@125.94.40.162:21125?security=tls&sni=k12.tudou211.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC4%20%7C%20%E2%AC%87%EF%B8%8F%203.9MB%2Fs
hysteria2://Bia-SiNAVM-SiNAVM-SiNAVM-SiNAVM@sinavm.sinabigo.ir:443?sni=sinavm.sinabigo.ir&obfs=salamander&obfs-password=Bia-SiNAVM-Telegram-SiNAVM-%40SiNAVM-SiNAVM&insecure=0#%F0%9F%87%B3%F0%9F%87%B1%E8%8D%B7%E5%85%B01%20%7C%20%E2%AC%87%EF%B8%8F%202.6MB%2Fs
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1RERGQVx1RDgzQ1x1RERGOOe+juWbvTEyIHwg4qyH77iPIDcuMk1CL3MiLA0KICAiYWRkIjogInl5bWcxOC5oYWlibzE2OC5jb20iLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNWZjNTEwNmMtMmFkYS00NDgxLWE1ZGYtNjA4ZDY2ZjdlZGEwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ5eW1nMTguaGFpYm8xNjguY29tIiwNCiAgInBhdGgiOiAiL3l5bWcxMjM0IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInl5bWcxOC5oYWlibzE2OC5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://35fcfcfd-001e-45c6-9111-913767b12d06@104.21.80.1:8443?encryption=none&security=tls&sni=mas41.459.pp.ua&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mas41.459.pp.ua&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD13%20%7C%20%E2%AC%87%EF%B8%8F%205.0MB%2Fs
hysteria2://dongtaiwang.com@108.181.5.130:65232?sni=apple.com&insecure=1#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD3%20%7C%20%E2%AC%87%EF%B8%8F%2010.0MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:40430?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD6%20%7C%20%E2%AC%87%EF%B8%8F%205.0MB%2Fs
trojan://fefba36d-5142-42f1-b14d-db5249511d93@172.67.214.21:443?security=tls&sni=5re.191268.xyz&alpn=http%2F1.1&fp=chrome&type=ws&path=%2FBFBuPh4SuxTxCwkqKrjE#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD8%20%7C%20%E2%AC%87%EF%B8%8F%209.4MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:46372?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.amazon.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%961-%E6%9C%AA%E8%AF%86%E5%88%AB%20%7C%20%E2%AC%87%EF%B8%8F%206.9MB%2Fs
hysteria2://gLkkfesaSD@156.226.175.33:40308?obfs=salamander&obfs-password=Jdb392b3j838dkdn3j%24%24ueh&insecure=1#%F0%9F%8C%80%E5%85%B6%E4%BB%962-SC%20%7C%20%E2%AC%87%EF%B8%8F%203.0MB%2Fs
hysteria2://Bia-SiNAVM-Telegram-SiNAVM-Bia-SiNAVM@sinavm.soft10.ir:443?sni=sinavm.soft10.ir&obfs=salamander&obfs-password=%40SiNAVM-SiNAVM-SiNAVM-%40SiNAVM-%40SiNAVM&insecure=0#%F0%9F%8C%80%E5%85%B6%E4%BB%963-LI%20%7C%20%E2%AC%87%EF%B8%8F%202.5MB%2Fs


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
