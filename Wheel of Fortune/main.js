var c = document.getElementById('wheel');
var ctx = c.getContext('2d');
var w, h, wheel;
    function init() {
        w = h = 420;
        c.width = w;
        c.height = h;
        wheel = new Wheel(w/2, h/2, 400/2);
        for (var i = 0; i < 6; i++) {
            wheel.addLabel(i);
        }
    wheel.spin();
    }
    function Wheel(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.angle = 0;
        this.angularspeed = 0;
        this.friction = 0.99;
        this.labels = [];
        this.running = false;
        this.spin = function () {
if (!this.running) {
        this.running = true;
        this.angle = 0;
        this.angularspeed = Math.random()*.45+.2;
        this.update();
            }
        };
        this.update = function () {
        this.angularspeed = this.angularspeed * this.friction;
        this.angle += this.angularspeed;
            if (this.angularspeed < .0005) {
        this.running = false;
        return;
            }
            ctx.clearRect(0, 0, w, h);
            wheel.draw();
            requestAnimationFrame(this.update.bind(this));
        };
        this.draw = function () {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            var a = 2*Math.PI/this.labels.length;
            for (var i = 0; i < this.labels.length; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.r, 0);
        ctx.stroke();
        ctx.rotate(a/2);
        ctx.font = '20px Arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(this.labels[i].text, 3*this.r/5, 0);
        ctx.rotate(a/2);
            }
            ctx.beginPath();
            ctx.arc(0, 0, this.r, 0, 2*Math.PI);
            ctx.stroke();
            ctx.rotate(-this.angle);
            ctx.translate(-this.x, -this.y);
        };
    this.addLabel = function (text) {
        this.labels.push({
    text: text
        });
    };
    }
    init();