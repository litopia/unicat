       var video;
       var localStream;
        var dataURL;

        //http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
        function setup() {
            navigator.myGetMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
            navigator.myGetMedia({ video: true }, connect, error);
        }

        function connect(stream) {
            video = document.getElementById("video");
            video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
            localStream = stream;
            video.play();
        }

        function disconnect() {
          video.src = null;
          localStream.stop();
        }

        function error(e) { console.log(e); }

        var openCam = document.getElementById("open-cam");
        openCam.addEventListener("click", setup);

        var camToggle = document.getElementById("cam-toggle");
        camToggle.addEventListener("click", setup);

        function captureImage() {
            appendImg();
            var canvas = document.createElement('canvas');
            canvas.id = 'hiddenCanvas';
            //add canvas to the body element
            document.body.appendChild(canvas);
            //add canvas to #canvasHolder
            document.getElementById('canvasHolder').appendChild(canvas);
            var ctx = canvas.getContext('2d');

            canvas.width = video.videoWidth / 4;
            canvas.height = video.videoHeight / 4;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            //save canvas image as data url
            dataURL = canvas.toDataURL();
            //set preview image src to dataURL
            document.getElementById('preview').src = dataURL;
            // place the image value in the text box
            document.getElementById('preview').value = dataURL;
            disconnect();
            hideCam();
        }

        function appendImg(){
          var main = document.getElementById('main');
          var newImg = document.createElement('figure');
          var canvasHolder = document.createElement('div')
          var preview = document.createElement('img');
          newImg.className="content-image";
          canvasHolder.id = "canvasHolder";
          preview.id = "preview";
          newImg.appendChild(canvasHolder);
          newImg.appendChild(preview);
          main.insertBefore(newImg, main.firstChild);
        }

        function hideCam(){
          var cam = document.getElementById('cam-js');
          cam.classList.remove('show')

        }

        //Bind a click to a button to capture an image from the video stream
        var el = document.getElementById("button");
        el.addEventListener("click", captureImage, false);
