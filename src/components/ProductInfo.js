import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const features = [
  { icon: '💡', title: '智慧照明', description: '隧道智能照明系统，节能环保，可按需调光与远程控制' },
  { icon: '🛡️', title: '安全监测', description: '覆盖隧道全域风险监测，包括渗漏水、裂缝、结构变形等' },
  { icon: '⚙️', title: '故障诊断', description: '具备电流、电压、温度、振动等设备状态分析与故障预警功能' },
  { icon: '🌿', title: '绿色节能', description: '低成本高效率照明控制，降低能耗与维护成本' },
  { icon: '📶', title: '多源融合', description: '融合物联网、大数据、传感等技术，实现多维度数据感知' },
  { icon: '🤖', title: '自主可控', description: '系统软硬件完全自主研发，安全可靠，技术可控' },
  { icon: '🔋', title: '高可靠性', description: '适用于高湿、高压、高电磁干扰等复杂隧道环境' },
  { icon: '🖥️', title: '平台可视化', description: '提供统一监测平台，实时显示照明与监测数据，支持云端分析' }
];

  const specifications = [
  { label: '监测范围', value: '隧道照明、渗漏水、结构变形、振动、环境参数等' },
  { label: '数据采集', value: '多传感器融合采集，支持有线与无线传输' },
  { label: '智能算法', value: '异常检测、趋势分析与风险预警' },
  { label: '通信方式', value: '4G / Wi-Fi / 光纤 / 工业以太网' },
  { label: '系统接口', value: '开放式API，兼容第三方监测平台' },
  { label: '平台特性', value: '支持大屏可视化、移动端远程监控' },
  { label: '部署环境', value: '适应高湿、高温、高压、高振动等环境' },
  { label: '能源效率', value: '照明节能率 ≥30%，系统智能调控' },
  { label: '安全保障', value: '设备防护等级高，具备风险预警与应急联动机制' },
  { label: '评审结果', value: '通过专家组验收，技术成果达到国际先进水平' }
];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/Tunnel.png');

  const handleImageError = () => {
    setShowImage(false);
  };


  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>铁路隧道智慧照明与监测系统</h2>
        <p className="hero-description">
          铁路隧道智慧照明与监测系统将隧道照明与风险判识，安全监测预警相结合，实现智慧照明、节能绿色，同时覆盖隧道内及隧道口安全实时状态监测、重大风险及时预警。提高铁路隧道巡检维护的智能化水平，保障铁路安全运营。
        </p>
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="铁路隧道智慧照明与监测系统"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">铁路隧道智慧照明与监测系统（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
