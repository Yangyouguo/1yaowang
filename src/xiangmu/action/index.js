import * as type from './constant'
// import { constants } from 'fs';

export function action_head_requesting(config){
  // console.log('====================================');
  // console.log(config,'action');
  // console.log('====================================');
  return {
    type : type.HEADDATA_REQUESTING,
    url : config.url,
    method : config.method || 'get',
    data : config.data,
  }
}

export function action_head_requested(data){
  return {
    type : type.HEADDATA_REQUESTED,
    headData : data
  }
}

export function action_head_error(err){
  return {
    type : type.HEADDATA_REQUEST_ERROE,
    headData : err
  }
}


export function action_tail_requested(data){
  return {
    type : type.TAILDATA_REQUESTED,
    tailData : data
  }
}

export function action_tail_error(err){
  return {
    type : type.TAILDATA_REQUEST_ERROE,
    tailData : err
  }
}

export function action_catetory(){
  return {
    type : type.CATEGORY_LIST,
    catetorydata : {
      "data": [
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001447",
          "fatherId": -1,
          "icon": "",
          "id": 1001447,
          "name": "热门类目",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001276",
          "fatherId": -1,
          "icon": "",
          "id": 1001276,
          "name": "男科用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001284",
          "fatherId": -1,
          "icon": "",
          "id": 1001284,
          "name": "神经用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001303",
          "fatherId": -1,
          "icon": "",
          "id": 1001303,
          "name": "心脑用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001318",
          "fatherId": -1,
          "icon": "",
          "id": 1001318,
          "name": "肝胆用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001330",
          "fatherId": -1,
          "icon": "",
          "id": 1001330,
          "name": "呼吸道用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001339",
          "fatherId": -1,
          "icon": "",
          "id": 1001339,
          "name": "皮肤用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001357",
          "fatherId": -1,
          "icon": "",
          "id": 1001357,
          "name": "风湿骨科用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001373",
          "fatherId": -1,
          "icon": "",
          "id": 1001373,
          "name": "滋补调养用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001381",
          "fatherId": -1,
          "icon": "",
          "id": 1001381,
          "name": "消化道用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001393",
          "fatherId": -1,
          "icon": "",
          "id": 1001393,
          "name": "五官用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001408",
          "fatherId": -1,
          "icon": "",
          "id": 1001408,
          "name": "妇科用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001422",
          "fatherId": -1,
          "icon": "",
          "id": 1001422,
          "name": "内分泌用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001427",
          "fatherId": -1,
          "icon": "",
          "id": 1001427,
          "name": "肿瘤用药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000845",
          "fatherId": -1,
          "icon": "",
          "id": 1000845,
          "name": "对症找药",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000225",
          "fatherId": -1,
          "icon": "",
          "id": 1000225,
          "name": "滋补保健",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000147",
          "fatherId": -1,
          "icon": "",
          "id": 1000147,
          "name": "维生素钙",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000168",
          "fatherId": -1,
          "icon": "",
          "id": 1000168,
          "name": "隐形眼镜",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000352",
          "fatherId": -1,
          "icon": "",
          "id": 1000352,
          "name": "医疗器械",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001130",
          "fatherId": -1,
          "icon": "",
          "id": 1001130,
          "name": "成人用品",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001805",
          "fatherId": -1,
          "icon": "",
          "id": 1001805,
          "name": "药妆个护",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1000466",
          "fatherId": -1,
          "icon": "",
          "id": 1000466,
          "name": "母婴用品",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001734",
          "fatherId": -1,
          "icon": "",
          "id": 1001734,
          "name": "健康电器",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001563",
          "fatherId": -1,
          "icon": "",
          "id": 1001563,
          "name": "海外购",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        },
        {
          "appFooter": "",
          "appTop": "",
          "categoryAdInfo": null,
          "content": "catalogId=1001251",
          "fatherId": -1,
          "icon": "",
          "id": 1001251,
          "name": "宠物生活",
          "subTitle": "",
          "triggerType": 0,
          "type": 1,
          "wapFooter": "",
          "wapTop": ""
        }
      ],
      "rtn_code": "0",
      "rtn_ext": "",
      "rtn_ftype": "0",
      "rtn_msg": "",
      "rtn_tip": ""
    }
  }
}

export function action_subcatetory(data){
  
  return {
    type : type.SUBCATEGORY_LIST,
    subcatetorydata : data
  }
}
