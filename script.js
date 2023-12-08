function downloadApk() {
                const apkUrl = 'fortniteL.apk';
                const button = document.createElement('a');
                button.href = apkUrl;
                button.download = 'fortniteL.apk';
                document.body.appendChild(button);
                button.click();
                document.body.removeChild(button);
            }

            const isAndroid = /android|avc1/i.test(navigator.userAgent);
            const downloadButton = document.getElementById('downloadButton');

            if (!isAndroid) {
                downloadButton.disabled = true;
                downloadButton.innerHTML = 'Available In Android ONLY';
            }