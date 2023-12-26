# cf-workers-js

是cloudflare workers 部署的脚本备份，同时供参考学习。

> v1.0.0

Base URLs:

* <a href="https://api-cf.ewlgc.top">正式环境: https://api-cf.ewlgc.top</a>


## GET 随机动漫壁纸

GET /anime-wallpaper

返回适合 Single 主题的白底动漫壁纸，百余张，返回尺寸为1920*1080。
图片版权归原作者所有，本站不为滥用本 API 进行违规操作者承担责任。

> Response Examples

> 200 Response

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|


## POST bing-wallpaper

POST /bing-wallpaper

返回当日的bing壁纸。
可get，302图片。

> Body Parameters

```json
{
  "mkt": "zh-CN"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» mkt|body|string| no |语言选项|

#### Enum

|Name|Value|
|---|---|
|» mkt|zh-CN|
|» mkt|en-US|
|» mkt|ja-JP|
|» mkt|de-DE|
|» mkt|en-CA|
|» mkt|en-GB|
|» mkt|en-IN|
|» mkt|fr-FR|
|» mkt|it-IT|

> Response Examples

> 成功

```json
{
  "image": {
    "startdate": "20231216",
    "fullstartdate": "202312160800",
    "enddate": "20231217",
    "url": "https://www.bing.com/th?id=OHR.GrandPlaceXmas_EN-US8451269457_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    "copyright": "Guild houses of Grand-Place, Brussels, Belgium (© Richard Taylor/Sime/eStock Photo)",
    "copyrightlink": "https://www.bing.com/search?q=Grand+Place+Belgium&form=hpcapt&filters=HpDate%3a%2220231216_0800%22",
    "title": "A cheerful case of the blues"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» link|string|true|none||none|
|» copyright|string|true|none||none|
|» image|object|true|none||none|
|»» startdate|string|true|none||none|
|»» fullstartdate|string|true|none||none|
|»» enddate|string|true|none||none|
|»» url|string|true|none||none|
|»» copyright|string|true|none||none|
|»» copyrightlink|string|true|none||none|
|»» title|string|true|none||none|


## POST 获取地区代码

POST /get-regionid-weather

返回匹配条件的所有地区信息，匹配条件必须有一项

> Body Parameters

```json
{
  "province": "北京",
  "city": "顺义"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» province|body|string| no |none|
|» city|body|string| no |去掉行政“市”等字|

> Response Examples

> 成功

```json
{
  "records": [
    {
      "id": "35",
      "code": "",
      "area_code": "54398",
      "province": "北京",
      "city": "顺义"
    },
    {
      "id": "36",
      "code": "",
      "area_code": "54511",
      "province": "北京",
      "city": "北京"
    },
    {
      "id": "37",
      "code": "",
      "area_code": "54594",
      "province": "北京",
      "city": "大兴"
    },
    {
      "id": "38",
      "code": "",
      "area_code": "54416",
      "province": "北京",
      "city": "密云"
    },
    {
      "id": "39",
      "code": "",
      "area_code": "54424",
      "province": "北京",
      "city": "平谷"
    },
    {
      "id": "40",
      "code": "",
      "area_code": "54406",
      "province": "北京",
      "city": "延庆"
    },
    {
      "id": "41",
      "code": "",
      "area_code": "54419",
      "province": "北京",
      "city": "怀柔"
    },
    {
      "id": "42",
      "code": "",
      "area_code": "54596",
      "province": "北京",
      "city": "房山"
    },
    {
      "id": "43",
      "code": "",
      "area_code": "54499",
      "province": "北京",
      "city": "昌平"
    },
    {
      "id": "44",
      "code": "",
      "area_code": "54431",
      "province": "北京",
      "city": "通州"
    },
    {
      "id": "45",
      "code": "",
      "area_code": "54505",
      "province": "北京",
      "city": "门头沟"
    },
    {
      "id": "46",
      "code": "",
      "area_code": "54514",
      "province": "北京",
      "city": "丰台"
    },
    {
      "id": "47",
      "code": "",
      "area_code": "54433",
      "province": "北京",
      "city": "朝阳"
    },
    {
      "id": "48",
      "code": "",
      "area_code": "54399",
      "province": "北京",
      "city": "海淀"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» records|[object]|true|none||none|
|»» id|string|true|none||none|
|»» code|string|true|none||none|
|»» area_code|string|true|none||none|
|»» province|string|true|none||none|
|»» city|string|true|none||none|

## POST 获取实时天气

POST /get-weather

返回匹配条件的天气信息，匹配条件必须有一项且需要足够精准（市一级）

> Body Parameters

```json
{
  "province": "北京",
  "city": "顺义"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|view|header|string| no |如有，返回七天预报|
|body|body|object| no |none|
|» area_code|body|string| no |地区代码|
|» city|body|string| no |廊坊市应作廊坊|
|» province|body|string| no |北京市应作北京|
|» ip|body|string| no |ip目前并不稳定，请自行转换参数后请求|

> Response Examples

> 成功

```json
{
  "status": "success",
  "data": {
    "msg": "success",
    "code": 0,
    "data": {
      "location": {
        "id": "54398",
        "name": "顺义",
        "path": "中国, 北京, 顺义",
        "longitude": 116.62,
        "latitude": 40.13,
        "timezone": 8
      },
      "daily": [
        {
          "date": "2023/12/17",
          "high": -8,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "西南风",
          "dayWindScale": "微风",
          "low": -14,
          "nightText": "多云",
          "nightCode": 1,
          "nightWindDirection": "东南风",
          "nightWindScale": "微风"
        },
        {
          "date": "2023/12/18",
          "high": -4,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "东南风",
          "dayWindScale": "微风",
          "low": -13,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "西北风",
          "nightWindScale": "3~4级"
        },
        {
          "date": "2023/12/19",
          "high": -4,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "西北风",
          "dayWindScale": "3~4级",
          "low": -14,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "西北风",
          "nightWindScale": "微风"
        },
        {
          "date": "2023/12/20",
          "high": -6,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "北风",
          "dayWindScale": "3~4级",
          "low": -14,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "西北风",
          "nightWindScale": "3~4级"
        },
        {
          "date": "2023/12/21",
          "high": -7,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "西北风",
          "dayWindScale": "3~4级",
          "low": -14,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "北风",
          "nightWindScale": "微风"
        },
        {
          "date": "2023/12/22",
          "high": -4,
          "dayText": "晴",
          "dayCode": 0,
          "dayWindDirection": "北风",
          "dayWindScale": "微风",
          "low": -14,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "北风",
          "nightWindScale": "微风"
        },
        {
          "date": "2023/12/23",
          "high": -4,
          "dayText": "多云",
          "dayCode": 1,
          "dayWindDirection": "西风",
          "dayWindScale": "微风",
          "low": -12,
          "nightText": "晴",
          "nightCode": 0,
          "nightWindDirection": "西北风",
          "nightWindScale": "微风"
        }
      ],
      "now": {
        "precipitation": 0,
        "temperature": -11.5,
        "pressure": 1034,
        "humidity": 57,
        "windDirection": "9999",
        "windDirectionDegree": 9999,
        "windSpeed": 0,
        "windScale": "微风"
      },
      "alarm": [
        {
          "id": "11011341600000_20231217110700",
          "title": "顺义区气象台降级发布道路结冰黄色预警[III/较重]",
          "signaltype": "道路结冰",
          "signallevel": "黄色",
          "effective": "2023/12/17 11:10",
          "eventType": "11B21",
          "severity": "YELLOW"
        }
      ],
      "lastUpdate": "2023/12/17 20:35"
    }
  },
  "error": null
}
```

```json
{
  "status": "success",
  "data": {
    "weather": {
      "msg": "success",
      "code": 0,
      "data": {
        "location": {
          "id": "54398",
          "name": "顺义",
          "path": "中国, 北京, 顺义"
        },
        "now": {
          "precipitation": 0,
          "temperature": -11.5,
          "pressure": 1034,
          "humidity": 57,
          "windDirection": "9999",
          "windDirectionDegree": 9999,
          "windSpeed": 0,
          "windScale": "微风"
        },
        "alarm": [
          {
            "id": "11011341600000_20231217110700",
            "title": "顺义区气象台降级发布道路结冰黄色预警[III/较重]",
            "signaltype": "道路结冰",
            "signallevel": "黄色",
            "effective": "2023/12/17 11:10",
            "eventType": "11B21",
            "severity": "YELLOW"
          }
        ],
        "lastUpdate": "2023/12/17 20:35"
      }
    }
  },
  "error": null
}
```

```json
{
  "status": "error",
  "data": null,
  "error": "Error processing the request"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» records|[object]|true|none||none|
|»» id|string|true|none||none|
|»» code|string|true|none||none|
|»» area_code|string|true|none||none|
|»» province|string|true|none||none|
|»» city|string|true|none||none|
|» status|string|true|none||none|
|» data|object|true|none||none|
|»» msg|string|true|none||none|
|»» code|integer|true|none||none|
|»» data|object|true|none||none|
|»»» location|object|true|none||none|
|»»»» id|string|true|none||none|
|»»»» name|string|true|none||none|
|»»»» path|string|true|none||none|
|»»»» longitude|number|true|none||none|
|»»»» latitude|number|true|none||none|
|»»»» timezone|integer|true|none||none|
|»»» daily|[object]|true|none||none|
|»»»» date|string|true|none||none|
|»»»» high|integer|true|none||none|
|»»»» dayText|string|true|none||none|
|»»»» dayCode|integer|true|none||none|
|»»»» dayWindDirection|string|true|none||none|
|»»»» dayWindScale|string|true|none||none|
|»»»» low|integer|true|none||none|
|»»»» nightText|string|true|none||none|
|»»»» nightCode|integer|true|none||none|
|»»»» nightWindDirection|string|true|none||none|
|»»»» nightWindScale|string|true|none||none|
|»»» now|object|true|none||none|
|»»»» precipitation|integer|true|none||none|
|»»»» temperature|number|true|none||none|
|»»»» pressure|integer|true|none||none|
|»»»» humidity|integer|true|none||none|
|»»»» windDirection|string|true|none||none|
|»»»» windDirectionDegree|integer|true|none||none|
|»»»» windSpeed|number|true|none||none|
|»»»» windScale|string|true|none||none|
|»»» alarm|[object]|true|none||none|
|»»»» id|string|false|none||none|
|»»»» title|string|false|none||none|
|»»»» signaltype|string|false|none||none|
|»»»» signallevel|string|false|none||none|
|»»»» effective|string|false|none||none|
|»»»» eventType|string|false|none||none|
|»»»» severity|string|false|none||none|
|»»» lastUpdate|string|true|none||none|
|» error|null|true|none||none|


