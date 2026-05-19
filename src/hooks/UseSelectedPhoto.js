import { useState } from "react";

function UseSelectedPhoto() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openPhoto = (photoUrl) => setSelectedPhoto(photoUrl);
    const closePhoto = () => setSelectedPhoto(null);

    return {
        selectedPhoto,
        openPhoto,
        closePhoto
    };
}

export default UseSelectedPhoto;