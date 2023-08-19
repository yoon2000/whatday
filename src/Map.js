/*global kakao */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Map() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      mapscript();
    }
  }, [data]);

  const fetchData = async () => {
    const response = await fetch(
      "http://openapi.seoul.go.kr:8088/4559475a41796f6f373357696a616d/xml/busStopLocationXyInfo/1/100/"
    );
    const xmlString = await response.text();

    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlString, "text/xml");

    const obj = [];

    const apiData = xmlToJSON(xmlDOM).busStopLocationXyInfo;
    console.log(apiData.row);
    apiData.row.map((bus) => {
      obj.push({
        title: bus.STOP_NM["#text"]._value,
        lng: bus.XCODE["#text"]._value,
        lat: bus.YCODE["#text"]._value,
        id: bus.STOP_NO["#text"]._value,
      });
    });
    setData(obj);
  };

  // XML DOM을 JSON 객체로 변환하는 함수
  function xmlToJSON(xml) {
    const obj = {};

    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj["_value"] = xml.nodeValue.trim();
    }

    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] === "undefined") {
          obj[nodeName] = xmlToJSON(item);
        } else {
          if (typeof obj[nodeName].push === "undefined") {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJSON(item));
        }
      }
    }

    return obj;
  }

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 8,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    data.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "click",
        makeClickListener(map, marker, infowindow)
      );
    });
    function makeClickListener(map, marker, infowindow) {
      return function () {
        navigate("/detail", { state: null });
      };
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
