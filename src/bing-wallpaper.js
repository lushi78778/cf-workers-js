const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
  };
  
  function handleOptions(request) {
    let headers = request.headers;
    if (
      headers.get("Origin") !== null &&
      headers.get("Access-Control-Request-Method") !== null &&
      headers.get("Access-Control-Request-Headers") !== null
    ) {
      let respHeaders = {
        ...corsHeaders,
        "Access-Control-Allow-Headers": headers.get("Access-Control-Request-Headers"),
      };
      return new Response(null, {
        headers: respHeaders,
      });
    } else {
      return new Response(null, {
        headers: {
          Allow: "GET, HEAD, POST, OPTIONS",
        },
      });
    }
  }
  
  async function handleRequest(request) {
    // 获取原始请求体
    const rawBody = await request.text();
  
    const getBingImageInfo = async (mkt) => {
      // 默认 API 地址
      let apiUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  
      // 如果提供了 "mkt" 参数，更新 API 地址
      if (mkt) {
        apiUrl += `&mkt=${mkt}`;
      }
  
      // 调用 API 并返回 JSON 格式的图片信息
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // 获取第一张图片的信息
      const imageInfo = data.images[0];
  
      // 构造新的 JSON 响应
      return {
        startdate: imageInfo.startdate,
        fullstartdate: imageInfo.fullstartdate,
        enddate: imageInfo.enddate,
        url: "https://www.bing.com" + imageInfo.url,
        copyright: imageInfo.copyright,
        copyrightlink: imageInfo.copyrightlink,
        title: imageInfo.title,
      };
    };
  
    let response;
    if (request.method === "OPTIONS") {
      response = handleOptions(request);
    } else {
      try {
        // 尝试解析请求体为 JSON
        const jsonBody = JSON.parse(rawBody);
  
        // 获取图片信息
        const newJsonResponse = await getBingImageInfo(jsonBody.mkt);
  
        // 返回新的 JSON 响应，带有 Access-Control-Allow-Origin 头部
        response = new Response(JSON.stringify(newJsonResponse), {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        });
      } catch (error) {
        // 如果解析 JSON 失败，获取默认图片信息并返回响应
        const defaultImageInfo = await getBingImageInfo();
  
        // 返回重定向响应
        response = new Response(null, {
          status: 302,
          headers: {
            "Location": defaultImageInfo.url,
            ...corsHeaders,
          },
        });
      }
    }
  
    return response;
  }
  
  addEventListener("fetch", (event) => {
    event.respondWith(
      handleRequest(event.request).catch(
        (err) => new Response(err.stack, { status: 500 })
      )
    );
  });
  