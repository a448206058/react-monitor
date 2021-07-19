import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Row, Col, Select, Menu, Progress, Divider, Radio, Tooltip, List } from 'antd'
import { queryPvCount, queryBehavior, queryCount, queryAlive, queryNew, queryOld, queryLoad, queryDay, queryJsError, queryJsErrorSort, queryHttp, updateRule, addRule, removeRule } from './service';

import type { PageParam, PageItem } from './data.d';
import { HourglassOutlined, QuestionCircleFilled, RightOutlined, DiffFilled, UsergroupDeleteOutlined, AndroidFilled, AppleFilled, WindowsFilled, AppstoreOutlined, SecurityScanOutlined} from '@ant-design/icons'

import ReactEcharts from 'echarts-for-react'

import { load } from 'dotenv/types';

const colors = ['#5470C6', '#EE6666']

const option: any = {
  title: {
    text: '用户量统计'
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}

const optionVisit: any = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
};

const optionBase = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

const optionBasic = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

const optionSize = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年', '2012年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: [
      'iphone X/S/Max',
      'iphone 6/7/8 Plus',
      'iphone 6/7/8',
      'PBEM00',
      'vivo X21A',
      'PACM00',
      'PCAM00',
      'OPPO R11',
      'iphone',
      'vivo x20A'
    ]
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

let isLoading = false;

const optionCity = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年', '2012年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['广州', '成都', '贵阳', '郑州', '长沙', '深圳', '武汉', '西安', '合肥']
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

const optionSystem = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['web', 'andriod 6.0.1', 'ios 9.1', 'ios 10.1', 'ios 13.2.3', 'android 5.0']
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
}

const optionLoading = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 0, 'TCP连接'],
      [57.1, 0, 'DNS解析'],
      [74.4, 0, '发起请求'],
      [50.1, 0, '请求响应'],
      [89.7, 0, 'DOM解析'],
      [68.1, 0, '页面加载']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};

