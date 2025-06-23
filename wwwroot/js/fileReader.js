window.readUploadedFileAsText = (inputFile) => {
    return new Promise((resolve, reject) => {
        if (!inputFile) {
            resolve(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(inputFile.files[0]);
    });
};
