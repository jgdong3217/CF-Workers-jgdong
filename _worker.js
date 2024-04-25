
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'jgdong'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
hysteria2://c1edeae5-a9c1-4135-bcc1-7f69f351d7ee@hy002.moonriver.sbs:2052/?sni=hy002.moonriver.sbs&insecure=1#US%E7%BE%8E%E5%9B%BDHY2-2%7CHY2%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8%E6%9B%B4%E6%96%B0V2RAYN%E8%87%B3%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC%7CX0.5
vless://c1edeae5-a9c1-4135-bcc1-7f69f351d7ee@rucn2.moonriver.sbs:8443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.python.org&fp=chrome&pbk=0XhugRn6bb2-mH-_7GonkspLl2nrEAInqTCSWBEXcnE&sid=cbc51a5a&type=tcp&headerType=none#RU%E4%BF%84%E7%BD%97%E6%96%AF%E7%94%B5%E4%BF%A1CN2
https://hy2sub.pages.dev
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@211.72.156.10:23555?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#-TW
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.18.33.205:8443?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#官方优选
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTQUMtVm0iLA0KICAiYWRkIjogIjE2Mi4xNTkuMy4xMzUiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiYTEyMjVmYzctOWM2Ny00MWZkLTgzYWUtZGVhOGNhYzMwYTkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJnaWxiZXJ0LXRyYW5zZm9ybWF0aW9uLW5lcGFsLWNhbWVsLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgInBhdGgiOiAiL2FyZ294LXZtP2VkPTIwNDgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZ2lsYmVydC10cmFuc2Zvcm1hdGlvbi1uZXBhbC1jYW1lbC50cnljbG91ZGZsYXJlLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://1526a9fc-494c-4641-8aa0-d44196f690ec@194.36.55.7:443?encryption=none&security=tls&type=ws&host=loud-interpreted-flower-kennedy.trycloudflare.com&path=1526a9fc#US-Psychz%20Networks-Los%20Angeles_tls
vless://678ac895-92c2-4f27-a9d4-f1a89c5f5365@27.50.48.108:443?encryption=none&security=tls&sni=mositr.freenods.sbs&fp=random&type=ws&host=mositr.freenods.sbs&path=%2F%3Fed%3D2048#%E6%AC%A2%E4%B9%90%E6%97%B6%E5%85%89Aocs-US
vless://b7a392e2-4ef0-4496-90bc-1c37bb234904@104.17.32.0:2053?encryption=none&security=tls&sni=15212712-20f5-40a5-b9aa-8363e0130171.ee137666-1e0a-46db-bbd6-cc18f9841234.accesscam.org&fp=random&type=ws&host=15212712-20f5-40a5-b9aa-8363e0130171.ee137666-1e0a-46db-bbd6-cc18f9841234.accesscam.org&path=%2Fedgetunnel-2z2.pages.dev%2F%3Fed%3D2048#US%20%E5%B7%B2%E5%90%AF%E7%94%A8
vless://678ac895-92c2-4f27-a9d4-f1a89c5f5365@104.20.27.133:2096?encryption=none&security=tls&sni=mositr.freenods.sbs&fp=random&type=ws&host=mositr.freenods.sbs&path=%2F%3Fed%3D2048#%E5%AE%98%E6%96%B9%E4%BC%98%E9%80%89-%E8%81%94%E9%80%9A%E4%B8%93%E4%BA%AB
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NTM3MFx1NUVBNlx1MjQ2MVx1NEUwMFx1NEYxOFx1NTMxNlx1MjQ2MSIsDQogICJhZGQiOiAidGJzbHQudGJzdGJzLmJpeiIsDQogICJwb3J0IjogIjE4ODA1IiwNCiAgImlkIjogImMzMzFjNzI3LWMwOTMtMzk2Yy04NGYzLWU4NTRmZTMzZTE0ZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://678ac895-92c2-4f27-a9d4-f1a89c5f5365@154.197.121.253:443?encryption=none&security=tls&sni=mositr.freenods.sbs&fp=random&type=ws&host=mositr.freenods.sbs&path=%2F%3Fed%3D2048#%E7%94%B1Moist_R%E6%8F%90%E4%BE%9B%E6%9B%B4%E6%96%B0
vless://678ac895-92c2-4f27-a9d4-f1a89c5f5365@27.50.48.108:443?encryption=none&security=tls&sni=mositr.freenods.sbs&fp=random&type=ws&host=mositr.freenods.sbs&path=%2F%3Fed%3D2048#%E6%AC%A2%E4%B9%90%E6%97%B6%E5%85%89Aocs-US

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
