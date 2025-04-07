
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
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
ss://YWVzLTI1Ni1nY206TmtSSlZHbE5SM0pCUVc1VWR6aDFRWFF4UWtWWE0xaFFXbTVCZDFSTFMydz0%3D@[2600:1900:41a0:616::]:36866#google-hk-v6
ss://YWVzLTI1Ni1nY206TWtaRWJYUk9iSEp0U0VKVVdsZHlUWFJxVWxoMk4xTk5jMGhUU20wNGVtOD0%3D@[2600:1900:41a0:fd0f::]:29813#google-hk-v6
vless://9ef72714-121e-47c4-a94b-487b65a2a005@ky01.fjsedf6523.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky01.fjsedf6523#ky01
vless://1e69d68c-b163-414c-fb85-f7d05dc953f1@ky11.mwedw51.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky11.mwedw51#ky11
vless://5bf6ca4d-786c-4dc2-8f5f-0ea46a6ffbf4@ky12.nefe512.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky12.nefe512#ky12
vless://d239f27d-6f3f-4633-fcc5-d4105b703df0@ky40.eghrr656.click:443?encryption=none&security=tls&type=ws&path=%2Fky40.eghrr656#ky40
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@120.238.53.237:34313?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE4%20%7C%20%E2%AC%87%EF%B8%8F%203.1MB%2Fs
vless://9f53d9dc-8e5d-4a96-d940-fb542631e1e4@128.1.31.125:443?encryption=none&security=tls&sni=tw.qhahd.shop&type=ws&host=tw.qhahd.shop&path=%2Fbing#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE2%20%7C%20%E2%AC%87%EF%B8%8F%205.4MB%2Fs
trojan://0cda5f7e-cc55-4ff2-8ad8-268b9b99dd01@172.67.135.23:443?security=tls&sni=uS6-16.890601.xyz&alpn=http%2F1.1&fp=chrome&type=ws&path=%2FILLcisbMYUd6MQzxVoMQ#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD6%20%7C%20%E2%AC%87%EF%B8%8F%206.9MB%2Fs
hysteria2://dongtaiwang.com@195.154.33.70:59967?sni=www.bing.com&insecure=1#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD2%20%7C%20%E2%AC%87%EF%B8%8F%207.5MB%2Fs
vless://c5293efa-28f8-4a0f-8f34-541078970cee@45.131.4.151:80?encryption=none&security=none&sni=gozargah.validbv7996.ir&allowInsecure=1&type=ws&host=gozargah.validbv7996.ir&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40MxlShare%40WangCai2#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD2%20%7C%20%E2%AC%87%EF%B8%8F%202.6MB%2Fs
vless://c5293efa-28f8-4a0f-8f34-541078970cee@45.131.4.200:80?encryption=none&security=none&type=ws&host=gozargah.validbv7996.ir&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%40WangCai2%2F%3Fed#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD2%20%7C%20%E2%AC%87%EF%B8%8F%201.1MB%2Fs
vless://c5293efa-28f8-4a0f-8f34-541078970cee@45.131.4.233:80?encryption=none&security=none&sni=gozargah.validbv7996.ir&allowInsecure=1&type=ws&host=gozargah.validbv7996.ir&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD10%20%7C%20%E2%AC%87%EF%B8%8F%205.2MB%2Fs
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1RERFRlx1RDgzQ1x1RERGNVx1NjVFNVx1NjcyQzMgfCBcdTJCMDdcdUZFMEYgMTcuMU1CL3MiLA0KICAiYWRkIjogIjQ1LjE1OS41MC4yMTIiLA0KICAicG9ydCI6ICIzMTg0MiIsDQogICJpZCI6ICI1NzBlNTJjMS1iZTE1LTRjNzktYTllNy1iYWI4MjU1NWEwMzQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogImh0dHAiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
hysteria2://dongtaiwang.com@46.17.41.217:4395?sni=www.bing.com&insecure=1#%F0%9F%87%B7%F0%9F%87%BA%E4%BF%84%E7%BD%97%E6%96%AF2%20%7C%20%E2%AC%87%EF%B8%8F%205.3MB%2Fs
hysteria2://dongtaiwang.com@46.17.41.5:12904?sni=apple.com&insecure=1#%F0%9F%87%B7%F0%9F%87%BA%E4%BF%84%E7%BD%97%E6%96%AF1%20%7C%20%E2%AC%87%EF%B8%8F%2010.3MB%2Fs
hysteria2://dongtaiwang.com@46.29.163.171:35751?sni=www.bing.com&insecure=1#%F0%9F%87%B7%F0%9F%87%BA%E4%BF%84%E7%BD%97%E6%96%AF2%20%7C%20%E2%AC%87%EF%B8%8F%203.0MB%2Fs
hysteria2://dongtaiwang.com@51.159.226.1:61770?sni=www.bing.com&insecure=1#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%208.4MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@agaungzhou01.bumbleshrimp.com:31800?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF4%20%7C%20%E2%AC%87%EF%B8%8F%202.3MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@bsuqian01.dynu.net:16955?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.yahoo.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%964-TH%20%7C%20%E2%AC%87%EF%B8%8F%201.5MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:23301?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%8C%80%E5%85%B6%E4%BB%963-MY%20%7C%20%E2%AC%87%EF%B8%8F%205.3MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:14659?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AC%F0%9F%87%A7%E8%8B%B1%E5%9B%BD1%20%7C%20%E2%AC%87%EF%B8%8F%208.1MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:44003?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A12%20%7C%20%E2%AC%87%EF%B8%8F%205.0MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:13989?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC1%20%7C%20%E2%AC%87%EF%B8%8F%203.6MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@csuzhou01.1cooldns.com:14548?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC6%20%7C%20%E2%AC%87%EF%B8%8F%205.3MB%2Fs
vless://c5293efa-28f8-4a0f-8f34-541078970cee@discord.cloudflare.com:80?encryption=none&security=none&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3%20%40WangCai2%20%2F%3Fed%3D2560#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%20%7C%20%E2%AC%87%EF%B8%8F%203.6MB%2Fs
vless://d9074e14-c4e4-4e58-8fff-3727e83af868@support.zoom.us:80?encryption=none&security=none&sni=free.pranithsandaruwan.shop&type=ws&host=free.pranithsandaruwan.shop&path=%2F#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A11%20%7C%20%E2%AC%87%EF%B8%8F%203.7MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:10860?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%20%7C%20%E2%AC%87%EF%B8%8F%205.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@test123.zlqhdns.top:24318?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF3%20%7C%20%E2%AC%87%EF%B8%8F%207.8MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:54220?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nvidia.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%20%7C%20%E2%AC%87%EF%B8%8F%208.2MB%2Fs
vless://459b4a80-bd61-4ecd-a26b-e9c1809d9e45@zhee01.dynu.net:64654?encryption=none&flow=xtls-rprx-vision&security=reality&sni=gateway.icloud.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&allowInsecure=1&type=tcp&headerType=none#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD3%20%7C%20%E2%AC%87%EF%B8%8F%206.8MB%2Fs

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
