import { Html } from "@react-three/drei";
import useMobileDetect from "use-mobile-detect-hook";

export const podcasts = [
  {
    title: `Guy Ritchie "You Must Be The Master of Your Own Kingdom`,
    url: `https://www.youtube.com/embed/rd3yeX1-SaM`,
    position: [-700, 400, -1000],
  },
  {
    title: `David Lee Roth on the Origins of Van Halen`,
    url: `https://www.youtube.com/embed/BoxXHTUPnJA`,
    position: [500, 400, -1000],
  },
  {
    title: `Chuck Palahniuk on the Impact of Fight Club`,
    url: `https://www.youtube.com/embed/GCuSDH-YEKI`,
    position: [-1500, 400, -100],
  },
  {
    title: `Rehearsal is More Important Than the Show | Joe Rogan & David Lee Roth`,
    url: `https://www.youtube.com/embed/8obt-6jXXlQ`,
    position: [-500, 400, 800],
  },
  {
    title: `How to Know if You Can be Hypnotized w/Andrew Huberman`,
    url: `https://www.youtube.com/embed/KJ7KjnK5GfA`,
    position: [1080, 400, 0],
  },
  {
    title: `Travis Barker's Recovery From Near Fatal Plane Crash`,
    url: `https://www.youtube.com/embed/onXoWe2_eiU`,
    position: [1080, 400, 1600],
  },
];

const Portal = ({ podcast }) => {
  const detectMobile = useMobileDetect();

  const resolution = detectMobile.isMobile() ? [354, 200] : [560, 315];

  return (
    <Html position={podcast.position}>
      <p>{podcast.title}</p>
      <iframe
        width={resolution[0]}
        height={resolution[1]}
        src={podcast.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Html>
  );
};

export default Portal;
