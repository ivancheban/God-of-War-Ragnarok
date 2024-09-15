var obj,
    source;

obj = document.createElement('video');
$(obj).attr('id', 'example_video_test');
$(obj).attr('class', 'video-js vjs-default-skin');
$(obj).attr('width', '640');
$(obj).attr('data-height', '264');
$(obj).attr('controls', ' ');
$(obj).attr('poster', '../images/trailer/trailer-bg.jpg');
$(obj).attr('preload', 'auto');
$(obj).attr('data-setup', '{}');

source = document.createElement('source');
$(source).attr('type', 'video/mp4');
$(source).attr('src', '../images/trailer/video.mp4');

$("#content").append(obj);
$(obj).append(source);