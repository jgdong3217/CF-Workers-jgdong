
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ysd'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
ss://YWVzLTI1Ni1nY206TmtSSlZHbE5SM0pCUVc1VWR6aDFRWFF4UWtWWE0xaFFXbTVCZDFSTFMydz0%3D@[2600:1900:41a0:616::]:36866#%E6%AF%8F%E4%BA%BA%E9%99%90%E7%94%A8%E6%B5%81%E9%87%8F1T%2F%E6%9C%88
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIndhd28tdXN8dGxzIiwNCiAgImFkZCI6ICJ3YXdvdXMuMzIxNy5zcGFjZSIsDQogICJwb3J0IjogIjM2NTY4IiwNCiAgImlkIjogImViMjkzYzdmLWMwNTUtNGM3ZC1hZjg4LTRmNzM0NjUzZTNkZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://155eed4a-ac2c-46b4-cac8-f286dbe1a03f@wawous.3217.space:36567?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&type=tcp&headerType=none#wawo-us%7Ctcp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIndhd28tSEt2bS1DTUlcdTk2NTBcdTkxQ0ZcdTRGN0ZcdTc1MjgiLA0KICAiYWRkIjogIndhd28uMzIxNzAwMC54eXoiLA0KICAicG9ydCI6ICI1NDkzMiIsDQogICJpZCI6ICI3Y2YxZDlhMC05YjVmLTQyNDEtY2RjZS0xZmVhMGU4MDEwOTciLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogImdycGMiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://1af47d0f-1562-4904-c90a-b8a51c4a67e5@wawo.3217000.xyz:30025?encryption=none&security=reality&sni=www.speedtest.net&fp=chrome&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&type=tcp&headerType=none#wawo-HKvl-CMI%E9%99%90%E9%87%8F%E4%BD%BF%E7%94%A8
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzLVZNIiwNCiAgImFkZCI6ICJybi4zMjE3LnNwYWNlIiwNCiAgInBvcnQiOiAiMjE3NjAiLA0KICAiaWQiOiAiMzY3NDJiZDMtMzkxNi00YjdkLWMyMjEtZWEzODc1ZTNkMWQ0IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://33150427-0d29-4cf5-abe2-23595c99afe4@rn.3217.space:21759?encryption=none&security=reality&sni=www.icloud.com&fp=chrome&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&type=tcp&headerType=none#RN-us-TCP
vless://64bfe164-78bf-4393-e423-b2d28ba31a8f@103.244.89.58:38932?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&type=tcp&headerType=none#locvpstcp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkpQLU5UVC1MQVBcdTRFMERcdTk2NTAiLA0KICAiYWRkIjogInd3dy52aXNhLmNvbS50dyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI1MzYyZTE3ZS1lMTIzLTQ2MzAtOTUwNC03NjI0MjZlYTU0NTYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogIm5vbmUiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInBoYW50b20tY29uY2VwdHVhbC1leGFtcy1jYXJyaWVkLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgInBhdGgiOiAiL3ZtZXNzLWFyZ28/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJwaGFudG9tLWNvbmNlcHR1YWwtZXhhbXMtY2FycmllZC50cnljbG91ZGZsYXJlLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
hysteria2://5362e17e-e123-4630-9504-762426ea5456@140.227.124.156:30957?sni=www.bing.com&alpn=h3&insecure=1#JP-NTT-LAP%E4%B8%8D%E9%99%90
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkRFLWRhdGFmb3Jlc3RcdTRFMERcdTk2NTAiLA0KICAiYWRkIjogInd3dy51ZGVteS5jb20iLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZDM5YTIyZDgtZmVhNS00NGQ3LTk5YTktMzkxMDc3ZDIwMTZkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJzYXRpc2ZhY3RvcnktamFuZS1tcnMtaW1wb3J0ZWQudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAicGF0aCI6ICIvdm1lc3MtYXJnbz9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInNhdGlzZmFjdG9yeS1qYW5lLW1ycy1pbXBvcnRlZC50cnljbG91ZGZsYXJlLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
hysteria2://d39a22d8-fea5-44d7-99a9-391077d2016d@77.90.52.103:30264?alpn=h3&insecure=1#DE-dataforest%E4%B8%8D%E9%99%90
hysteria2://3004059fa34cacd7@45.38.42.103:11001?sni=www.bing.com&alpn=h3&insecure=1#HK-CGI_GLOBAL_LIMITED
vless://f3c19ce0-2cde-43d7-9f4e-32978a5320cd@38.252.8.220:34402?encryption=none&security=reality&sni=blog.api.www.cloudflare.com&fp=chrome&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&type=tcp&headerType=none#Charity-US%E4%B8%8D%E9%99%90
hysteria2://5227d83d635397c5@38.252.8.220:26002?sni=www.bing.com&alpn=h3&insecure=1#Charity-US%E4%B8%8D%E9%99%90
vless://92224dc5-e2ea-4273-b16e-236ed14dffb2@208.87.96.15:30385?encryption=none&security=reality&sni=yahoo.com&fp=random&pbk=imD8hym2oeiCHR3nOl6mBrLKfmIliR4jXMHC8nBPThA&sid=7507797c157c7147&spx=%2F&type=tcp&headerType=none#alice-v6-wawo%E4%B8%AD%E8%BD%AC
vless://58fa38f3-6f79-490b-923f-3bb1ca2440d9@yx.3217000.xyz:2053?encryption=none&security=tls&sni=alice.3217.lol&type=ws&host=alice.3217.lol&path=%2Fjgdong#alice-v6-CDN%E4%B8%8D%E9%99%90
vless://47ce4128-3340-482c-e2b4-3a182c77b2c8@acus.3217000.xyz:55248?encryption=none&security=tls&sni=acus.3217000.xyz&fp=chrome&type=ws&path=%2F#ACus-CDN
vless://cfba9207-1693-45a2-b40f-d626c2e21606@156.226.170.188:52396?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=g1f1wLjim5gOVGnI5LGUV0dL4iFXPoiepOPZfSxJe14&type=tcp&headerType=none#ACCK-HK-Akile
hysteria2://b06241ce-a201-40f1-8598-e3f6055ba5d9@188.68.234.53:46749?sni=www.bing.com&alpn=h3&insecure=1#PL-s14-hy2%E4%B8%8D%E9%99%90
hysteria2://bc97f674-c578-4940-9234-0a1da46041b9@128.204.223.95:43387?sni=www.bing.com&alpn=h3&insecure=1#PL-s4-hy2%E4%B8%8D%E9%99%90
hysteria2://bc97f674-c578-4940-9234-0a1da46041b9@128.204.223.116:13277?sni=www.bing.com&alpn=h3&insecure=1#PL-s9-hy2%E4%B8%8D%E9%99%90
vless://65a03bee-5506-4286-bad1-fac18b32d7ac@sk5.djg.us.kg:443?encryption=none&security=tls&sni=sk5.djg.us.kg&fp=randomized&type=ws&host=sk5.djg.us.kg&path=%2F%3Fed%3D2560#sk5.djg.us.kg%E4%B8%8D%E9%99%90
vless://65a03bee-5506-4286-bad1-fac18b32d7ac@www.shopify.com:2053?encryption=none&security=tls&sni=sk5.djg.us.kg&fp=randomized&type=ws&host=sk5.djg.us.kg&path=%2F%3Fed%3D2560#sk5.djg.us.kg
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=

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
