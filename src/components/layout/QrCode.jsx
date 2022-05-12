import "./css/block3.css"
import qrPic from '../pic/qrcode.jpg'


function QrCode() {
  return (
    <div className="body-qrcode">
        <img src={qrPic} alt="qr-code"className="qr-img"/>
    </div>
  )
}
export default QrCode;