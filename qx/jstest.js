(function () {
  const regex = /^https:\/\/pingtas\.qq\.com\/webview\/pingd.*?arg=.*?pfurl%3D(.*?)%26/;
  const currentUrl = window.location.href;
  const match = currentUrl.match(regex);
  if (match && match[1]) {
    try {
      let encodedUrl = match[1];
      let decodedUrl = decodeURIComponent(decodeURIComponent(encodedUrl));

      console.log('Redirecting to:', decodedUrl);

      window.location.href = decodedUrl;
    } catch (e) {
      console.error('URL解码失败:', e);
      document.body.innerHTML = '<h2>无法解析目标链接，重定向失败。</h2>';
    }
  } else {
    console.warn('在当前URL中未找到需要重定向的目标地址。');
  }
})();