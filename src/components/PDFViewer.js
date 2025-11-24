import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PDFViewer.css';

// 设置PDF.js worker（使用本地文件，避免CDN被拦截）
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PDFViewer = ({ onBack }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useBackup, setUseBackup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF加载错误:', error);
    if (!useBackup) {
      setUseBackup(true);
      setLoading(true);
      setError(null);
    } else {
      setError('PDF加载失败，请检查文件路径。如果问题持续存在，请联系技术支持。');
      setLoading(false);
    }
  };

  // 桌面端使用浏览器内置查看器；移动端使用 react-pdf 渲染

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setScale(1.0);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/tunnel-brochure.pdf";
    link.download = "铁路隧道智慧照明与监测系统.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    setIsMobile(mobile);
  }, []);

  return (
    <div className="pdf-viewer">
      <div className="pdf-header">
        <h3>铁路隧道智慧照明与监测系统</h3>
        {useBackup && (
          <p className="backup-notice">
            📄 正在使用备用PDF文件
          </p>
        )}
        <div className="pdf-controls">
          {/* {isMobile && (
            <button className="control-btn" onClick={onBack}>← 返回</button>
          )} */}
          {isMobile ? (
            <>
              <div className="page-controls">
                <button className="control-btn" onClick={goToPrevPage} disabled={pageNumber <= 1}>← 上一页</button>
                <span className="page-info">{pageNumber} / {numPages || '--'}</span>
                <button className="control-btn" onClick={goToNextPage} disabled={numPages ? pageNumber >= numPages : true}>下一页 →</button>
              </div>
              <div className="zoom-controls">
                <button className="control-btn" onClick={zoomOut}>🔍-</button>
                <span className="zoom-info">{Math.round(scale * 100)}%</span>
                <button className="control-btn" onClick={zoomIn}>🔍+</button>
                <button className="control-btn" onClick={resetZoom}>重置</button>
              </div>
            </>
          ) : (
            <div className="zoom-controls">
              <button className="control-btn" onClick={() => window.open(useBackup ? '/sample.pdf' : '/tunnel-brochure.pdf', '_blank')}>在新窗口打开</button>
              <button className="control-btn" onClick={handleDownload}>下载PDF</button>
            </div>
          )}
        </div>
      </div>

      <div className="pdf-container">
        {isMobile ? (
          <div className="pdf-document">
            <Document
              file={useBackup ? '/sample.pdf' : '/tunnel-brochure.pdf'}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              options={{ cMapUrl: '/cmaps/', cMapPacked: true, standardFontDataUrl: '/standard_fonts/' }}
              loading={
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p>正在加载PDF文件...</p>
                </div>
              }
            >
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(window.innerWidth - 48, 800)}
                  scale={isMobile ? undefined : scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            </Document>
          </div>
        ) : (
          <div className="pdf-document">
            <iframe
              title="brochure"
              className="pdf-iframe"
              src={(useBackup ? '/sample.pdf' : '/tunnel-brochure.pdf') + '#view=fitH'}
              onLoad={() => onDocumentLoadSuccess({ numPages })}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default PDFViewer;
