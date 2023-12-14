import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
    getStorage,
    ref,
    uploadBytesResumable
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD-nPtV9JMX5y32rT3hzGvrRcwircWG28U",
    authDomain: "earl-tribute.firebaseapp.com",
    projectId: "earl-tribute",
    storageBucket: "earl-tribute.appspot.com",
    messagingSenderId: "244130771211",
    appId: "1:244130771211:web:f9969f45f5a4f039aff20e"
};
window.app = initializeApp(firebaseConfig);
// File upload logic
const storage = getStorage(window.app);
let selectedFile;
let submitterName;
let metadata;

function handleFileUploadChange(e) {
    selectedFile = e.target.files[0] || '';
}

function handleFileUploadSubmit(e) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    submitterName = document.querySelector('#name_submitter').value || '';
    const fileType = selectedFile.type || '';
    metadata = {
        contentType: `${fileType}`,
        customMetadata: {
            'submitter': `${submitterName}`,
        }
    };
    const storageRef = ref(storage, 'tributes/' + selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile, metadata);
    uploadTask.on('state_changed', (snapshot) => {
        const progressInput = document.getElementById('file_progress');
        progressInput.style.display = 'inline';
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                progressInput.value = progress;
                break;
            case 'running':
                console.log('Upload is running');
                progressInput.value = progress;
                break;
        }
    }, (error) => {
        // Handle unsuccessful uploads
        console.log(error);
        alert(`Please try again. Upload failed with following error: ${error}`);
    }, () => {
        // Do something once upload is complete
        document.getElementById('file_progress').style.display = 'none';
        alert('Upload finished, thank you for uploading a tribute video or image for Earl! Feel free to upload more.');
        document.querySelector("input[type=file]").value = null;
        document.querySelector("input[type=submit]").setAttribute('disabled', true);
    });
}

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);

// Handle Customizing Browse for Files Button
document.querySelector("#files").onchange = function() {
    const fileName = this.files[0]?.name;
    const label = document.querySelector("label[for=files]");
    label.innerText = fileName ?? "Record or Select Video or Photo";
    // Enable submit button
    document.querySelector("input[type=submit]").disabled = false;
};


document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }