
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
vless://92224dc5-e2ea-4273-b16e-236ed14dffb2@alice.3217.lol:38227?encryption=none&security=reality&sni=yahoo.com&fp=random&pbk=imD8hym2oeiCHR3nOl6mBrLKfmIliR4jXMHC8nBPThA&sid=7507797c157c7147&spx=%2F&type=tcp&headerType=none#alice-vl-vyzm4d8j
vless://92224dc5-e2ea-4273-b16e-236ed14dffb2@208.87.96.15:30384?encryption=none&security=reality&sni=yahoo.com&fp=random&pbk=imD8hym2oeiCHR3nOl6mBrLKfmIliR4jXMHC8nBPThA&sid=7507797c157c7147&spx=%2F&type=tcp&headerType=none#alice-v6-wawo
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIndhd28tSEt8dm0iLA0KICAiYWRkIjogIndhd28uMzIxNzAwMC54eXoiLA0KICAicG9ydCI6ICI1NDkzMSIsDQogICJpZCI6ICI3Y2YxZDlhMC05YjVmLTQyNDEtY2RjZS0xZmVhMGU4MDEwOTciLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogImdycGMiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://1af47d0f-1562-4904-c90a-b8a51c4a67e5@wawo.3217000.xyz:30024?encryption=none&security=reality&sni=www.speedtest.net&fp=chrome&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&type=tcp&headerType=none#wawo-HK
vless://1af47d0f-1562-4904-c90a-b8a51c4a67e5@103.244.89.58:12118?encryption=none&security=reality&sni=www.speedtest.net&fp=chrome&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&type=tcp&headerType=none#wawo-HK-locvps
vless://155eed4a-ac2c-46b4-cac8-f286dbe1a03f@103.196.20.185:36566?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&type=tcp&headerType=none#wawo-us
vless://155eed4a-ac2c-46b4-cac8-f286dbe1a03f@208.87.96.15:15161?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&type=tcp&headerType=none#wawo-us-HK%E8%BD%AC
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIndhd28tdXN8Q0ROfDUwMEdCIiwNCiAgImFkZCI6ICJ5eC4zMjE3MDAwLnh5eiIsDQogICJwb3J0IjogIjIwNTMiLA0KICAiaWQiOiAiZWIyOTNjN2YtYzA1NS00YzdkLWFmODgtNGY3MzQ2NTNlM2RmIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ3YXdvdXMuMzIxNy5zcGFjZSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAid2F3b3VzLjMyMTcuc3BhY2UiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzfHZtfHEwWTgubG92ZUB4cmF5LmNvbS1jbG9uZSIsDQogICJhZGQiOiAiaWNvb2suaGsiLA0KICAicG9ydCI6ICIyMDUzIiwNCiAgImlkIjogIjM2NzQyYmQzLTM5MTYtNGI3ZC1jMjIxLWVhMzg3NWUzZDFkNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAicm4uMzIxNy5zcGFjZSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAicm4uMzIxNy5zcGFjZSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://33150427-0d29-4cf5-abe2-23595c99afe4@rn.3217.space:21758?encryption=none&security=reality&sni=www.icloud.com&fp=chrome&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&type=tcp&headerType=none#RN-us%7Cvl%7CbEIJ.love%40xray.com
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzfHZtfHEwWTgubG92ZUB4cmF5LmNvbSIsDQogICJhZGQiOiAicm4uMzIxNy5zcGFjZSIsDQogICJwb3J0IjogIjUwNjk4IiwNCiAgImlkIjogIjM2NzQyYmQzLTM5MTYtNGI3ZC1jMjIxLWVhMzg3NWUzZDFkNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
hysteria2://7d104750c3733c0e@156.226.170.188:64410?sni=www.bing.com&alpn=h3&insecure=1#ACCK-HK-Akile
vless://d6b3772b-ea57-43fa-b5bf-172db0db8c63@156.226.170.188:52395?encryption=none&security=reality&sni=www.lovelive-anime.jp&fp=chrome&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&type=tcp&headerType=none#acck%7C1gR2.love%40xray.com
vless://d6b3772b-ea57-43fa-b5bf-172db0db8c63@103.244.89.58:33776?encryption=none&security=reality&sni=www.lovelive-anime.jp&fp=chrome&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&type=tcp&headerType=none#acck%7CVL-locvps
vless://d6b3772b-ea57-43fa-b5bf-172db0db8c63@208.87.96.15:10484?encryption=none&security=reality&sni=www.lovelive-anime.jp&fp=chrome&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&type=tcp&headerType=none#acck%7CVL-wawo
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImxvY3Zwcy1WTSIsDQogICJhZGQiOiAibG9jdnBzLjMyMTcwMDAueHl6IiwNCiAgInBvcnQiOiAiMzAzNDIiLA0KICAiaWQiOiAiZTM0MzU3MjAtYmUyMi00YTNlLTg5OGMtZmFmMTIyOTMyMzQwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://fc943f32-99ec-44d2-accf-b28a18ac3e2d@locvps.3217000.xyz:10447?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=ws&path=%2F#locvps-VL
vless://64bfe164-78bf-4393-e423-b2d28ba31a8f@locvps.3217000.xyz:38932?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&type=tcp&headerType=none#locvpstcp%7CbpL2
vless://fc943f32-99ec-44d2-accf-b28a18ac3e2d@yx.3217000.xyz:443?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=ws&host=locvps.3217000.xyz&path=%2F#locvps-VL
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@ru.a-dns.eu.org:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#%E8%8E%AB%E6%96%AF%E7%A7%91300Mbps%40%E6%97%A0%E9%99%90%E6%B5%81%E9%87%8F
vless://461b9b12-4f64-4bbd-8253-18ec1f443526@[2605:6400:5322:800e:0:1:e129:20f]:46528?encryption=none&security=reality&sni=blog.api.www.cloudflare.com&fp=chrome&pbk=cDaDzPr3PlS3NM8lreHZbdo-Mhqz8vMBzMSkHXhGIUA&type=tcp&headerType=none#acuslxc%7CL0vw.love%40xray.com
vless://1bd322f7-a6a0-40d1-8e71-d6f903e5aa24@188.245.197.12:39109?encryption=none&security=reality&sni=addons.mozilla.org&fp=random&pbk=gJuwR7gnHRq-FClMPEdgHW1Dp0bInwh9qkQPlLNY7Eo&type=tcp&headerType=none&host=addons.mozilla.org#%E5%B0%8F%E7%A7%98%E4%B9%8B%E5%BE%B7%E5%9B%BD
vless://9ef72714-121e-47c4-a94b-487b65a2a005@ky01.fjsedf6523.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky01.fjsedf6523#ky01
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@45.147.201.45:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#y2zow7qn
vless://5bf6ca4d-786c-4dc2-8f5f-0ea46a6ffbf4@ky12.nefe512.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky12.nefe512#ky12
vless://1e69d68c-b163-414c-fb85-f7d05dc953f1@ky11.mwedw51.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky11.mwedw51#ky11
vless://d239f27d-6f3f-4633-fcc5-d4105b703df0@ky40.eghrr656.click:443?encryption=none&security=tls&type=ws&path=%2Fky40.eghrr656#ky40

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
