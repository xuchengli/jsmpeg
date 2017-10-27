const JSMpeg = require("./src/jsmpeg");

JSMpeg.VideoElement = require("./src/video-element");
JSMpeg.Player = require("./src/player");
JSMpeg.BitBuffer = require("./src/buffer");
JSMpeg.Source.Ajax = require("./src/ajax");
JSMpeg.Source.AjaxProgressive = require("./src/ajax-progressive");
JSMpeg.Source.WebSocket = require("./src/websocket");
JSMpeg.Demuxer.TS = require("./src/ts");
JSMpeg.Decoder.Base = require("./src/decoder");
JSMpeg.Decoder.MPEG1Video = require("./src/mpeg1");
JSMpeg.Decoder.MP2Audio = require("./src/mp2");
JSMpeg.Renderer.WebGL = require("./src/webgl");
JSMpeg.Renderer.Canvas2D = require("./src/canvas2d");
JSMpeg.AudioOutput.WebAudio = require("./src/webaudio");

module.exports = JSMpeg;
