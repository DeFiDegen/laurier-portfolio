import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const riftCube = '/videos/RiftCube.mp4'
const friends = '/images/Friends.JPEG'
const bandit = '/images/Bandit.JPEG'
const doNotPanic = '/images/DoNotPanic.JPEG'
const alienGarden = '/images/AlienGarden.PNG'
const clouds = '/images/Clouds.PNG'
const slimey = '/images/Slimey.PNG'


export default function MaisonCarousel() {
  return (
    <div id="MaisonCarousel">
      <div className="CarouselBanner NoPointer">
        ART
      </div>
      <Parallax pages={7}>
        <div className="Carousel">
            <ParallaxLayer>
              <div className="CarouselItem Left">
                <h6 className="CarouselText Left">RIFTCUBE</h6>
                <a target={"_blank"} rel="noreferrer" href='https://foundation.app/@DeFiDemon/rift-8263/1' className='CarouselLink'>
                  <video className="CarouselImage Left" src={riftCube} autoPlay loop muted></video>
                </a>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
              <div className="CarouselItem Right">
                <img className="CarouselImage Right" src={friends} alt="Friends"></img>
                <h6 className="CarouselText Right">FRIENDS</h6>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2}>
              <div className="CarouselItem Left">
                <h6 className="CarouselText Left">BANDIT</h6>
                <img className="CarouselImage Left" src={bandit} alt="Bandit"></img>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3}>
              <div className="CarouselItem Right">
                <img className="CarouselImage Right" src={doNotPanic} alt="Do Not Panic"></img>
                <h6 className="CarouselText Right">DO NOT PANIC</h6>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4}>
              <div className="CarouselItem Left">
                <h6 className="CarouselText Left">ALIEN GARDEN</h6>
                <img className="CarouselImage Left" src={alienGarden} alt="Alien Garden"></img>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={5}>
              <div className="CarouselItem Right">
                <img className="CarouselImage Right" src={clouds} alt="Clouds"></img>
                <h6 className="CarouselText Right">CLOUDS</h6>
              </div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={6}>
              <div className="CarouselItem Left">
                <h6 className="CarouselText Left">SLIMEY</h6>
                <img className="CarouselImage Left" src={slimey} alt="Slimey"></img>
              </div>
            </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}
