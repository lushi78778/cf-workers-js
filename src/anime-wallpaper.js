const maxRandomNum = 141;

// 处理 CORS 的头信息
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export default {
  async fetch(request, env, ctx) {
    try {
      // 处理 OPTIONS 请求
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: corsHeaders,
        });
      }

      // 生成一个1到maxRandomNum之间的随机数
      const randomNum = Math.floor(Math.random() * maxRandomNum) + 1;
      // 构造重定向URL
      const redirectUrl = `https://oss-cf.ewlgc.top/Anime-Wallpaper/${randomNum}.jpg`;

      // 返回302重定向
      return Response.redirect(redirectUrl, 302);
    } catch (error) {
      console.error(error);

      // 如果出现错误，返回500状态码和错误消息
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  },
};
