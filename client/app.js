  
import QrScanner from 'https://cdn.jsdelivr.net/npm/qr-scanner@1.2.0/qr-scanner.min.js';


QrScanner.WORKER_PATH = 'qr-scanner.worker.min.js'

const videoElement = document.querySelector('#video');
const scanAreaElement = document.querySelector('#scanArea')

// CREDIT: https://freesound.org/people/Benboncan/sounds/62491/
const clickSound = new Audio('https://freesound.org/data/previews/62/62491_634166-lq.mp3');
// CREDIT: https://freesound.org/people/InspectorJ/sounds/403018/
const successSound = new Audio('https://freesound.org/data/previews/403/403018_5121236-lq.mp3');
// CREDIT: https://freesound.org/people/original_sound/sounds/372197/
const errorAudio = new Audio('https://freesound.org/data/previews/372/372197_6687700-lq.mp3');