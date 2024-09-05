
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
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@45.147.201.45:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#y2zow7qn
vless://27514138-c796-48e6-aa86-daee6ba38e7b@165.154.226.207:443?encryption=none&security=none&type=ws&path=%2F#xm
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.18.32.0:443?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#Moist_R
hysteria2://f5bed431-e866-4766-9748-1fcf85395434@[2605:6400:5322:800e:0:1:e129:20f]:38784/?sni=www.bing.com&alpn=h3&insecure=1#hy2-acuslxc
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImV1c2Vydi1WbSIsDQogICJhZGQiOiAiMTYyLjE1OS4xMzQuOCIsDQogICJwb3J0IjogIjg0NDMiLA0KICAiaWQiOiAiNDAzNmEyZmQtOWZhZC00YjI2LTkzNjktODhkNDM2ZGRkODExIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJldS5iYnIuZ2F5IiwNCiAgInBhdGgiOiAiL3NiYS12bSIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJldS5iYnIuZ2F5IiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@yx.3217000.xyz:2053?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#Aocs-US
ss://YWVzLTEyOC1nY206eGZwZ05qY1RvMnN5UWg3ZFR4NHNpNkR3TXdiZUZLS0poaE9abThzMVJJWGE=@183.94.30.165:26922#Alice-HK
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkIyN1x1NUZCN1x1OUUyMS1jbG9uZSIsDQogICJhZGQiOiAieXguMzIxNzAwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZTk1ZTIyMTMtNjE1OS00YmJlLTlmZTUtMjhlNzA1YmMyM2VjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJxd2VxZXF3ZXF3ZXF3ZS5qYWdhb255YWJlcml0YS5ldS5vcmciLA0KICAicGF0aCI6ICIvaG9tZSIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@ru.a-dns.eu.org:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#%E8%8E%AB%E6%96%AF%E7%A7%91300Mbps%40%E6%97%A0%E9%99%90%E6%B5%81%E9%87%8F
vless://a359f01e-462f-48a2-9e5c-4488f3391490@us.a-dns.eu.org:20000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=s0.awsstatic.com&fp=random&pbk=9rf3tZ25tJ3Hx-iKSjhObu3KuDowBD-euGfI_O77t3I&sid=65471ece3975&spx=%2F&type=tcp&headerType=none#%E7%BE%8E%E5%9B%BD1Gbps%40%E6%97%A0%E9%99%90%E6%B5%81%E9%87%8F
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1RERGQVx1RDgzQ1x1RERGOFx1N0Y4RVx1NTZGRCAwMi1cdTRFMkRcdThGNkMtY2xvbmUiLA0KICAiYWRkIjogInVzLmxpYW5qaWFub2RlLmNjIiwNCiAgInBvcnQiOiAiMzQxNzUiLA0KICAiaWQiOiAiZmRlOGE1MDEtOTE4NC00NDBlLWE3Y2EtMGFjMzBhNThmM2Y2IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ1czEubHVvZGkueHl6IiwNCiAgInBhdGgiOiAiL3VzYSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://1de5903e-e2c1-c34e-66af-82cabf660996@35.229.229.186:58283?encryption=none&security=none&type=ws&path=%2F3#3
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInN1cmZlciIsDQogICJhZGQiOiAiMTY1LjE1NC4yMzUuNDEiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJkMjk5YmE2My1kOGIzLTQzYmMtYjEwZC01OGQ0NDUwYzdkYzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://62344096-ac93-4d45-8c60-23e03461b0f4@sgv1test.566678.xyz:31245?encryption=none&security=none&type=tcp&headerType=none#XKSG
vless://93ba16ba-00b3-45b6-bdea-906dd564ba5f@[2a05:dfc1:8b62:4778:be24:11ff:fe3c:a98c]:55599?encryption=none&flow=xtls-rprx-vision&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=Wr2882ax-DaLOELZhIHNAwAvWnZjqUo37rYkINJsnVg&type=tcp&headerType=none#yxvm%20reality-vision
vless://93ba16ba-00b3-45b6-bdea-906dd564ba5f@yx.3217000.xyz:443?encryption=none&security=tls&sni=nomination-athens-soundtrack-arising.trycloudflare.com&type=ws&host=nomination-athens-soundtrack-arising.trycloudflare.com&path=%2Fargox-vl%3Fed%3D2048#yxvm-Vl
trojan://93ba16ba-00b3-45b6-bdea-906dd564ba5f@yx.3217000.xyz:443?security=tls&sni=nomination-athens-soundtrack-arising.trycloudflare.com&type=ws&host=nomination-athens-soundtrack-arising.trycloudflare.com&path=%2Fargox-tr%3Fed%3D2048#yxvm-Tr
trojan://93ba16ba-00b3-45b6-bdea-906dd564ba5f@141.101.122.45:2053?security=tls&sni=nomination-athens-soundtrack-arising.trycloudflare.com&type=ws&host=nomination-athens-soundtrack-arising.trycloudflare.com&path=%2Fargox-tr%3Fed%3D2048#yxvm-Tr-clone


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
