export default function fileToDataURI(
  file: File | null,
): Promise<string | ArrayBuffer | null | undefined> {
  if (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = (evt) => {
        resolve(evt.target?.result);
      };
      reader.onerror = () => {
        reader.abort();
        reject(reader.error);
      };

      reader.readAsDataURL(file);
    });
  }

  return Promise.reject(new Error('File must be valid'));
}