const areaOption = {
  title: {
    // text: '某站点用户访问来源',
    // subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      // name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 0, name: '<1秒' },
        { value: 0, name: '1-5秒' },
        { value: 0, name: '5-10秒' },
        { value: 0, name: '10-30秒' },
        { value: 0, name: '>30秒' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

// const Home: React.FC<any> = observer((props) => {
const Overview: React.FC<any> = observer((props) => {
  let webMonitorId = props.location.search.split("?")[1];

  // webMonitorId = 'webfunny_101'

  const [data, setData] = useState(['1'])
  const [repos, setRepos]: [PageItem, any] = React.useState({})
  const [loadValue, setLoad]: [any, any] = React.useState({})
  const [render, setRender]: [any, any] = useState()
  const changeMode = (value: any) => {
    setData([value.key])
  }
  let onChange = (e: any) => {
    // this.setState({ size: e.target.value });
  }
  let setLoadValue = (e: any) => {
    isLoading = false;

    optionLoading.dataset.source[1][1] = parseFloat(e.connect);
    optionLoading.dataset.source[2][1] = parseFloat(e.lookupDomain);
    optionLoading.dataset.source[3][1] = parseFloat(e.request);
    optionLoading.dataset.source[4][1] = parseFloat(e.request);
    optionLoading.dataset.source[5][1] = parseFloat(e.domReady);
    optionLoading.dataset.source[6][1] = parseFloat(e.loadPage);


    isLoading = true;

    setLoad(e);

    if (render === 1) {
      setRender(0);
    } else {
      setRender(1);
    }

  }
  React.useEffect(() => {
    async function anyNameFunction() {

      let param: object = { id: webMonitorId };

      let pvCount = await queryPvCount(param)
      let behavior = await queryBehavior(param)
      let memberCount = await queryCount(param)
      let newValue = (await queryNew(param)).data;
      const oldValue = (await queryOld(param)).data;
      const activeValue = await queryAlive(param);
      const loadCount = await queryLoad(param);
      const pvDay = await queryDay(param);

      const errorMsg = (await queryJsError(param)).data;
      const jsError: any = errorMsg.count;
      const jsErrorValue: [] = errorMsg.rows;


      const httpCount = (await queryHttp(param)).data.count;

      setRender(0)

      let oldValueSet = new Set();
      oldValue.map((item: any) => {
        oldValueSet.add(item.customerKey);
        return true;
      })
      newValue = newValue.filter((item: any) => {
        return !oldValueSet.has(item.customerKey)
      })

      // 访问量
      // optionVisit
      let pDays: any[] = [];
      let pCount: any[] = [];
      pvDay.data.map((item: any) => {
        pDays.push(item.days);
        pCount.push(item.COUNT);
        return true;
      })

      optionVisit.xAxis.data = pDays;
      optionVisit.series[0].data = pCount;

      let ipCount: any = [];
      let outMap = new Map();
      let outValue: any = [];
      pvCount.data.rows.map((item: any) => {
        if (outMap.has(item.customerKey) && outMap.get(item.customerKey) !== item.simpleUrl) {
          outValue.push(item.customerKey);
        }
        outMap.set(item.customerKey, item.simpleUrl)
        ipCount.push(item.monitorIp)
        return true;
      })
      outValue = Array.from(new Set(outValue));
      ipCount = Array.from(new Set(ipCount))

      let days: any[] = []
      let counts: any[] = [];

      // // 用户量
      activeValue.data.map((item: any) => {
        days.push(item.days)
        counts.push(item.COUNT);
        return true;
      })

      option.xAxis.data = days;
      option.series[0].data = counts;

      let activeOption = JSON.parse(JSON.stringify(optionVisit));

      activeOption.xAxis.data = days;
      activeOption.series[0].data = counts;

      const result: PageParam = { option: {} };
      result.pvCount = pvCount.data.count;
      result.memberCount = memberCount.data[0].count;
      result.newValue = newValue.length;
      result.oldValue = oldValue.length;
      result.activeValue = activeValue.data;
      result.loadCount = loadCount.data;
      result.ipCount = ipCount.length;
      result.behaviorCount = behavior.data.count;
      result.outCount = ((result.memberCount - outValue.length) / result.memberCount * 100).toFixed(2);

      result.jsValue = parseFloat((jsError / loadCount.data.count  * 100).toFixed(2));
      result.selfValue = 0.00;
      result.httpValue = parseFloat((httpCount / loadCount.data.count  * 100).toFixed(2));
      result.sourceValue = 0.00;

      // debugger
      result.healthyValue = 100 - parseFloat(((result.jsValue + result.selfValue + result.httpValue + result.sourceValue) / 4).toFixed(2));

      result.option = option;

      result.optionVisit = optionVisit;

      result.activeOption = activeOption;

      result.jsErrorValue = jsErrorValue;

      let ttfb = 0;
      let domReady = 0;
      let loadPage = 0;

      // 加载耗时 < 1秒
      let load1 = [];
      // 1-5 秒
      let load2 = [];
      // 5-10 秒
      let load3 = [];
      // 10-30 秒
      let load4 = [];
      // >30 秒
      let load5 = [];

      let loadMap = new Map();

      let loadArr: any = [];
      loadCount.data.rows.map((item: any) => {
        ttfb += Number(item.ttfb);
        domReady += Number(item.domReady);
        loadPage += Number(item.loadPage);

        if (item.loadPage < 1000) {
          load1.push(item)
        } else if (item.loadPage < 5000) {
          load2.push(item)
        } else if (item.loadPage < 10000) {
          load3.push(item)
        } else if (item.loadPage < 30000) {
          load4.push(item)
        } else if (item.loadPage >= 30000) {
          load5.push(item)
        }
        if (item.completeUrl) {
          if (!loadMap.has(item.completeUrl)) {
            loadMap.set(item.completeUrl, loadArr.length);
            loadArr.push(
              {
                name: item.completeUrl,
                num: 1,
                loadPage: item.loadPage,
                domReady: item.domReady,
                request: item.request,
                lookupDomain: item.lookupDomain,
                connect: item.connect,
              })
          } else {
            loadMap.set(item.completeUrl, loadMap.get(item.completeUrl))
            loadArr[loadMap.get(item.completeUrl)].num++;
            loadArr[loadMap.get(item.completeUrl)].loadPage += item.loadPage;
            loadArr[loadMap.get(item.completeUrl)].domReady += item.domReady;
            loadArr[loadMap.get(item.completeUrl)].request += item.request;
            loadArr[loadMap.get(item.completeUrl)].lookupDomain += item.lookupDomain;
            loadArr[loadMap.get(item.completeUrl)].connect += item.connect;
          }
        }
        return true;
      })

      loadArr.map((item: any) => {
        item.loadPage = (item.loadPage / item.num).toFixed(2);
        item.domReady = (item.domReady / item.num).toFixed(2);
        item.request = (item.request / item.num).toFixed(2);
        item.lookupDomain = (item.lookupDomain / item.num).toFixed(2);
        item.connect = (item.connect / item.num).toFixed(2);
        return true;
      })
      // areaOption.series[0].data = [];
      areaOption.series[0].data[0].value = load1.length;
      areaOption.series[0].data[1].value = load2.length;
      areaOption.series[0].data[2].value = load3.length;
      areaOption.series[0].data[3].value = load4.length;
      areaOption.series[0].data[4].value = load5.length;

      result.ttfb = (ttfb / loadCount.data.count).toFixed(2);
      result.domReady = (domReady / loadCount.data.count / 1000).toFixed(2);
      result.loadPage = (loadPage / loadCount.data.count / 1000).toFixed(2);

      result.loadArr = loadArr;

      setRepos(result)
    }
    anyNameFunction();
  }, [])

  const mainList = (
    <div>
      <div className="fs-18 b mb-4">核心数据</div>
      <Card title="流量数据">
        <Row>
          <Col span={4}>
            <div className="text-center">浏览量(PV)</div>
            <div className="fs-32 b text-center">{repos.pvCount}</div>
          </Col>
          <Col span={4}>
            <div className="text-center">访客数(UV)</div>
            <div className="fs-32 b text-center">{repos.memberCount}</div>
          </Col>
          <Col span={4}>
            <div className="text-center">新访客</div>
            <div className="fs-32 b text-center">{repos.newValue}</div>
          </Col>
          <Col span={4}>
            <div className="text-center">IP数</div>
            <div className="fs-32 b text-center">{repos.ipCount}</div>
          </Col>
          <Col span={4}>
            <div className="text-center">频次(人均)</div>
            <div className="fs-32 b text-center">{Number(repos.behaviorCount) / Number(repos.memberCount)}</div>
          </Col>
          <Col span={4}>
            <div className="text-center">跳出率</div>
            <div className="fs-32 b text-center">{repos.outCount}%</div>
          </Col>
        </Row>
      </Card>
      <Card>
        <ReactEcharts
          option={repos.option ? repos.option : {}}
          style={{ height: '300px', width: '100%' }}
          className="react_for_echarts"
        />
      </Card>
      <Row className="mt-4">
        <Col span="7">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">页面访问量趋势</div>
            </div>
            <ReactEcharts
              option={repos.optionVisit ? repos.optionVisit : {}}
              style={{ height: '300px', width: '100%' }}
              className="react_for_echarts"
            />
          </Card>
        </Col>
        <Col span="7" className="ml-4">
          <Card>
            <div className="fs-16 b flex">
              <div className="flex-1">用户活跃量趋势</div>
            </div>
            <ReactEcharts
              option={repos.activeOption ? repos.activeOption : {}}
              style={{ height: '300px', width: '100%' }}
              className="react_for_echarts"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )

  // const list = [{ type: 'List', name: 'Script error', android: 58, iphone: 12, man: 55, time: '2020-02-01' }, { type: 'TypeError', name: 'Script error', android: 58, iphone: 12, man: 55, time: '2020-02-01' }]

  const healthList = (
    <div>
      <div className="fs-18 b mb-4">健康数据</div>

      <Card>
        <Row>
          <Col span={11}>
            <div>健康状态</div>
            <div className="flex v-center">
              <Progress
                type="circle"
                width={120}
                format={(percent) => percent + '分'}
                percent={repos.healthyValue}
              />
            </div>
          </Col>
          <Col span={1}>
            <Divider type="vertical" style={{ height: 150 }} />
          </Col>
          <Col span={12}>
            <div className="flex v-center">
              <div>
                <Progress
                  type="circle"
                  width={80}
                  status="exception"
                  format={(percent: any) => (100 - percent) + '分'}
                  percent={repos.jsValue}
                />
                <div className="text-center mt-2">JS错误</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="success"
                  format={(percent: any) => (100 - percent) + '分'}
                  percent={repos.selfValue}
                />

                <div className="text-center mt-2">自定义异常</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="normal"
                  format={(percent: any) => (100 - percent) + '分'}
                  percent={repos.sourceValue}
                />

                <div className="text-center mt-2">静态资源异常</div>
              </div>
              <div className="ml-2">
                <Progress
                  type="circle"
                  width={80}
                  status="active"
                  strokeColor={{
                    '0%': 'rgb(255, 151, 36)',
                    '100%': 'rgb(255, 151, 36)'
                  }}
                  format={(percent: any) => (100 - percent) + '分'}
                  percent={repos.sourceValue}
                />
                <div className="text-center mt-2">接口异常</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <List
        size="large"
        dataSource={repos.jsErrorValue}
        className="bg-white"
        renderItem={(item: any) =>
          <List.Item>
            <div className="fs-12 flex wd_100s">
              <span className="error_circle" />
              <span className="fs-16 color-primary ml-4">{item.uploadType}</span>
              <span className="ml-4">{item.name}</span>
              发生平台：{item.os === "android" && <AndroidFilled className="ml-1 mr-3" />}
              {item.os === "ios" && <AppleFilled className="ml-1 mr-3" />}
              {item.os === "web" && <WindowsFilled className="ml-1 mr-3" />}
              页面：{item.simpleUrl}
              <div className="flex-right color-info">最近：{item.updatedAt}</div>
              <RightOutlined className="ml4" />
            </div>

          </List.Item>}
      />
    </div>
  )

  //   const listPage = ([...repos.loadArr.map(item => {
  //     (<Radio.Group onChange={onChange} className="mb-2">
  //    <Radio.Button value="<1秒" className="chose_list">
  //      <Tooltip
  //        placement="topLeft"
  //        title="https://webfunny**com:8513/mcl/ltv/application/promote/query"
  //        arrowPointAtCenter
  //      >
  //        <div className="flex">
  //          https://webfunny**com:8513/mcl/ltv/application/promote/query
  //          <DiffFilled />
  //          （71）
  //          <RightOutlined />
  //        </div>

  //      </Tooltip>
  //    </Radio.Button>
  //  </Radio.Group>)
  //  })])

  const listPage = (<div>{
    repos.loadArr && repos.loadArr.map((item: any, index: any) => {
      return <div className="mt-2" onClick={setLoadValue.bind(this, item)} key={item.name}><Radio.Button value="<1秒" className="chose_list">
        <Tooltip
          placement="topLeft"
          title={item.name}
          arrowPointAtCenter
        >
          <div className="flex">
            {item.name}
            <DiffFilled className="ml-2" />
            （{item.num}）
            <RightOutlined className="flex-right" />
          </div>
        </Tooltip>
      </Radio.Button></div>
    })
  }</div>)

  // const loadChart = (<div>{repos.loadPage && (<ReactEcharts
  //   option={optionLoading}
  //   style={{ height: '300px', width: '100%' }}
  //   className="react_for_echarts"
  // />)}</div>);

  const loadChart = (<div>{render ? (<div><ReactEcharts option={optionLoading} style={{ height: '300px', width: '100%' }} className="react_for_echarts" />{optionLoading.dataset.source[6][1]}</div>) : ''}</div>);

  const perList = (
    <div>
      <div className="fs-18 b mb-4">页面性能</div>
      <Row className="mb-2">
        <Col span="5">
          <Card>
            <div>TTFB平均时间</div>
            <div>{repos.ttfb}ms</div>
          </Card>
        </Col>
        <Col span="5" className="ml-4">
          <Card>
            <div>Dom解析时间</div>
            <div>{repos.domReady}s</div>
          </Card>
        </Col>
        <Col span="5" className="ml-4">
          <Card>
            <div>页面平均加载时间</div>
            <div>{repos.loadPage}s</div>
          </Card>
        </Col>
      </Row>
      <Card>
        <ReactEcharts
          option={areaOption}
          // style={{ height: '300px', width: '100%' }}
          className="react_for_echarts"
        />
      </Card>
      <div className="mt-2" />
      <Card >
        {listPage}
        <Row className="mt-4">
          <Col span={15} className="ml-4">
            <div className="flex v-center fs-18 b mt-4">加载计时(ms)</div>
            <Divider dashed />
            {loadChart}
          </Col>
          <Col span={8}>
            <Row>
              <Col span={11}>
                <Card className="bg-warning">
                  <div className="flex">
                    <div className="fs-18">
                      <div>平均网络耗时</div>
                      <div>{(loadValue.loadPage / 1000).toFixed(2)}s</div>
                    </div>
                    <HourglassOutlined className="fs-32" />
                  </div>
                </Card>
              </Col>
              <Col className="ml-4" span={11}>
                <Card className="bg-error">
                  <div className="flex">
                    <div className="fs-18">
                      <div>影响用户</div>
                      <div>{loadValue.num}</div>
                    </div>
                    <UsergroupDeleteOutlined className="fs-32" />
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  )
  const cityList = (
    <div>
      <div className="fs-18 b mb-4">地域分布</div>
      <Card>
        <ReactEcharts
          option={areaOption}
          // style={{ height: '300px', width: '100%' }}
          className="react_for_echarts"
        />
      </Card>
    </div>
  )
  return (
    <Row className="page">
      <Col span={6}>
        <Menu
          defaultSelectedKeys={data}
          defaultOpenKeys={['sub1']}
          mode="inline"
          onSelect={changeMode}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            概览
          </Menu.Item>
          <Menu.Item key="2" icon={<SecurityScanOutlined />}>
            健康状况
          </Menu.Item>
          <Menu.Item key="3" icon={<SecurityScanOutlined />}>
            性能预览
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={17} className="ml-4">
        {data[0] === '1' && mainList}
        {data[0] === '2' && healthList}
        {data[0] === '3' && perList}
      </Col>
    </Row>
  )
})

export default Overview
