
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ysd1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
ss://YWVzLTI1Ni1nY206TmtSSlZHbE5SM0pCUVc1VWR6aDFRWFF4UWtWWE0xaFFXbTVCZDFSTFMydz0%3D@[2600:1900:41a0:616::]:36866#google-hk-v6
ss://YWVzLTI1Ni1nY206TWtaRWJYUk9iSEp0U0VKVVdsZHlUWFJxVWxoMk4xTk5jMGhUU20wNGVtOD0%3D@[2600:1900:41a0:fd0f::]:29813#google-hk-v6
vless://b4e356ee-f3a2-4591-ad1b-0eda5f90fc01@[2400:c620:10:e000::a20a:b20a]:46596?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&type=tcp&headerType=none#wawo-hkv6
vless://b4e356ee-f3a2-4591-ad1b-0eda5f90fc01@103.244.89.58:21682?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&type=tcp&headerType=none#wawo-hkv6-locvps%E4%B8%AD%E8%BD%AC
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzfFNKQ3xDRE4iLA0KICAiYWRkIjogIjE1NC4yMS44MC44MSIsDQogICJwb3J0IjogIjEzNTY4IiwNCiAgImlkIjogIjM2NzQyYmQzLTM5MTYtNGI3ZC1jMjIxLWVhMzg3NWUzZDFkNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAicm4uMzIxNy5zcGFjZSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAicm4uMzIxNy5zcGFjZSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzLVZNIiwNCiAgImFkZCI6ICJybi4zMjE3LnNwYWNlIiwNCiAgInBvcnQiOiAiMjE3NjAiLA0KICAiaWQiOiAiMzY3NDJiZDMtMzkxNi00YjdkLWMyMjEtZWEzODc1ZTNkMWQ0IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://33150427-0d29-4cf5-abe2-23595c99afe4@rn.3217.space:21759?encryption=none&security=reality&sni=www.icloud.com&fp=chrome&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&type=tcp&headerType=none#RN-us-TCP
hysteria2://7345a8151069ad0c@208.87.96.15:45232?sni=www.bing.com&alpn=h3&insecure=1#wawo-HK-hy2
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIndhd28taGsiLA0KICAiYWRkIjogIndhd28uMzIxNzAwLnh5eiIsDQogICJwb3J0IjogIjU1MTUyIiwNCiAgImlkIjogImU4YjkyY2NlLTJmY2UtNGJjZi04MDVkLWQ3MWU1YWQyNTRhMCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAiZ3JwYyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://365a4d4b-9b60-4915-cff1-00a41983384e@wawo.321700.xyz:45279?encryption=none&security=reality&sni=www.lovelive-anime.jp&fp=chrome&pbk=IiuIighvDsor2v-vb5s3IJbNiqwLw568auiqoXxc7FM&type=tcp&headerType=none#wawo-hk
vless://64bfe164-78bf-4393-e423-b2d28ba31a8f@103.244.89.58:38932?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&type=tcp&headerType=none#locvpstcp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImxvY3Zwc3x0bHMiLA0KICAiYWRkIjogImxvY3Zwcy4zMjE3MDAueHl6IiwNCiAgInBvcnQiOiAiMzAzNDIiLA0KICAiaWQiOiAiZTM0MzU3MjAtYmUyMi00YTNlLTg5OGMtZmFmMTIyOTMyMzQwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://8849f9e7-1a86-4bf2-b171-652e1939dcd7@208.87.96.15:30385?encryption=none&security=reality&sni=www.speedtest.net&fp=chrome&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&type=tcp&headerType=none#Alice-v6-wawo%E4%B8%AD%E8%BD%AC
vless://8224014b-696b-416f-f99c-00ab16e51dad@208.87.96.15:24110?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&type=tcp&headerType=none#wap-hkv6-wawo%E4%B8%AD%E8%BD%AC
vless://5098b568-9327-41be-b458-b30fb46d6d83@claw7.321700.xyz:12427?encryption=none&security=reality&sni=www.lovelive-anime.jp&fp=chrome&pbk=g1f1wLjim5gOVGnI5LGUV0dL4iFXPoiepOPZfSxJe14&type=tcp&headerType=none#Alice_HK-M1-claw%E4%B8%AD%E8%BD%AC
hysteria2://5e4d366e98407448@157.254.21.197:26001?sni=www.bing.com&alpn=h3&insecure=1#Alice_HK-M1
vless://fca2f5b6-1011-41b6-a822-7a6c6b24b168@claw7.321700.xyz:38115?encryption=none&security=reality&sni=www.speedtest.org&fp=chrome&pbk=g1f1wLjim5gOVGnI5LGUV0dL4iFXPoiepOPZfSxJe14&type=tcp&headerType=none#claw7-JP-vl
hysteria2://02af5ccb9bb66fe5@47.79.32.102:26001?sni=www.bing.com&alpn=h3&insecure=1#claw7-JP-hy2
vless://22eb425b-3079-44ca-aa5a-6aa13edbd01e@156.238.251.95:26002?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.apple.com&fp=chrome&pbk=1wV2l5LOkUYXBKjdLqhSxzEuQOhBWzhHp2xcgxWNF3o&sid=31fe2b9f38f3d59b&type=tcp&headerType=none#%E7%8B%90%E8%92%82%E4%BA%91US-Multacom
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://cf1cafb9-e66e-4a35-f6ee-daaf00f5f498@154.83.93.90:56813?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=9rx7JwMO-KRZZEM9TQBO19BOAmmGjJyjN86ll2J7uVc&type=tcp&headerType=none#akile-VL-jpiij
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImFraWxlLVZNLWpwaWlqIiwNCiAgImFkZCI6ICJha2lsZS4zMjE3LnNwYWNlIiwNCiAgInBvcnQiOiAiNTU2OTUiLA0KICAiaWQiOiAiM2I4M2E4MWEtMTM2Zi00ZjNmLWQ4ZTItNWYzY2VhYTJmYTI5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
hysteria2://65d7caf0bfb0f0e3@154.83.93.90:64061/?sni=www.bing.com&alpn=h3&insecure=1#JP-Octopus_Web_Solution
vless://9755cc88-09d8-437f-bd89-d4a89915d9ae@154.21.80.81:13568?encryption=none&security=tls&sni=keji.madcity.lol&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=keji.madcity.lol&path=%2F%3Fed%3D2560#Madcity-US


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
