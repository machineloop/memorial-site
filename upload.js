// File upload logic
const storage = getStorage(window.app);
let selectedFile;

function handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
}

function handleFileUploadSubmit(e) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'tributes/' + selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    uploadTask.on('state_changed', (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
        }
    }, (error) => {
        // Handle unsuccessful uploads
        console.log(error);
    }, () => {
        // Do something once upload is complete
        alert('Upload finished, thank you for uploading a tribute video or image for Earl!');
    });
}

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);