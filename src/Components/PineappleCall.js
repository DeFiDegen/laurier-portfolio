const entrepot = "/images/Entrepot.png"
const lowEndFuture = "/images/LowEndFuture.png"

export default function PineappleCall() {
  return (
    <div id="PineappleCall">
      <div className="Albums">
        <img src={entrepot} alt="Entrepot Album" className="Album" />
        <img src={lowEndFuture} alt="Low End Future Album" className="Album" />
      </div>
      <div className="PineappleAction">
        <p className="PText"><em>Currently available for bookings</em></p>
        <div className="BookButtonOuter">
          <div className="BookButton">
            <h4>Bookings</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
