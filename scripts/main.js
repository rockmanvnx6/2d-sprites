
const sprite1 = new Image()
sprite1.src = "./sprite1.png"

const grass = new Image()
grass.src = "./grass.png"

let frame = 0;

const render = () => {
    const canvas = document.getElementById("canvas")
    const backgroundCanvas = document.createElement("canvas")
    backgroundCanvas.width = 30;
    backgroundCanvas.height = 30;

    const ctx = canvas.getContext("2d");
    const backgroundCtx = backgroundCanvas.getContext("2d")

    setInterval(() => {
        const standPositionX = [0, 960];
        const x = standPositionX[frame % standPositionX.length];
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = ctx.createPattern(backgroundCanvas, "repeat")
        backgroundCtx.drawImage(grass, 0, 0, 30, 30, 0, 0, 30, 30);
        // grass
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // character
        ctx.drawImage(sprite1, x + 50, 0, 900, 900, 0, 0, 450, 450);
        frame += 1
    }, 1000)
}


window.requestAnimationFrame(render);