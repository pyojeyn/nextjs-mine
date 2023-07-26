import '@/styles/globals.css'
import '@reach/dialog/styles.css' // 부트스트랩 또는 nprogress 와 같은 전역 스타일시트의 경우 pages/_app.js 내부에서 import  해야 한다.

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
