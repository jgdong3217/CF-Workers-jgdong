
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
vless://d239f27d-6f3f-4633-fcc5-d4105b703df0@ky40.eghrr656.click:443?encryption=none&security=tls&type=ws&path=%2Fky40.eghrr656#ky40
vless://1e69d68c-b163-414c-fb85-f7d05dc953f1@ky11.mwedw51.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky11.mwedw51#ky11
vless://9ef72714-121e-47c4-a94b-487b65a2a005@ky01.fjsedf6523.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky01.fjsedf6523#ky01
vless://5bf6ca4d-786c-4dc2-8f5f-0ea46a6ffbf4@ky12.nefe512.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky12.nefe512#ky12
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAiMjMuMTY2LjE2OC45MyIsDQogICJwb3J0IjogIjIxMDYyIiwNCiAgImlkIjogIjI5NzUxOTRkLTNkY2ItNGIxOC1iYTZkLTViYTVjOWRkM2M4OSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://6a768550-3d75-4f87-c61f-843b6415169d@ky41.rgrgjk54643.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky41.rgrgjk54643#ky41
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@45.147.201.45:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#y2zow7qn
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@ru.a-dns.eu.org:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#%E8%8E%AB%E6%96%AF%E7%A7%91300Mbps%40%E6%97%A0%E9%99%90%E6%B5%81%E9%87%8F
vless://a4ceb71e-3eef-474c-f467-d09b69327e40@urhsxfsf.tkpretty.com:59879?encryption=none&security=tls&type=ws&path=%2Fi7e5urthd
vless://d958eee1-fa7c-4780-97b4-673079733a1c@kjhdfiuydff.tkpretty.com:45575?encryption=none&security=tls&type=ws&path=%2F9875e6rthyg
vless://9faa596b-7762-424d-bdc1-dbdb1063a940@fyfdrsi.tkpretty.com:42492?encryption=none&security=tls&type=ws&path=%2F34y5gwersfdv
vless://63479e1a-17c3-4773-bb2c-dc7d3318cbc5@47.243.104.51:18888?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&type=tcp&headerType=none#%E9%98%BF%E9%87%8C%E4%BA%91%E9%A6%99%E6%B8%AF-claw.cloud
vless://fc943f32-99ec-44d2-accf-b28a18ac3e2d@locvps.3217000.xyz:10447?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=ws&path=%2F#locvpsws%7Co8eo.love
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRC1NYWRjaXR5IiwNCiAgImFkZCI6ICIxNTQuMTcuMjI4LjEyMyIsDQogICJwb3J0IjogIjE5MDYzIiwNCiAgImlkIjogImE1NGNjODk3LWQzZmEtNDkzYi05OWVmLTQwODg3ZmRiZmYyNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidXMubWFkY2l0eS5sb2wiLA0KICAicGF0aCI6ICIvP2VkPTI1NjAiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAidXMubWFkY2l0eS5sb2wiLA0KICAiYWxwbiI6ICJodHRwLzEuMSIsDQogICJmcCI6ICIiDQp9
vless://a85fe1fa-686b-4b93-a1c4-c12fc17efe87@46.29.166.160:17267?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.lovelive-anime.jp&fp=safari&pbk=9rx7JwMO-KRZZEM9TQBO19BOAmmGjJyjN86ll2J7uVc&allowInsecure=1&type=tcp&headerType=none#%E7%94%B5%E4%BF%A1%E8%81%94%E9%80%9A%E4%BC%98%E5%8C%96
vless://06df5b3a-40e5-4314-a10d-f2e6a870fa7f@locvps.3217000.xyz:24176?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=tcp&headerType=none#locvps%7C8vcJ
vless://64bfe164-78bf-4393-e423-b2d28ba31a8f@locvps.3217000.xyz:38932?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&type=tcp&headerType=none#locvpstcp%7CbpL2
vless://fc943f32-99ec-44d2-accf-b28a18ac3e2d@locvps.3217000.xyz:10447?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=ws&path=%2F#locvpsws%7Co8eo.love
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRC1NYWRjaXR5IiwNCiAgImFkZCI6ICIxNTQuMTcuMjI4LjEyMyIsDQogICJwb3J0IjogIjE5MDYzIiwNCiAgImlkIjogImE1NGNjODk3LWQzZmEtNDkzYi05OWVmLTQwODg3ZmRiZmYyNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidXMubWFkY2l0eS5sb2wiLA0KICAicGF0aCI6ICIvP2VkPTI1NjAiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAidXMubWFkY2l0eS5sb2wiLA0KICAiYWxwbiI6ICJodHRwLzEuMSIsDQogICJmcCI6ICIiDQp9
vless://63479e1a-17c3-4773-bb2c-dc7d3318cbc5@47.243.104.51:18888?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&type=tcp&headerType=none#%E9%98%BF%E9%87%8C%E4%BA%91%E9%A6%99%E6%B8%AF-claw.cloud

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
