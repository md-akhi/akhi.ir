(this.webpackJsonplinktree = this.webpackJsonplinktree || []).push([
    [0],
    [, , , , , , , , , , , , function (n, e, t) {
        n.exports = t(30)
    }, , , , , function (n, e, t) {}, , , , , function (n, e, t) {
        n.exports = t.p + "static/media/facebook.aef7327c.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/github.874f9890.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/youtube.285e53e0.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/instagram.bb982d13.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/linkedin-in.67fdfcdc.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/react.05767691.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/twitter.5d0a2e9c.svg"
    }, function (n, e, t) {
        n.exports = t.p + "static/media/whatsapp.f327023d.svg"
    }, function (n, e, t) {
        "use strict";
        t.r(e);
        var r = t(0),
            a = t.n(r),
            o = t(5),
            i = t.n(o),
            c = (t(17), t(1)),
            u = t(2);

        function l() {
            var n = Object(c.a)(["\n  margin: 30px auto;\n  max-width: 320px;\n  width: 80%;\n"]);
            return l = function () {
                return n
            }, n
        }
        var s = u.a.div(l()),
            f = "#fff",
            m = "#4267B2",
            d = "#C13584",
            p = "#FF0000",
            g = "#4AC959",
            b = "#2867B2",
            k = "#1DA1F2",
            h = "#24292e",
            v = "#366251",
            w = "#FF8300",
            x = t(10);

        function E() {
            var n = Object(c.a)(["\n  color: ", ";\n  padding: 20px 0;\n"]);
            return E = function () {
                return n
            }, n
        }

        function C() {
            var n = Object(c.a)(["\n  height: 20px;\n  margin: 0 5px;\n  padding: 5px;\n"]);
            return C = function () {
                return n
            }, n
        }

        function _() {
            var n = Object(c.a)(["\n  align-items: center;\n  background: ", ";\n  border-radius: 3px;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  margin: 10px auto;\n  text-decoration: none;\n  width: 100%;\n  \n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n}\n"]);
            return _ = function () {
                return n
            }, n
        }
        var j = u.a.a(_(), (function (n) {
                return n.backgroundColor ? n.backgroundColor : v
            }), (function (n) {
                return Object(x.a)("0.1", n.backgroundColor)
            })),
            O = u.a.img(C()),
            y = u.a.p(E(), f);

        function F(n) {
            var e = n.icon,
                t = n.name,
                r = n.backgroundColor,
                o = n.link;
            return a.a.createElement(j, {
                backgroundColor: r,
                href: o,
                target: "_blank"
            }, a.a.createElement(O, {
                src: e
            }), a.a.createElement(y, null, t))
        }

        function D() {
            var n = Object(c.a)(["\n  font-size: 1em;\n  font-family: sans-serif\n"]);
            return D = function () {
                return n
            }, n
        }

        function A() {
            var n = Object(c.a)(["\n  font-size: 1.5em;\n  font-family: sans-serif;\n"]);
            return A = function () {
                return n
            }, n
        }

        function z() {
            var n = Object(c.a)(["\n  background-image: url( ", ");\n  background-size: cover;\n  border-radius: 50%;\n  height: 130px;\n  margin: 0 auto;\n  width: 130px;\n"]);
            return z = function () {
                return n
            }, n
        }

        function B() {
            var n = Object(c.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-rows: 3fr 1fr 1fr;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n"]);
            return B = function () {
                return n
            }, n
        }
        var I = u.a.div(B()),
            J = u.a.div(z(), (function (n) {
                return n.background
            })),
            S = u.a.h1(A()),
            Y = u.a.p(D());

        function G(n) {
            var e = n.picture,
                t = n.title,
                r = n.subtitle;
            return a.a.createElement(I, null, a.a.createElement(J, {
                background: e
            }), a.a.createElement(S, null, " ", t, " "), a.a.createElement(Y, null, " ", r, " "))
        }
        var L = t(22),
            P = t(23),
            T = t(24),
            W = t(25),
            X = t(26),
            K = t(27),
            M = t(28),
            U = t(29);

        function V() {
            return a.a.createElement(s, null, a.a.createElement(G, {
                picture: "https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2",
                title: "Daniel Gomes Pereira",
                subtitle: "A Brazilian Frontend Developer"
            }), a.a.createElement(F, {
                link: "https://www.facebook.com/danielgomesp",
                icon: L,
                name: "Facebook",
                backgroundColor: m
            }), a.a.createElement(F, {
                link: "https://www.instagram.com/danielgomesp/",
                icon: W,
                name: "Instagram",
                backgroundColor: d
            }), a.a.createElement(F, {
                link: "https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber",
                icon: T,
                name: "Youtube",
                backgroundColor: p
            }), a.a.createElement(F, {
                link: "https://github.com/Danielgomesp",
                icon: P,
                name: "Github",
                backgroundColor: h
            }), a.a.createElement(F, {
                link: "https://wa.me/5533999640132",
                icon: U,
                name: "Whatsapp",
                backgroundColor: g
            }), a.a.createElement(F, {
                link: "https://github.com/Danielgomesp",
                icon: K,
                name: "Site Oficial",
                backgroundColor: w
            }), a.a.createElement(F, {
                link: "https://www.linkedin.com/in/danielgomesp/",
                icon: X,
                name: "LinkedIn",
                backgroundColor: b
            }), a.a.createElement(F, {
                link: "https://twitter.com/danielgoper",
                icon: M,
                name: "Twitter",
                backgroundColor: k
            }))
        }
        var q = function () {
            return a.a.createElement(V, null)
        };
        i.a.render(a.a.createElement(q, null), document.getElementById("root"))
    }],
    [
        [12, 1, 2]
    ]
]);
//# sourceMappingURL=main.30796aa7.chunk.js.map