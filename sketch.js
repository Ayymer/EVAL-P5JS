function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();
  translate(width/2, height/2);
  
  let rond = 4;
  let radius = 50;
  let taille = 16;
  let taille2 = 9;
  let radius2 = 55;
  
  for (let i = 0; i < 20; i++) {
    let angle = (360 / rond) * i + frameCount;
    let x = radius * cos(angle * PI / 180);
    let y = radius * sin(angle * PI / 180);
    let t = taille * (1 + i / 20);
    ellipse(x, y, t, t);
  }

  for (let i = 0; i < 10; i++) {
    let angle = (360 / rond) * i + frameCount*2;
    let x = radius * cos(angle * PI / 180);
    let y = radius * sin(angle * PI / 180);
    let t = taille * (2 + i / 20);
    ellipse(x, y, t, t);
  }

  for (let i = 0; i < 10; i++) {
    let angle = (360 / rond) * i + frameCount*1.5;
    let x = radius2 * cos(angle * PI / 180);
    let y = radius2 * sin(angle * PI / 180);
    let t = taille2 * (2 + i / 20);
    ellipse(x, y, t, t);
  }

}