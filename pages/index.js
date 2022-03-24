import Welcome from "../components/sections/Welcome";
import Utilities from "../components/sections/Utilities";
import Traits from "../components/sections/Traits";
import Roadmap from "../components/sections/Roadmap";
import Faq from "../components/sections/Faq";
import Community from "../components/sections/Community";
import Canvas from "../components/Circle";
import ResponsiveApp from "../components/sections/MainNav";


const draw = (ctx) => {
  var maxSize = 10;
  var minSize = 5;
  var maxX = ctx.canvas.width;
  var maxY = ctx.canvas.height;

  function drawFilledCircle(size, xPos, yPos, colour) {
    //draw circle
    ctx.beginPath();
    ctx.arc(xPos, yPos, size + Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
  }

  const randoms = () => {
    var size = Math.ceil(Math.random() * maxSize);
    size = Math.max(size, minSize);
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    var colour = "rgba(0, 166, 241, 0.4)";
    return { size: size, x: x, y: y, colour: colour };
  };

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < 20; i++) {
    var r = randoms();
    drawFilledCircle(r.size, r.x, r.y, r.colour);
  }
};

export default function Index() {
  return (
    <>
      <section className="first-view">
        <Canvas draw={draw} className="canvas d-none" />
        <ResponsiveApp />

        <Welcome />
      </section>
      <Utilities />
      <Traits />
      <Roadmap />
      <Faq />
      <Community />
    </>
  );
}
